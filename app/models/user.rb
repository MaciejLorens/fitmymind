class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  has_many :statistics
  has_many :reservations

  belongs_to :company

  def upsert_weight_statistic
    stat = statistics.weight.for_day(Time.now).first || statistics.create(key: 'weight', value: weight)
    stat.update(value: weight, status: nil)
  end

  def weight_graph_data
    result = {labels: [], data: []}
    prev_stat = nil

    (0..statistics.count).to_a.reverse.each do |index|
      date = index.days.ago
      result[:labels] << date.to_date.strftime('%d-%m')
      stat = statistics.weight.for_day(date).first
      if stat.present?
        prev_stat = stat
        result[:data] << stat.value
      else
        result[:data] << prev_stat&.value || 0
      end
    end

    result
  end

  def upsert_water_statistic(value)
    stat = statistics.water.for_day(Time.now).first || statistics.create(key: 'water', value: 0)
    new_value = stat.value + value.to_f
    new_value = znw if new_value > znw
    stat.update(value: new_value, status: stat_status(new_value))

    {
      value: stat.value,
      znw: znw,
      percentage: (new_value * 100.0 / znw).round(2),
      status: stat.status
    }
  end

  def znw
    (1500 + (weight - 20) * 20)
  end

  def stat_status(value)
    status = 'danger'
    status = 'warning' if value > znw * 0.50
    status = 'info' if value > znw * 0.70
    status = 'success' if value > znw * 0.85
    status
  end

end

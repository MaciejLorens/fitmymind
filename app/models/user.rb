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
    result = { labels: [], data: [] }

    stats = statistics.weight.order(created_at: :asc).to_a
    return result if stats.empty?

    prev_stat = stats.first
    (prev_stat.created_at.to_date..Date.today).each do |date|
      stat = stats.find { |s| s.created_at.to_date == date } || prev_stat
      result[:labels] << date.strftime('%d-%m')
      result[:data] << stat.value
      prev_stat = stat
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

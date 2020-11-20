class Statistic < ApplicationRecord

  belongs_to :user

  after_save :calculate_water_status

  scope :weight, -> () { where(key: 'weight') }
  scope :water, -> () { where(key: 'water') }
  scope :for_day, -> (time) { time += 2.hours; where(created_at: time.beginning_of_day..time.end_of_day) }
  scope :for_today, -> () { time = 2.hours.from_now; where(created_at: time.beginning_of_day..time.end_of_day) }
  scope :this_month, -> () do
    time = 2.hours.from_now
    where(created_at: time.beginning_of_month..time.end_of_month).order(created_at: :asc)
  end

  private

  def calculate_water_status
    znw = user.znw

    self.status = 'danger'
    self.status = 'warning' if value > znw * 0.50
    self.status = 'info' if value > znw * 0.70
    self.status = 'success' if value > znw * 0.85

  end

end

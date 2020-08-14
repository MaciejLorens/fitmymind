class Reservation < ApplicationRecord

  belongs_to :company
  belongs_to :user, optional: true

  scope :for_day_time, -> (day, time) { where(day: day, time: time) }

end

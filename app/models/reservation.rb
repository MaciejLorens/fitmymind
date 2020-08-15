class Reservation < ApplicationRecord

  belongs_to :company
  belongs_to :user, optional: true

  scope :for_day_time, -> (day, time) { where(day: day, time: time) }
  scope :for_user_day, -> (user, day) { where(day: day, user_id: user.id) }

end

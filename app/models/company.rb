class Company < ApplicationRecord

  has_many :users
  has_many :reservations

  # company.create_reservations('24.08.2020', '30', '8:00', '17:00')
  def create_reservations(day, interval, start_time, end_time, brake_times)
    start_date = "#{day} #{start_time}".to_datetime.to_i
    end_date = "#{day} #{end_time}".to_datetime.to_i

    (start_date .. end_date).step(interval.to_i.minutes) do |time|
      time_string = Time.zone.at(time).strftime('%H:%M')
      available = !brake_times.include?(time_string)
      reservations.create(day: day, time: time_string, available: available)
    end
  end
end

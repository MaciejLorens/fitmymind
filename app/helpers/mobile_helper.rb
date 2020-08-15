module MobileHelper

  DAYNAMES = %w[Poniedziałek Wtorek Środa Czwartek Piątek Sobota Niedziela].freeze

  def weeks_day(day)
    DAYNAMES[day.to_date.wday]
  end

  def class_for(reservation)
    return 'free' if reservation.available?

    reservation.user_id == current_user.id ? 'own' : 'taken'
  end

  def icon_for(reservation)
    reservation.user_id == current_user.id ? 'fa-user' : 'fa-calendar-day'
  end

end

module MobileHelper

  def class_for(reservation)
    return 'free' if reservation.available?

    reservation.user_id == current_user.id ? 'own' : 'taken'
  end

  def icon_for(reservation)
    reservation.user_id == current_user.id ? 'fa-user' : 'fa-calendar-day'
  end
end

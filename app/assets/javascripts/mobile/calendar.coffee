$ ->

# ====== CALENDAR ======================================================================================================

  $(".calendar").click ->
    _this = this
    day = $(_this).data("day")
    time = $(_this).data("time")
    reservation = day + " " + time

    if $(_this).hasClass('own')
      alert("Tak, to Państwa termin, widzimy się " + day + " o " + time + " :)")
      return

    if $(_this).hasClass('taken')
      alert("Przykro nam ale ten termin jest już zajęty :(")
      return

    if $(_this).closest('.reservation-day').find('.calendar.own').length > 0
      if confirm("Czy chcesz przenieść rezerwację na godzinę " + time + " ?")
        upsert_reservation(_this, day, time)
    else
      if confirm("Czy chcesz zarezerwować termin " + reservation + " ?")
        upsert_reservation(_this, day, time)


#  ===== PRIVATE =======================================================================================================

upsert_reservation = (_this, day, time) ->
  $.ajax
    url: '/mobile/reservation'
    type: 'PUT'
    data: 'day=' + day + '&time=' + time
    success: (data) ->
      $(_this).closest('.reservation-day').find('.calendar.own').removeClass('own').addClass('free ')
      $(_this).closest('.reservation-day').find('.calendar .fa').removeClass('fa-user').addClass('fa-calendar-day ')
      $(_this).removeClass('free').addClass('own')
      $(_this).find('.fa').removeClass('fa-calendar-day').addClass('fa-user')
    error: (data) ->
      alert("Przykro nam ale ten termin jest już zajęty :(")
      $(_this).removeClass('free').addClass('taken')

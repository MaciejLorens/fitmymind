$ ->

#  ===== MENU

  $(".menu").click (e) ->
    e.preventDefault()
    $(".menu").removeClass('active')
    $(@).addClass('active')
    target = $(@).data('target')
    $(".mobile-section").hide()
    $("#" + target).show()


#  ===== WATER

  $(".big-icon").click ->
    _this = this
    $(_this).css('background-color', '#7fa021')
    setTimeout ->
      $(_this).css('background-color', '#ABD62E')
    , 100


#  ===== CALENDAR

  $(".calendar").click ->
    _this = this
    if $(_this).hasClass('free')
      $(_this).css('background-color', '#7fa021')
      setTimeout ->
        $(_this).css('background-color', '#ABD62E')
        reservation = $(_this).data("day") + " " + $($(_this)).data("time")
        response = confirm("Czy chcesz zarezerwować termin " + reservation + "? :)")
        if response == true
          console.log('AJAX')
        else
          console.log('cancel')
      , 100
    else
      alert("Przykro nam ale ten termin jest już zajęty :(")

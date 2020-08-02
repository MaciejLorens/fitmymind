$ ->
  $(".big-icon").click ->
    _this = this
    $(_this).css('background-color', '#7fa021')
    setTimeout ->
      $(_this).css('background-color', '#ABD62E')
    , 200

  $(".menu").click (e) ->
    e.preventDefault()
    $(".menu").removeClass('active')
    $(@).addClass('active')
    target = $(@).data('target')
    $(".mobile-section").hide()
    $("#" + target).show()

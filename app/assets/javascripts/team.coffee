$(document).on 'turbolinks:load', () ->

  $(".ola-details").click (e) ->
    e.preventDefault()
    $("#description_ola").show()
    $("#description_magda").hide()
    $('html, body').animate({scrollTop: $("#description_ola").offset().top - 20}, 500)

  $(".magda-details").click (e) ->
    e.preventDefault()
    $("#description_magda").show()
    $("#description_ola").hide()
    $('html, body').animate({scrollTop: $("#description_magda").offset().top - 20}, 500)

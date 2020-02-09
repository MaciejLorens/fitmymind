$(document).on 'turbolinks:load', () ->

  $(".patient-details").click (e) ->
    e.preventDefault()
    $(".patient-description").hide()
    target = $(@).data('target')
    $(".patient-description." + target).show()
    $('html, body').animate({scrollTop: $(".patient-description." + target).offset().top - 80}, 500)

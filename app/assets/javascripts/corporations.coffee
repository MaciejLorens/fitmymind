$(document).on 'turbolinks:load', () ->

  $(".cr-menu-tags").click (e) ->
    e.preventDefault()
    target = $(@).data('target')

    $(".main.cr-menu-tags").removeClass('active')
    $(".main.cr-menu-tags[data-target='" + target + "']").addClass('active')

    $(".corporation-part").hide()
    $(".corporation-part." + target).show()
    $('html, body').animate({scrollTop: $("." + target).offset().top - 100}, 500)

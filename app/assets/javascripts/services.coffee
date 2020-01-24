$(document).on 'turbolinks:load', () ->

  $(".mb-menu-item").click (e) ->
    e.preventDefault()

  $(".read-more-mb-how").click (e) ->
    e.preventDefault()
    $(@).hide()
    $(".mb-how").show()

  $(".mb-menu-tags").click (e) ->
    e.preventDefault()
    target = $(@).data('target')

    $(".main.mb-menu-tags").removeClass('active')
    $(".main.mb-menu-tags[data-target='" + target + "']").addClass('active')

    $(".metabolic-balance-part").hide()
    $(".metabolic-balance-part." + target).show()
    $('html, body').animate({scrollTop: $("." + target).offset().top - 100}, 500)

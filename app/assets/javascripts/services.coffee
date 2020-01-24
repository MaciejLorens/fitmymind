$(document).on 'turbolinks:load', () ->

  $(".mb-menu-item").click (e) ->
    e.preventDefault()

  $(".read-more-mb-program").click (e) ->
    e.preventDefault()
    $(@).hide()
    $(".read-less-mb-program").show()
    $("#mb-program").show()

  $(".read-less-mb-program").click (e) ->
    e.preventDefault()
    $(@).hide()
    $(".read-more-mb-program").show()
    $("#mb-program").hide()

  $('.read-more-mb-who').click (e) ->
    e.preventDefault()
    $(@).hide()
    $(".read-less-mb-who").show()
    $("#mb-who").show()

  $(".read-less-mb-who").click (e) ->
    e.preventDefault()
    $(@).hide()
    $(".read-more-mb-who").show()
    $("#mb-who").hide()

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

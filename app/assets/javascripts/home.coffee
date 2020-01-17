$(document).on 'turbolinks:load', () ->

  $(".read-more").click (e) ->
    e.preventDefault();
    $(".read-more").show()
    $(@).hide()
    $('.read-more-content').addClass('hidden')
    $(@).parent().find('span').removeClass('hidden')

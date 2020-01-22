$(document).on 'turbolinks:load', () ->

  $(".read-more").click (e) ->
    e.preventDefault();
    $(".read-more").show()
    $(@).hide()
    $('.read-more-content').addClass('hidden')
    $(@).parent().find('span').removeClass('hidden')

  $("#services-submenu").mouseenter ->
    unless $(".topnav").hasClass('responsive')
      $(".submenu").css('display', 'inline-grid')

  $(".submenu").mouseenter ->
    unless $(".topnav").hasClass('responsive')
      $(".submenu").css('display', 'inline-grid')

  $("#services-submenu").mouseleave (e) ->
    unless $(".topnav").hasClass('responsive')
      $(".submenu").css('display', 'none')

  $(".submenu").mouseleave (e) ->
    unless $(".topnav").hasClass('responsive')
      $(".submenu").css('display', 'none')

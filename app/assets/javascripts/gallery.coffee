$(document).on 'turbolinks:load', () ->

  $(".gallery-filter-btn").click (e) ->
    e.preventDefault()
    $(".portfolio-gallery").hide()
    $(".gallery-filter-btns li a").removeClass('active')
    $(@).addClass('active')
    filter = $(@).data('filter')
    if filter == 'all'
      $(".portfolio-gallery .portfolio-item").show()
    else
      $(".portfolio-gallery .portfolio-item").hide()
      $(".portfolio-gallery .portfolio-item." + $(@).data('filter')).show()
    $(".portfolio-gallery").fadeIn()

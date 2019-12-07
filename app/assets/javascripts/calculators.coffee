ready = ->

#  ----------------- gallery:

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

#  ----------------- calculators:

  $('#bmi-result').hide()
  $('#nmc-result').hide()
  $('#whr-result').hide()
  $('#cpm-result').hide()
  $('#znw-result').hide()
  $('.bmi_result_description').hide()
  $('.bmi_result_description').hide()

  $('.sport_activity').change ->
    explanation = switch $(@).val()
      when '1.2' then ''
      when '1.4' then 'Twoja praca nie wymaga dużego, ani umiarkowanego wysiłku fizycznego, dodatkowo nie wykonujesz żadnej aktywności fizycznej, nie wykonujesz żadnych ćwiczeń, jedyną 	Twoją aktywnością fizyczną może być spacer'
      when '1.6' then 'twoje obowiązki na co dzień nie wymagają dużego wysiłku, dużo czasu spędzasz za biurkiem np. przy komputerze, jeśli już zdecydujesz się na aktywność fizyczną 	najczęściej wybierasz spacer lub niezbyt forsowne ćwiczenia'
      when '1.75' then 'jesteś osobą aktywną, starasz się 	regularnie ćwiczyć, po kilku godzinach spędzonych w pozycji 	siedzącej starasz się rozruszać, aktywność fizyczna jest 	dla Ciebie sposobem na spędzanie wolnego czasu'
      when '2.0' then 'intensywnie trenujesz, jesteś sportowcem 	lub cięższko pracujesz fizycznie, wysiłek fizyczny jest 	nieodłączną częścią Twojego życia'
      when '2.2' then ''
    $('.sport_activity_explanation').text(explanation)

  $("#bmi_mass, #cpm_mass, #znw_mass").keyup ->
    val = $(@).val()
    $("#bmi_mass").val(val)
    $("#cpm_mass").val(val)
    $("#znw_mass").val(val)

  $("#bmi_height, #nmc_height, #cpm_height").keyup ->
    val = $(@).val()
    $("#bmi_height").val(val)
    $("#nmc_height").val(val)
    $("#cpm_height").val(val)

  $("#nmc_gender, #whr_gender, #cpm_gender").change ->
    val = $(@).val()
    $("#nmc_gender").val(val)
    $("#whr_gender").val(val)
    $("#cpm_gender").val(val)


  #   ---------------------------------------------------------------------- BMI
  $('#submit-button-bmi').click ->
    $('#bmi-result').fadeOut 300, ->
      $('.bmi_result_description').hide()
      mass = parseFloat($('#bmi_mass').val())
      height = parseFloat($('#bmi_height').val())
      bmi = Math.round((mass / ((height / 100) * (height / 100))) * 100) / 100
      switch (true)
        when (bmi < 16.0) then $('.bmi_0').show()
        when (bmi > 16.0 && bmi <= 16.99) then $('.bmi_1699').show()
        when (bmi > 17.0 && bmi <= 18.49) then $('.bmi_1849').show()
        when (bmi > 18.5 && bmi <= 24.99) then $('.bmi_2499').show()
        when (bmi > 25.0 && bmi <= 29.99) then $('.bmi_2999').show()
        when (bmi > 30.0 && bmi <= 34.99) then $('.bmi_3499').show()
        when (bmi > 35.0 && bmi <= 39.99) then $('.bmi_3999').show()
        when (bmi > 40.0) then $('.bmi_4000').show()

      $("#bmi-result-number").html(bmi)
      $('#bmi-result').fadeIn(300)


  #   ---------------------------------------------------------------------- NMC
  $('#submit-button-nmc').click ->
    $('#nmc-result').fadeOut 300, ->
      height = parseFloat($('#nmc_height').val())
      sex = $("#nmc_gender").val()
      nmc = switch sex
        when 'woman' then (height - 100 - (height - 150) / 2)
        when 'man' then (height - 100 - (height - 150) / 4)

      $("#nmc-result-number").html(Math.round(nmc * 10) / 10)
      $('#nmc-result').fadeIn(300)


  #   ---------------------------------------------------------------------- WHR
  $('#submit-button-whr').click ->
    $('#whr-result').fadeOut 300, ->
      $('.whr_description').hide()
      talia = parseFloat($('#whr_talia').val())
      loins = parseFloat($('#whr_loins').val())
      sex = $("#whr_gender").val()
      whr = Math.round((talia * 100) / loins) / 100

      if sex == 'woman'
        if whr >= 0.8
          $('.whr_apple_description').show()
        else
          $('.whr_pear_description').show()
      else
        if whr >= 1.0
          $('.whr_apple_description').show()
        else
          $('.whr_pear_description').show()

      $("#whr-result-number").html(whr)
      $('#whr-result').fadeIn(300)


  #   ---------------------------------------------------------------------- CPM
  $('#submit-button-cpm').click ->
    $('#cpm-result').fadeOut 300, ->
      mass = parseFloat($('#cpm_mass').val())
      height = parseFloat($('#cpm_height').val())
      age = parseFloat($('#cpm_age').val())
      sex = $("#cpm_gender").val()
      pal = $("#cpm_sport_activity").val()

      ppm = if sex == 'woman'
        665.09 + (9.56 * mass) + (1.85 * height) - (4.67 * age)
      else
        66.47 + (13.75 * mass) + (5 * height) - (6.75 * age)

      cpm = Math.round(ppm * pal)
      $("#cpm-result-number").html(cpm)
      $("#cpm-result").fadeIn(300)

  #   ---------------------------------------------------------------------- ZNW
  $('#submit-button-znw').click ->
    $('#znw-result').fadeOut 300, ->
      mass = parseFloat($('#znw_mass').val())
      znw = (1500 + (mass - 20) * 20) / 1000
      $("#znw-result-number").html(znw)
      $('#znw-result').fadeIn(300)


$(document).ready(ready)
$(document).on('page:load', ready)

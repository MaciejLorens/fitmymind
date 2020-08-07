$ ->

#  ===== MENU

  $(".menu").click (e) ->
    e.preventDefault()
    $(".menu").removeClass('active')
    $(@).addClass('active')
    target = $(@).data('target')
    $(".mobile-section").hide()
    $("#" + target).show()


#  ===== WATER

  $(".water").click ->
    weight = parseFloat($("#user_weight").val())
    znw = Math.round((1500 + (weight - 20) * 20) / 100) * 100
    _this = this
    $(_this).css('background-color', '#7fa021')
    setTimeout ->
      $(_this).css('background-color', '#ABD62E')
    , 100
    current_amount = parseFloat($("#current_amount").val())
    amount = parseFloat($(_this).data('amount'))
    sum = current_amount + amount
    percentage = (sum * 100 / znw)
    $("#current_amount").val(sum)
    $(".progress-bar").width(percentage + '%')
    $(".progress-bar").html('<span>' + sum + ' / ' + znw + ' ml' + '</span>')
    console.log('  ----- percentage: %j', percentage);
    if percentage > 85
      $(".progress-bar").removeClass('bg-success bg-info bg-warning bg-danger').addClass('bg-success')
    else if percentage > 70
      $(".progress-bar").removeClass('bg-success bg-info bg-warning bg-danger').addClass('bg-info')
    else if percentage > 50
      $(".progress-bar").removeClass('bg-success bg-info bg-warning bg-danger').addClass('bg-warning')
    else
      $(".progress-bar").removeClass('bg-success bg-info bg-warning bg-danger').addClass('bg-danger')



#  ===== CALENDAR

  $(".calendar").click ->
    _this = this
    if $(_this).hasClass('free')
      $(_this).css('background-color', '#7fa021')
      setTimeout ->
        $(_this).css('background-color', '#ABD62E')
        reservation = $(_this).data("day") + " " + $($(_this)).data("time")
        response = confirm("Czy chcesz zarezerwować termin " + reservation + "? :)")
        if response == true
          console.log('AJAX')
        else
          console.log('cancel')
      , 100
    else
      alert("Przykro nam ale ten termin jest już zajęty :(")


#  ===== PROFIL
  update_calculators()
  $(".user-data").change ->
    update_calculators()


update_calculators = () ->
  age = parseFloat($("#user_age").val())
  height = parseFloat($("#user_height").val())
  weight = parseFloat($("#user_weight").val())
  sex = $("#user_sex").val()

  # BMI
  bmi = Math.round((weight / ((height / 100) * (height / 100))) * 100) / 100
  $("#bmi").val(bmi)

  # NMC
  nmc = switch sex
    when 'woman' then (height - 100 - (height - 150) / 2)
    when 'man' then (height - 100 - (height - 150) / 4)
  $("#nmc").val(nmc + ' kg')

  # ZNW
  znw = Math.round((1500 + (weight - 20) * 20) / 100) / 10
  $("#znw").val(znw + ' l')

  # CPM
  pal = 1.6
  ppm = if sex == 'woman'
    665.09 + (9.56 * weight) + (1.85 * height) - (4.67 * age)
  else
    66.47 + (13.75 * weight) + (5 * height) - (6.75 * age)

  cpm = Math.round(ppm * pal)
  $("#cpm").val(cpm + ' kcal')

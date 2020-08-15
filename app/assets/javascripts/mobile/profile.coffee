$ ->

  update_calculators()
  $(".user-data").change ->
    update_calculators()


# ====== PRIVATE =======================================================================================================

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
  znw = Math.round(1500 + (weight - 20) * 20)
  $("#znw").val(znw + ' ml')

  # CPM
  pal = 1.6
  ppm = if sex == 'woman'
    665.09 + (9.56 * weight) + (1.85 * height) - (4.67 * age)
  else
    66.47 + (13.75 * weight) + (5 * height) - (6.75 * age)

  cpm = Math.round(ppm * pal)
  $("#cpm").val(cpm + ' kcal')

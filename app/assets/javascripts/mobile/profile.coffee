$ ->
  update_calculators()
  $(".user-data").keyup ->
    upsert_profile()

  $("#user_sex").change ->
    upsert_profile()


# ====== PRIVATE =======================================================================================================

upsert_profile = () ->
  age = $("#user_age").val()
  height = $("#user_height").val()
  weight = $("#user_weight").val()
  sex = $("#user_sex").val()
  if age.length >= 2 && height.length >= 3 && weight.length >= 2 && !(weight[weight.length - 1] == ',' || weight[weight.length - 1] == '.')
    $.ajax
      url: '/mobile/update_profile'
      type: 'PUT'
      data: 'age=' + age + '&height=' + height + '&weight=' + weight + '&sex=' + sex
      success: (data) ->
        update_calculators()
        update_graph()
      error: (data) ->
        update_calculators()


update_calculators = () ->
  age = parseFloat($("#user_age").val())
  height = parseFloat($("#user_height").val())
  weight = parseFloat($("#user_weight").val())
  sex = $("#user_sex").val()

  # BMI
  bmi = Math.round((weight / ((height / 100) * (height / 100))) * 100) / 100
  $("#bmi").val(bmi)
  animate_control('#bmi')

  # NMC
  nmc = switch sex
    when 'woman' then (height - 100 - (height - 150) / 2)
    when 'man' then (height - 100 - (height - 150) / 4)
  $("#nmc").val(nmc + ' kg')
  animate_control('#nmc')

  # ZNW
  znw = Math.round(1500 + (weight - 20) * 20)
  $("#znw").val(znw + ' ml')
  animate_control('#znw')

  # CPM
  pal = 1.6
  ppm = if sex == 'woman'
    665.09 + (9.56 * weight) + (1.85 * height) - (4.67 * age)
  else
    66.47 + (13.75 * weight) + (5 * height) - (6.75 * age)

  cpm = Math.round(ppm * pal)
  $("#cpm").val(cpm + ' kcal')
  animate_control('#cpm')

update_graph = () ->
  graph_data = JSON.parse($('#graph_data').val())
  graph_data.data.pop()
  graph_data.data.push(parseFloat($("#user_weight").val()))

  ctx = $('#weight_graph')[0].getContext('2d')
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: graph_data.labels,
      datasets: [
        {
          label: 'Waga w czasie',
          data: graph_data.data,
          backgroundColor: ['rgba(171, 214, 46, 0.3)'],
          borderColor: ['rgba(171, 214, 46)'],
          borderWidth: 3
        }
      ]
    }
  })

animate_control = (control) ->
  $(control).css("background-color", 'rgba(127,160,33, 0.4)');
  setTimeout (->
    $(control).css("background-color", 'rgba(127,160,33, 0.35)');
    setTimeout (->
      $(control).css("background-color", 'rgba(127,160,33, 0.30)');
      setTimeout (->
        $(control).css("background-color", 'rgba(127,160,33, 0.25)');
        setTimeout (->
          $(control).css("background-color", 'rgba(127,160,33, 0.20)');
          setTimeout (->
            $(control).css("background-color", 'rgba(127,160,33, 0.15)');
            setTimeout (->
              $(control).css("background-color", 'rgba(127,160,33, 0.10)');
              setTimeout (->
                $(control).css("background-color", 'rgba(127,160,33, 0.05)');
                setTimeout (->
                  $(control).css("background-color", 'white');
                ), 50
              ), 50
            ), 50
          ), 50
        ), 50
      ), 50
    ), 50
  ), 50

$ ->

# ====== ACHIEVEMENTES =================================================================================================
  update_graph()

#  ===== PRIVATE =======================================================================================================

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

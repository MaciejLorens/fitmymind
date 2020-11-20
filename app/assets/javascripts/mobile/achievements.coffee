$ ->

# ====== ACHIEVEMENTES =================================================================================================
  graph_data = JSON.parse($('#graph_data').val())

  ctx = $('#weight_graph')[0].getContext('2d')
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: graph_data.labels,
      datasets: [{
        label: 'Waga w czasie',
        data: graph_data.data,
        backgroundColor: [
          'rgba(171, 214, 46, 0.3)',
        ],
        borderColor: [
          'rgba(171, 214, 46)',
        ],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
#            beginAtZero: true
          }
        }]
      }
    }
  })

#  ===== PRIVATE =======================================================================================================

$ ->
# ====== WATER =========================================================================================================

  $(".water").click ->
    _this = this
    $(_this).css('background-color', '#7fa021')

    value = parseFloat($(_this).data('amount'))

    $.ajax
      url: '/mobile/upsert_water_statistic'
      type: 'PUT'
      data: 'value=' + value
      success: (data) ->
        $(".progress-bar").html('<span>' + data.value + ' ml / ' + data.znw + ' ml' + '</span>')
        $(".progress-bar").width(data.percentage + '%')
        $(".progress-bar").removeClass('bg-success bg-info bg-warning bg-danger').addClass('bg-' + data.status)
        $(".current-day").removeClass('bg-success bg-info bg-warning bg-danger').addClass('bg-' + data.status)
        $(_this).css('background-color', '#ABD62E')


#  ===== PRIVATE =======================================================================================================

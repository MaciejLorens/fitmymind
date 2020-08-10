module ResultsHelper

  def current_month_and_year
    result_time = 1.month.ago

    months = %w(Stycznia Lutego Marca Kwietnia Maja Czerwca Lipca Sierpnia Września Października Listopada Grudnia)
    current_month = months[result_time.month - 1]

    "#{current_month} #{result_time.year}"
  end

  def current_month
    months = %w(Styczeń Luty Marzec Kwiecień Maj Czerwiec Lipiec Sierpień Wrzesień Październik Listopad Grudzień)
    months[Date.today.month - 1]
  end
end

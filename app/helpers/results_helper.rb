module ResultsHelper

  def current_month_and_year
    result_time = 1.month.ago

    months = %w(Stycznia Lutego Marca Kwietnia Maja Czerwca Lipca Sierpnia Września Października Listopada Grudnia)
    current_month = months[result_time.month - 1]

    "#{current_month} #{result_time.year}r."
  end
end

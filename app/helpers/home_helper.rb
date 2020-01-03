module HomeHelper

  def are_we_open
    wday = Time.now.wday
    hour = Time.now.hour

    closed = '<h5 class="widget-title pull-right pb-10 text-red">Teraz Zamknięte</h5>'
    open = '<h5 class="widget-title pull-right pb-10 text-green">Teraz Otwarte</h5>'
    closed_soon = "<h5 class='widget-title pull-right pb-10 text-orange'>Zaraz Zamykamy &nbsp;( #{60 - Time.now.min} min )</h5>"

    return closed if wday == 0 || wday == 6

    case wday
    when 1,5 # monday, friday
      return closed_soon if hour == 15
      hour < 16 && hour >= 8 ? open : closed
    when 2,3 # tuesday, wednesday
      return closed_soon if hour == 19
      hour < 20 && hour >= 12 ? open : closed
    when 4 # thursday
      return closed_soon if hour == 17
      hour < 18 && hour >= 10 ? open : closed
    else
      closed
    end
  end

end

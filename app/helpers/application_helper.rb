module ApplicationHelper

  def activity_options
    {
      '' => '',
      'pacjent leżący w łóżku' => 1.2,
      'brak aktywności fizycznej' => 1.4,
      'niska aktywność fizyczna' => 1.6,
      'umiarkowana aktywność fizyczna' => 1.75,
      'duża aktywność fizyczna' => 2.0,
      'sport na poziomie wyczynowym' => 2.2
    }
  end

  def gender_options
    {
      '' => '',
      'kobieta' => 'woman',
      'mężczyzna' => 'man'
    }
  end

end

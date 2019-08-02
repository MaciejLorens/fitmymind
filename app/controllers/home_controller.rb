class HomeController < ApplicationController

  def index
  end

  def services
  end

  def team
  end

  def celebrities
    @celebrities = Celebrity.order(created_at: :desc).limit(28)
  end

  def calculators
  end

  def blog
  end

  def contact
  end

end

class HomeController < ApplicationController

  def index
  end

  def services
  end

  def blog
  end

  def celebrities
    @celebrities = Celebrity
                     .order(created_at: :desc)
                     .limit(28)
  end

  def team
  end

  def contact
  end

end

class CelebritiesController < ApplicationController

  def index
    @celebrities = Celebrity.order(created_at: :desc).limit(28)
  end

end

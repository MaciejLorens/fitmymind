class ResultsController < ApplicationController

  def index
    @results = Result.order(created_at: :desc).limit(18)
  end

end

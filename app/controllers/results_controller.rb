class ResultsController < ApplicationController

  def index
    @results = Result.order(created_at: :desc).limit(28)
  end

end

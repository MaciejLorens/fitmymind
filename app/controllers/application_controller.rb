class ApplicationController < ActionController::Base

  def latest_news
    @latest_news ||= New.all.order(created_at: :asc).first(3)
  end

  helper_method :latest_news
end

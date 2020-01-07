class HomeController < ApplicationController

  def index
    @recent_posts = Post.order(created_at: :desc).limit(3)
    #@recent_new = New.order(created_at: :desc).first
  end

end

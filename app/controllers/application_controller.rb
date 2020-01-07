class ApplicationController < ActionController::Base

  def latest_news
    @latest_news ||= New.all.order(created_at: :asc).first(3)
  end

  def latest_posts
    @latest_posts ||= Post.all.order(created_at: :asc).first(3)
  end

  def post_title(post)
    (post.title.gsub('<h2>', '').gsub('</h2>', '')[0..45] + '...').html_safe
  end

  helper_method :latest_news, :latest_posts, :post_title
end

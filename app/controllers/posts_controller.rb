class PostsController < ApplicationController
  before_action :set_post, only: [:show]

  def index
    @categories = Category.order(name: :asc)
    @tags = Tag.order(name: :asc)

    @posts = Post.includes(:category, :tags).joins(:category, :tags).order(created_at: :desc)

    if params[:category]
      @posts = @posts.where('categories.name = ?', params[:category])
    end

    if params[:tags]
      @posts = @posts.where('tags.name IN (?)', params[:tags])
    end

  end

  def show
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :introduction, :content, :photo)
  end

end

class NewsController < ApplicationController
  before_action :set_new, only: [:show, :edit, :update, :destroy]

  def index
    @news = New.all
  end

  def show
  end

  def new
    @news = New.new
  end

  def edit
  end

  def create
    @new = New.new(New_params)

    respond_to do |format|
      if @new.save
        format.html { redirect_to @new, notice: 'New was successfully created.' }
        format.json { render :show, status: :created, location: @new }
      else
        format.html { render :new }
        format.json { render json: @new.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @new.update(New_params)
        format.html { redirect_to @new, notice: 'New was successfully updated.' }
        format.json { render :show, status: :ok, location: @new }
      else
        format.html { render :edit }
        format.json { render json: @new.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @new.destroy
    respond_to do |format|
      format.html { redirect_to news_url, notice: 'New was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_new
    @new = New.find(params[:id])
  end

  def New_params
    params.require(:New).permit(:title, :introduction, :content, :photo)
  end

end

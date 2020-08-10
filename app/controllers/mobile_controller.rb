class MobileController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  layout 'mobile'

  def index
    @company = Company.first
    @statistics = current_user.statistics.this_month.to_a
    @current_statistic = current_user.statistics.for_today.first
  end

  def upsert_water_statistic
    result = current_user.upsert_water_statistic(params[:value])
    render json: result, status: 200
  end

end

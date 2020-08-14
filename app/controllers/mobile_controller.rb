class MobileController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  layout 'mobile'

  def index
    @reservations = current_user.company.reservations.order(day: :desc, time: :asc)
    @statistics = current_user.statistics.this_month.to_a
    @current_statistic = current_user.statistics.for_today.first
  end

  def upsert_water_statistic
    result = current_user.upsert_water_statistic(params[:value])
    render json: result, status: 200
  end

  def reservation
    reservation = current_user.company.reservations.for_day_time(params[:day], params[:time]).first

    if reservation.available?
      reservation.update(available: false, user_id: current_user.id)
      render json: {}, status: 200
    else
      render json: {}, status: 400
    end
  end

end

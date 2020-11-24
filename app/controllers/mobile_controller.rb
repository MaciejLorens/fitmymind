class MobileController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  layout 'mobile'

  def index
    @reservations = current_user.company.reservations.sort{|a, b| a.day.to_date <=> b.day.to_date if b.present?}
    @statistics = current_user.statistics.this_month.to_a
    @current_statistic = current_user.statistics.for_today.first
    @graph_data = current_user.weight_graph_data.to_json
  end

  def update_profile
    if current_user.update(users_params)
      current_user.upsert_weight_statistic
      render json: {}, status: 200
    else
      render json: {}, status: 400
    end
  end

  def upsert_weight_statistic
    result = current_user.upsert_weight_statistic(params[:value])
    render json: result, status: 200
  end

  def upsert_water_statistic
    result = current_user.upsert_water_statistic(params[:value])
    render json: result, status: 200
  end

  def reservation
    reservation = current_user.company.reservations.for_day_time(params[:day], params[:time]).first

    if reservation.available?
      existing_reservation = current_user.company.reservations.for_user_day(current_user, params[:day])
      existing_reservation.each { |existing| existing.update(available: true, user_id: nil) }
      reservation.update(available: false, user_id: current_user.id)
      render json: {}, status: 200
    else
      render json: {}, status: 400
    end
  end

  private

  def users_params
    params.permit(:age, :height, :weight, :sex)
  end
end

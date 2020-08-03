class MobileController < ApplicationController
  # before_action :authenticate_user!

  layout 'mobile'

  def index
    @company = Company.first
  end

end

class WhiesController < ApplicationController
  def index
    @pb_whies = PbWhy.all
    render json: @pb_whies
  end
end

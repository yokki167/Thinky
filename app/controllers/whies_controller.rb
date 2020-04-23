class WhiesController < ApplicationController
  def index
    @whies = Why.all
    render json: @whies
  end
end

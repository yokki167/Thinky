class WhiesController < ApplicationController
  def index
    @whies = Why.all
    render json: @whies
  end

  def post
    @why = Why.create(question: params[:why])
    render json: @why
  end
end

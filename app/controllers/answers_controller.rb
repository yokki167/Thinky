class AnswersController < ApplicationController
  def post_pv
    @answer = PvAnswer.create(content: params[:answer])
    render json: @answer
  end

  def post_pb
    @answer = PbAnswer.create(content: params[:answer])
    render json: @answer
  end
end

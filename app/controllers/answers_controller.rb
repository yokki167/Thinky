class AnswersController < ApplicationController
  def index_pv
    @answers = PvAnswer.where(why_id: params[:id])
    render json: @answers
  end

  def index_pb
    @answers = PbAnswer.where(why_id: params[:id])
    render json: @answers
  end

  def post_pv
    @answer = PvAnswer.create(content: params[:answer], why_id: params[:id])
    render json: @answer
  end

  def post_pb
    @answer = PbAnswer.create(content: params[:answer], why_id: params[:id])
    render json: @answer
  end
end

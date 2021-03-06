class AnswersController < ApplicationController

  include CurrentUserConcern


  def index_pv
    @answers = PvAnswer.where(why_id: params[:id])
    render json: @answers
  end

  def index_pb
    @answers = PbAnswer.where(why_id: params[:id])
    render json: @answers
  end

  def find_pv
    @answer = PvAnswer.find(params[:id])
    render json: @answer
  end

  def find_pb
    @answer = PbAnswer.find(params[:id])
    render json: @answer
  end

  def post_pv
    @answer = PvAnswer.create(content: params[:answer], why_id: params[:id], user_id: params[:user_id])
    render json: @answer
  end

  def post_pb
    @answer = PbAnswer.create(content: params[:answer], why_id: params[:id], user_id: params[:user_id])
    render json: @answer
  end
end

class WhiesController < ApplicationController
  # before_action :set_current_user

  def index
    @whies = Why.where(share: true)

    # @count = @whies.pb_answers.count

    render json: @whies
    # render json: @count

  end

  def show
    @why = Why.find(params[:id])
    render json: @why
  end

  def post
    @why = Why.create(question: params[:why], genre_id: params[:genre], share: params[:share], user_id: params[:user_id])
    # @why = Why.create(question: params[:why], genre_id: params[:genre], share: params[:share]).merge(user_id: params[:user_id])
    # @why = Why.new(why_params)
    # if @why.save
      render json: @why
    # else
    #   render json: { message: "could not save"}
    # end
  end

  def count
    @why = Why.find(params[:id])
    @count = @why.pb_answers.count 
    render json: @count

  end

  def user
    @why = Why.where( user_id: params[:id])
    render json: @why

  end

  def update
    @why = Why.find(params[:id])
    @why.update(share: params[:share])
    render json: @why
  end

  # private
  # def why_params
  #   params.permit(question: params[:why], genre_id: params[:genre], share: params[:share]).merge(user_id: params[:user_id])
  # end
end

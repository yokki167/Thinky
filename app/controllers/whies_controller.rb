class WhiesController < ApplicationController
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
    @why = Why.create(question: params[:why], genre_id: params[:genre], share: params[:share])
    render json: @why
  end

  def update
    @why = Why.find(params[:id])
    @why.update(share: params[:share])
    render json: @why
  end
end

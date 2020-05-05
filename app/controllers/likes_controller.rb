class LikesController < ApplicationController
  include CurrentUserConcern
  before_action :set_variables

  def like
    # set_current_user
    like = @user.likes.new(why_id: @why.id)
    if like.save
      render json: {message: "like success", like: like}
    else
      render json: {message: "like fail"}
    end
  end

  def unlike
    # set_current_user
    like = @user.likes.find_by(why_id: @why.id)
    if like.destroy
      render json: {message: "unlike success", unlike: like}
    else
      render json: {message: "unlike fail"}
    end
    
  end

  def status
    like = Like.find_by(why_id: @why.id, user_id: @user.id)
    if like
      render json: {status: "already liked"}
    else
      render json: {status: "not liked yet"}
    end
  end

  private
  def set_variables
    @why = Why.find(params[:why_id])
    @user = User.find(params[:user_id])
  end
end

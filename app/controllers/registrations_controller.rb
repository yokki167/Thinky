class RegistrationsController < ApplicationController
  

  def create
    user = User.create!(
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end

  def edit
    @user = User.find(params[:id])
    render json: @user

  end

  def update
    @user = User.find(params[:id])


    if  params['user']['password']

     user = @user.update(
      email: params['user']['email'],
      username: params['user']['username'],
      password: params['user']['password'],
    )
    else
    user = @user.update(
      email: params['user']['email'],
      username: params['user']['username'],
    )

    end

    if user
      render json: {
        status: :created,
        user: @user
      }
    else
      render json: { status: 500 }
    end


  end
end

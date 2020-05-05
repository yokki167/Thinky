class ApplicationController < ActionController::API
  include ActionController::Cookies

  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  # before_action :set_current_user



  # def set_current_user
  #   if session[:user_id]
  #     @current_user = User.find(session[:user_id])
  #   # else
  #   #   render json: {data: session, message: 'cookie does not hava a user_id'}
  #   end
  # end
end

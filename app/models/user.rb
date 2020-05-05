class User < ApplicationRecord
  has_secure_password
  has_many :whies
  has_many :pb_answers
  has_many :pv_answers

  has_many :likes, dependent: :destroy
  has_many :like_whies, through: :likes, source: :why

  validates_presence_of :email
  validates_uniqueness_of :email

  def set_current_user
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end
end

class Why < ApplicationRecord
  has_many :pv_answers
  has_many :pb_answers
  belongs_to :genre

  validates :question, presence: true
  belongs_to :user

  has_many :likes, dependent: :destroy
  has_many :liking_users, through: :likes, source: :user
end

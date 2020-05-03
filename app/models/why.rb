class Why < ApplicationRecord
  has_many :pv_answers
  has_many :pb_answers
  belongs_to :genre
  belongs_to :user
end

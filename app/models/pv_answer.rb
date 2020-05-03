class PvAnswer < ApplicationRecord
  belongs_to :why

  validates :content, presence: true
  belongs_to :user
end

class PvAnswer < ApplicationRecord
  belongs_to :why

  validates :content, presence: true
end

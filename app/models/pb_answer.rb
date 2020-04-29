class PbAnswer < ApplicationRecord
  belongs_to :why

  validates :content, presence: true
end

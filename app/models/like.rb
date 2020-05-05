class Like < ApplicationRecord
  belongs_to :why, counter_cache: :likes_count
  belongs_to :user
end

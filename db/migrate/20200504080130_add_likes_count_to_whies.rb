class AddLikesCountToWhies < ActiveRecord::Migration[5.2]
  def change
    add_column :whies, :likes_count, :integer
  end
end

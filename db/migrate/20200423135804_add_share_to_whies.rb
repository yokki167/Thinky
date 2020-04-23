class AddShareToWhies < ActiveRecord::Migration[5.2]
  def change
    add_column :whies, :share, :boolean
  end
end

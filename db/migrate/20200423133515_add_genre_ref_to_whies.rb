class AddGenreRefToWhies < ActiveRecord::Migration[5.2]
  def change
    add_reference :whies, :genre, foreign_key: true
  end
end

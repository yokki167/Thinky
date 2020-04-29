class CreateWhies < ActiveRecord::Migration[5.2]
  def change
    create_table :whies do |t|
      t.text :question, null: false

      t.timestamps
    end
  end
end

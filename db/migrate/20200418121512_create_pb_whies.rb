class CreatePbWhies < ActiveRecord::Migration[5.2]
  def change
    create_table :pb_whies do |t|
      t.text :question

      t.timestamps
    end
  end
end

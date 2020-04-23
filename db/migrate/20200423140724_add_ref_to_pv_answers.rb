class AddRefToPvAnswers < ActiveRecord::Migration[5.2]
  def change
    add_reference :pv_answers, :user, foreign_key: true
    add_reference :pv_answers, :why, foreign_key: true
  end
end

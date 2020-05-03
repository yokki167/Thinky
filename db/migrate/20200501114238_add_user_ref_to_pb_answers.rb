class AddUserRefToPbAnswers < ActiveRecord::Migration[5.2]
  def change
    add_reference :pb_answers, :user, foreign_key: true
    add_reference :pb_answers, :why, foreign_key: true
  end
end

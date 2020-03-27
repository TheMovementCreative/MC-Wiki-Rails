class AddLessonsRefToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_reference :lessons, :challenge, null: false, foreign_key: true
  end
end

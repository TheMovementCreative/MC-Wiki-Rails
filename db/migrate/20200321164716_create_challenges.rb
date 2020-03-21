class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.string :name
      t.string :description
      t.string :duration
      t.string :age_experience
      t.string :intensity
      t.string :activity_description
      t.string :coach_notes

      t.timestamps
    end
  end
end

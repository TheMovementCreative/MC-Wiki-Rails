class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.string :activity_title
      t.string :purpose
      t.string :space
      t.string :goal
      t.string :challenge
      t.string :movementsActions
      t.string :tools
      t.string :rules
      t.string :videoURL
      t.string :imageURL

      t.timestamps
    end
  end
end

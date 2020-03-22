class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.string :game_title
      t.string :purpose
      t.string :space
      t.string :goal
      t.string :challenge
      t.string :core_mechanics
      t.string :components
      t.string :rules
      t.string :video_url
      t.string :image_url
      t.timestamps
    end
  end
end

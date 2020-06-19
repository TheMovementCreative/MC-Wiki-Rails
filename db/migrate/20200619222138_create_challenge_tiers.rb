class CreateChallengeTiers < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges_tiers do |t|
      t.belongs_to :challenge
      t.belongs_to :tier
    end
    create_table :courses_tiers do |t|
      t.belongs_to :course
      t.belongs_to :tier
    end
    create_table :lessons_tiers do |t|
      t.belongs_to :lesson
      t.belongs_to :tier
    end
  end
end

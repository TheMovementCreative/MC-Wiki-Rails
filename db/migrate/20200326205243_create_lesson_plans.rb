class CreateLessonPlans < ActiveRecord::Migration[6.0]
  def change
    create_table :lesson_plans do |t|
      t.references :challenge
      t.references :lesson

      t.timestamps
    end
  end
end

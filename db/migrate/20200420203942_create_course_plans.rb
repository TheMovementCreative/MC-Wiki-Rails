class CreateCoursePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :course_plans do |t|
      t.bigint :course_id
      t.bigint :lesson_id
      t.string :lesson_category
      t.text :details_override

      t.timestamps
    end
  end
end

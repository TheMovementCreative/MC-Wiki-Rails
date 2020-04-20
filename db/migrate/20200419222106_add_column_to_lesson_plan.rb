class AddColumnToLessonPlan < ActiveRecord::Migration[6.0]
  def change
    add_column :lesson_plans, :activity_category, :string
    add_column :lesson_plans, :rules_override, :text
  end
end

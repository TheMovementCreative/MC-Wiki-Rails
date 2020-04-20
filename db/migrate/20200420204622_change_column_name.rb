class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :lessons, :lesson_name, :name
    rename_column :challenges, :activity_title, :name 
  end
end

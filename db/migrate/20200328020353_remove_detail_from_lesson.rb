class RemoveDetailFromLesson < ActiveRecord::Migration[6.0]
  def change

    remove_column :lessons, :challenge_id, :bigint
  end
end

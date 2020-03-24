class ChangeRulesFromStringToText < ActiveRecord::Migration[6.0]
  def up
    change_column :challenges, :rules, :text
  end

  def down
    change_column :challenges, :rules, :string
  end
end

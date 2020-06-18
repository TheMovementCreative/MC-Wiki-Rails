class AddColumnToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :challenger_tier, :boolean
    add_column :challenges, :warrior_tier, :boolean
    add_column :lessons, :challenger_tier, :boolean
    add_column :lessons, :warrior_tier, :boolean
    add_column :courses, :challenger_tier, :boolean
    add_column :courses, :warrior_tier, :boolean
    change_column :users, :user_role, :boolean, :default => true
  end
end

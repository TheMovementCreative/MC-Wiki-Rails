class AddRulesColumnToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :rules, :string
  end
end

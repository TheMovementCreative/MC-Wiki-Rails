class AddPublishToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :publish, :boolean
    add_column :lessons, :publish, :boolean
  end
end

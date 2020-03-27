class AddDetailsToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :apartment_friendly, :boolean
    add_column :challenges, :beginner_friendly, :boolean
  end
end

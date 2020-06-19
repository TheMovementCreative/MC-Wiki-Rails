class CreateTiers < ActiveRecord::Migration[6.0]
  def change
    create_table :tiers do |t|
      t.string :name, unique: true, null: false
      t.string :tier, null: false
      t.string :month
      t.integer :week
      t.timestamps
    end
  end
end

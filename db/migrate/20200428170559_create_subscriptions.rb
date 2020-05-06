class CreateSubscriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :subscriptions do |t|
      t.string :stripe_id
      t.string :stripe_subscription_id
      t.string :card_last_4
      t.integer :card_expiry_month
      t.integer :card_expiry_year
      t.string :card_type
      t.boolean :subscribed

      t.timestamps
    end
  end
end

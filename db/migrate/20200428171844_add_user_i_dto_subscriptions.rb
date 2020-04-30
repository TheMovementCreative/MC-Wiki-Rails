class AddUserIDtoSubscriptions < ActiveRecord::Migration[6.0]
  def change
    add_column :subscriptions, :user_id, :bigint
  end
end

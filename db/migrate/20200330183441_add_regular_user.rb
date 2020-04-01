class AddRegularUser < ActiveRecord::Migration[6.0]
  def change
    User.create! do |u|
      u.email     = 'user@tmc.com'
      u.password  = 'movement'
      u.user_role = true
    end
  end
end

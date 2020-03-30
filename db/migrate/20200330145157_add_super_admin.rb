class AddSuperAdmin < ActiveRecord::Migration[6.0]
  def change
    User.create! do |u|
      u.email     = 'admin@tmc.com'
      u.password  = 'movement'
      u.superadmin_role = true
    end
  end
end

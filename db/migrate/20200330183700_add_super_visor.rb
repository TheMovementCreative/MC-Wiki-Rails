class AddSuperVisor < ActiveRecord::Migration[6.0]
  def change
    
    User.create! do |u|
      u.email     = 'supervisor@tmc.com'
      u.password  = 'movement'
      u.supervisor_role = true
    end
  end
end

# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    can :manage, :all
    if user.superadmin_role?
      can :manage, :all
    end
    if user.supervisor_role?
      can :manage, User
      can :access, :rails_admin       
      can :manage, :dashboard    
    end

  end
end
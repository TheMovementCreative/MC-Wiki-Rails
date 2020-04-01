# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    can :manage, :all
    if user.superadmin_role?
      p "SUPER ADMIN"
      can :manage, User
      can :manage, :all
    end
    if user.supervisor_role?
      p "SUPERVISOR"
      can :create, Challenge
      can :read, Challenge
      can :update, Challenge
      can :create, Lesson
      can :read, Lesson
      can :update, Lesson
      can :create, LessonPlan
      can :read, LessonPlan
      can :update, LessonPlan
      cannot :manage, User
      cannot :destroy, Challenge
    end

    if user.user_role?
      p "USER"
      cannot :manage, :rails_admin
    end



  end
end
# frozen_string_literal: true

class Ability
  include CanCan::Ability


  
  def initialize(user)
    can :read, :all
    if user && user.superadmin_role?
      p "SUPER ADMIN"
      can :manage, User
      can :manage, :all
    elsif user && user.supervisor_role?
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
      can :read, Course
      can :update, Course
      can :create, Course
      can :read, CoursePlan
      can :create, CoursePlan
      can :update, CoursePlan
      cannot :manage, User
      cannot :destroy, Challenge
    elsif user && user.user_role?
      p "USER"
      cannot :manage, :rails_admin
    else
      cannot :manage, :rails_admin  
    end



  end
end

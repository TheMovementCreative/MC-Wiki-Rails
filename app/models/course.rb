class Course < ApplicationRecord
    has_many :course_plans
    has_many :lessons, through: :course_plans

    has_and_belongs_to_many :tiers
end

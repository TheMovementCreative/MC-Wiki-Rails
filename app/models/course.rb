class Course < ApplicationRecord
    has_many :course_plans
    has_many :lessons, through: :course_plans
end

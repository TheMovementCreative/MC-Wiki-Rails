class Lesson < ApplicationRecord
    has_many :lesson_plans
    has_many :challenges, through: :lesson_plans

    has_many :course_plans
    has_many :courses, through: :course_plans
end

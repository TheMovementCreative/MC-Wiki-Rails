class Lesson < ApplicationRecord
    has_many :lesson_plans
    has_many :challenges, through: :lesson_plans
end

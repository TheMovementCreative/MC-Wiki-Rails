class Challenge < ApplicationRecord
    has_many :lesson_plans
    has_many :lessons, through: :lesson_plans
end

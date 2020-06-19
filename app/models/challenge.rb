class Challenge < ApplicationRecord
    has_many :lesson_plans
    has_many :lessons, through: :lesson_plans

    has_and_belongs_to_many :tiers
end

class Tier < ApplicationRecord
    has_and_belongs_to_many :challenges
    has_and_belongs_to_many :lessons
    has_and_belongs_to_many :courses
end

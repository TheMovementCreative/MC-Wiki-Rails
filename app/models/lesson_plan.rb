class LessonPlan < ApplicationRecord
    belongs_to :challenge
    belongs_to :lesson
end

class RenameColumns < ActiveRecord::Migration[6.0]
  def change
    change_table :challenges do |t|
    t.rename :name, :game_title
    t.rename :description, :purpose
    t.rename :duration, :space
    t.rename :age_experience, :goal
    t.rename :intensity, :challenge
    t.rename :activity_description, :core_mechanics
    t.rename :coach_notes, :components
    end
  end
end

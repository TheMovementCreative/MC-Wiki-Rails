class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.string :lesson_name
      t.string :author
      t.string :purpose
      t.string :tools
      t.string :warm_up
      t.text :details
      t.string :activities, array:true, default: []
      t.string :video_url
      t.string :image_url

      t.timestamps
    end
  end
end

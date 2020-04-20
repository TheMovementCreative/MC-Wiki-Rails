class CreateCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :purpose
      t.string :author
      t.string :tools
      t.string :space
      t.string :skills
      t.text :details
      t.boolean :publish
      t.string :video_url
      t.string :image_url

      t.timestamps
    end
    add_index :courses, :name, unique: true
  end
end

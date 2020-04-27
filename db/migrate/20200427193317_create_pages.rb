class CreatePages < ActiveRecord::Migration[6.0]
  def change
    create_table :pages do |t|
      t.string :name, unique: true, null: false
      t.string :page_heading
      t.string :message_heading
      t.text :message_body
      t.text :ad_1_heading
      t.string :ad_1_button
      t.string :ad_1_url
      t.text :ad_2_heading
      t.string :ad__button
      t.string :ad_2_url
      t.text :ad_3_heading
      t.string :ad_3_button
      t.string :ad_3_url
      t.bigint :featured_challenge_id
      t.bigint :featured_lesson_id
      t.boolean :published

      t.timestamps
    end
  end
end

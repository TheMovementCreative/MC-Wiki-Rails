class AddVideoUrlToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :video_url, :string
  end
end

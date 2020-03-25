json.extract! lesson, :id, :lesson_name, :author, :purpose, :tools, :warm_up, :details, :activities, :video_url, :image_url, :created_at, :updated_at
json.url lesson_url(lesson, format: :json)

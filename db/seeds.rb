require 'json'
file = File.read("./db/challenges_data.json")
data_hash = JSON.parse(file)

data_hash["activities"].map{ |challenge|
  Challenge.create(
    activity_title: challenge["activity_title"],
    purpose: challenge["purpose"],
    space: challenge["space"],
    goal: challenge["goal"],
    challenge: challenge["challenge"],
    actions_movements: challenge["actions_movements"],
    tools: challenge["tools"],
    rules: challenge["rules"],
    video_url: challenge["video_url"],
    image_url: challenge["image_url"]
  )
}

p "Created #{Challenge.count} challenges"
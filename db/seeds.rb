require 'json'
file = File.read("./db/db2.json")
data_hash = JSON.parse(file)

data_hash["activities"].map{ |challenge|
  Challenge.create(
    activity_title: challenge["activity_title"],
    purpose: challenge["purpose"],
    space: challenge["space"],
    goal: challenge["goal"],
    challenge: challenge["challenge"],
    movementsActions: challenge["movementsActions"],
    tools: challenge["tools"],
    rules: challenge["rules"],
    videoURL: challenge["videoURL"],
    imageURL: challenge["imageURL"]
  )
}

p "Created #{Challenge.count} challenges"
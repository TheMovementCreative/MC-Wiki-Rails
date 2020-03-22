require 'json'
file = File.read("./db/challenges_data.json")
data_hash = JSON.parse(file)

data_hash["activities"]["challenges"].map{ |challenge|
  Challenge.create(
    game_title: challenge["game_title"],
    purpose: challenge["purpose"],
    rules: challenge["rules"],
    space: challenge["space"],
    goal: challenge["goal"],
    challenge: challenge["challenge"],
    core_mechanics: challenge["core_mechanics"],
    components: challenge["components"],
  )
}

p "Created #{Challenge.count} challenges"
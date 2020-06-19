# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_19_222138) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "challenges", force: :cascade do |t|
    t.string "name"
    t.string "purpose"
    t.string "space"
    t.string "goal"
    t.string "challenge"
    t.string "actions_movements"
    t.string "tools"
    t.text "rules"
    t.string "video_url"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "apartment_friendly"
    t.boolean "beginner_friendly"
    t.boolean "publish"
    t.boolean "challenger_tier"
    t.boolean "warrior_tier"
  end

  create_table "challenges_tiers", force: :cascade do |t|
    t.bigint "challenge_id"
    t.bigint "tier_id"
    t.index ["challenge_id"], name: "index_challenges_tiers_on_challenge_id"
    t.index ["tier_id"], name: "index_challenges_tiers_on_tier_id"
  end

  create_table "course_plans", force: :cascade do |t|
    t.bigint "course_id"
    t.bigint "lesson_id"
    t.string "lesson_category"
    t.text "details_override"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "purpose"
    t.string "author"
    t.string "tools"
    t.string "space"
    t.string "skills"
    t.text "details"
    t.boolean "publish"
    t.string "video_url"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "challenger_tier"
    t.boolean "warrior_tier"
    t.index ["name"], name: "index_courses_on_name", unique: true
  end

  create_table "courses_tiers", force: :cascade do |t|
    t.bigint "course_id"
    t.bigint "tier_id"
    t.index ["course_id"], name: "index_courses_tiers_on_course_id"
    t.index ["tier_id"], name: "index_courses_tiers_on_tier_id"
  end

  create_table "lesson_plans", force: :cascade do |t|
    t.bigint "challenge_id"
    t.bigint "lesson_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "activity_category"
    t.text "rules_override"
    t.index ["challenge_id"], name: "index_lesson_plans_on_challenge_id"
    t.index ["lesson_id"], name: "index_lesson_plans_on_lesson_id"
  end

  create_table "lessons", force: :cascade do |t|
    t.string "name"
    t.string "author"
    t.string "purpose"
    t.string "tools"
    t.string "warm_up"
    t.text "details"
    t.string "activities", default: [], array: true
    t.string "video_url"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "publish"
    t.boolean "challenger_tier"
    t.boolean "warrior_tier"
  end

  create_table "lessons_tiers", force: :cascade do |t|
    t.bigint "lesson_id"
    t.bigint "tier_id"
    t.index ["lesson_id"], name: "index_lessons_tiers_on_lesson_id"
    t.index ["tier_id"], name: "index_lessons_tiers_on_tier_id"
  end

  create_table "pages", force: :cascade do |t|
    t.string "name", null: false
    t.string "page_heading"
    t.string "message_heading"
    t.text "message_body"
    t.text "ad_1_heading"
    t.string "ad_1_button"
    t.string "ad_1_url"
    t.text "ad_2_heading"
    t.string "ad_2_button"
    t.string "ad_2_url"
    t.text "ad_3_heading"
    t.string "ad_3_button"
    t.string "ad_3_url"
    t.bigint "featured_challenge_id"
    t.bigint "featured_lesson_id"
    t.boolean "published"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "subscriptions", force: :cascade do |t|
    t.string "stripe_id"
    t.string "stripe_subscription_id"
    t.string "card_last_4"
    t.integer "card_expiry_month"
    t.integer "card_expiry_year"
    t.string "card_type"
    t.boolean "subscribed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.string "stripe_price_id"
  end

  create_table "tiers", force: :cascade do |t|
    t.string "name", null: false
    t.string "tier", null: false
    t.string "month"
    t.integer "week"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "superadmin_role"
    t.boolean "supervisor_role"
    t.boolean "user_role", default: true
    t.boolean "subscribed"
    t.string "first_name"
    t.string "last_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

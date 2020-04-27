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

ActiveRecord::Schema.define(version: 2020_04_27_200958) do

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
    t.index ["name"], name: "index_courses_on_name", unique: true
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
    t.boolean "user_role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

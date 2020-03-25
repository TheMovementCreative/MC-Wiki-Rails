require "application_system_test_case"

class LessonsTest < ApplicationSystemTestCase
  setup do
    @lesson = lessons(:one)
  end

  test "visiting the index" do
    visit lessons_url
    assert_selector "h1", text: "Lessons"
  end

  test "creating a Lesson" do
    visit lessons_url
    click_on "New Lesson"

    fill_in "Activities", with: @lesson.activities
    fill_in "Author", with: @lesson.author
    fill_in "Details", with: @lesson.details
    fill_in "Image url", with: @lesson.image_url
    fill_in "Lesson name", with: @lesson.lesson_name
    fill_in "Purpose", with: @lesson.purpose
    fill_in "Tools", with: @lesson.tools
    fill_in "Video url", with: @lesson.video_url
    fill_in "Warm up", with: @lesson.warm_up
    click_on "Create Lesson"

    assert_text "Lesson was successfully created"
    click_on "Back"
  end

  test "updating a Lesson" do
    visit lessons_url
    click_on "Edit", match: :first

    fill_in "Activities", with: @lesson.activities
    fill_in "Author", with: @lesson.author
    fill_in "Details", with: @lesson.details
    fill_in "Image url", with: @lesson.image_url
    fill_in "Lesson name", with: @lesson.lesson_name
    fill_in "Purpose", with: @lesson.purpose
    fill_in "Tools", with: @lesson.tools
    fill_in "Video url", with: @lesson.video_url
    fill_in "Warm up", with: @lesson.warm_up
    click_on "Update Lesson"

    assert_text "Lesson was successfully updated"
    click_on "Back"
  end

  test "destroying a Lesson" do
    visit lessons_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Lesson was successfully destroyed"
  end
end

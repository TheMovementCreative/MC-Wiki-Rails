module API
  class LessonsController < ApplicationController

    # GET /lessons
    # GET /lessons.json
    def index
      @lessons = Lesson.all
      render json: @lessons
    end

    # GET /lessons/1
    # GET /lessons/1.json
    def show
      @lesson = Lesson.find(params[:id])
      render json: @lesson
    end

    private
    # Only allow a list of trusted parameters through.
    def lesson_params
        params.require(:lesson).permit(:lesson_name, :author, :purpose, :tools, :warm_up, :details, :activities, :video_url, :image_url)
    end

  end
end  
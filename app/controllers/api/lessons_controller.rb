module API
  class LessonsController < ApplicationController

    # GET /lessons
    # GET /lessons.json
    def index
      if  params[:publish] && !params[:sub]
        @publish = params[:publish]
        @lessons = Lesson.where(publish:@publish)
      elsif params[:publish] && params[:sub]
        @publish = params[:publish]
        if params[:sub] == "warrior"
          @lessons = Lesson.where(publish:@publish, warrior_tier: true)
        elsif params[:sub] == "challenger"
          @lessons = Lesson.where(publish:@publish, challenger_tier: true)
        elsif params[:sub] == "champion"
          @lessons = Lesson.where(publish:@publish)
        elsif params[:sub] == "admin"
          @lessons = Lesson.all
        else
          @lessons = nil
        end          
      else
      @lessons = Lesson.all
      end
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
        params.require(:lesson).permit(:name, :author, :purpose, :tools, :warm_up, :details, :activities, :video_url, :image_url)
    end

  end
end  
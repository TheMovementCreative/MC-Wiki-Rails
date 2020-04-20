module API
class CoursesController < ApplicationController
    load_and_authorize_resource

  before_action :authenticate_user!

  
    def index
      if current_user
        @courses = Course.all
        render json: @courses
      end
    end 

    def show
      @course = Course.find(params[:id])
      render json: @course
      
    end


    private
        def course_params
            params.require(:course).permit(:name, :purpose, :author, :space, :skills, :tools, :details, :video_url, :image_url, :publish)
        end
end
end
class CoursesController < ApplicationController
    load_and_authorize_resource

  before_action :authenticate_user!

  
    def index
      if current_user
        @courses = Course.all
      end
    end 

    def show
      @course = Course.find(params[:id])
      
    end

    def new
    end

    def edit
      @course = Course.find(params[:id])
    end

    def create
        @course = Course.new(course_params)
 
        if @Course.save
          redirect_to @course
        else
          render 'new'
        end
    end

    def update
      @course = Course.find(params[:id])
     
      if @Course.update(course_params)
        redirect_to @course
      else
        render 'edit'
      end
    end

    private
        def course_params
            params.require(:course).permit(:name, :purpose, :author, :space, :skills, :tools, :details, :video_url, :image_url, :publish)
        end
end

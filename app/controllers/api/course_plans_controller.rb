module API
    class CoursePlansController < ApplicationController
    
       def index
          if params[:course_id]
             @course_id = params[:course_id]
             @course_plan = CoursePlan.where(course_id: @course_id )
          else
             @course_plan = CoursePlan.all
          end
          render json: @course_plan
       end
    
       private
       def course_plan_params
          params.require(:course_plan).permit(:course_id, :lesson_id, :type, :rules_override)
       end
    
    end
    end
module API
class LessonPlansController < ApplicationController

   def index
      if params[:lesson_id]
         @lesson_id = params[:lesson_id]
         @lesson_plan = LessonPlan.where(lesson_id: @lesson_id )
      else
         @lesson_plan = LessonPlan.all
      end
      render json: @lesson_plan
   end

   private
   def lesson_plan_params
      params.require(:lesson_plan).permit(:lesson_id, :challenge_id, :type, :rules_override)
   end

end
end
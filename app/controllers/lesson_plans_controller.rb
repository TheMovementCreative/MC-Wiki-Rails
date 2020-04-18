class LessonPlansController < ApplicationController

   def index
      if params[:lesson_id]
         @lesson_id = params[:lesson_id]
         @lesson_plan = Lesson_Plan.where(lesson_id: @lesson_id )
      else
         @lesson_plan = Lesson_Plan.all
      end
   end

   private
      params.require(:lesson_plan).permit(:lesson_id, :challenge_id)
   end

end

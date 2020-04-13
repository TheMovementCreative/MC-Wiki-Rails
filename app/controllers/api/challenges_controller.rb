module API
  class ChallengesController < ApplicationController
    
    def index
      if current_user
        @challenges = Challenge.all
        render json: @challenges
      end
    end 

    def show
      @challenge = Challenge.find(params[:id])
      render json: @challenge
      
    end

    private
        def challenge_params
            params.require(:challenge).permit(:activity_title, :purpose, :space, :goal, :challenge, :actions_movements, :tools, :rules, :video_url, :image_url)
        end
  end
end 
  
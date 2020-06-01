module API
  class ChallengesController < ApplicationController
    
    def index
      if current_user
        if  params[:publish]
          @publish = params[:publish]
          @challenges = Challenge.where(publish:@publish)
        else
        @challenges = Challenge.all
        end
        render json: @challenges
      end
    end 

    def show
      @challenge = Challenge.find(params[:id])
      render json: @challenge
      
    end

    private
        def challenge_params
            params.require(:challenge).permit(:name, :purpose, :space, :goal, :challenge, :actions_movements, :tools, :rules, :video_url, :image_url)
        end
  end
end 
  
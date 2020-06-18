module API
  class ChallengesController < ApplicationController
    
    def index
      if current_user
        if  params[:publish] && !params[:sub]
          @publish = params[:publish]
          @challenges = Challenge.where(publish:@publish)
        elsif params[:publish] && params[:sub]
          @publish = params[:publish]
          if params[:sub] == "warrior"
            @challenges = Challenge.where(publish:@publish, warrior_tier: true)
          elsif params[:sub] == "challenger"
            @challenges = Challenge.where(publish:@publish, challenger_tier: true)
          elsif params[:sub] == "champion"
            @challenges = Challenge.where(publish:@publish)
          elsif params[:sub] == "admin"
            @challenges = Challenge.all
          else
            @challenges = nil
          end          
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
  
class ChallengesController < ApplicationController


    def index
      @challenges = Challenge.all
    end 

    def show
      @challenge = Challenge.find(params[:id])
    end

    def new
    end

    def create

        @challenge = Challenge.new(challenge_params)
 
        @challenge.save
        redirect_to @challenge
    end

    private
        def challenge_params
            params.require(:challenge).permit(:game_title, :purpose, :space, :goal, :challenge, :core_mechanics, :components, :rules, :video_url)
        end
end

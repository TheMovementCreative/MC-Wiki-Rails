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
            params.require(:challenge).permit(:name, :description, :duration, :age_experience, :intensity, :activity_description, :coach_notes)
        end
end

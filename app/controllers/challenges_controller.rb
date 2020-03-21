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
        render plain: params[:challenge].inspect

        @challenge = Article.new(params[:challenge])
 
        @challenge.save
        redirect_to @challenge
    end

    private
        def challenge_params
            params.require(:challenge).permit(:title, :text)
        end
end

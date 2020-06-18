class ChallengesController < ApplicationController
  include ApplicationHelper
  load_and_authorize_resource

  before_action :authenticate_user!

  
    def index
      if current_user
        @challenges = Challenge.all
      end
    end 

    def show

      challenge = Challenge.find(params[:id])

      if (helpers.show_auth(challenge, helpers.current_user_plan(current_user)))
      @challenge = challenge
      else
        redirect_to root_path
      end
      
    end

    def new
    end

    def edit
      @challenge = Challenge.find(params[:id])
    end

    def create
        @challenge = Challenge.new(challenge_params)
 
        if @challenge.save
          redirect_to @challenge
        else
          render 'new'
        end
    end

    def update
      @challenge = Challenge.find(params[:id])
     
      if @challenge.update(challenge_params)
        redirect_to @challenge
      else
        render 'edit'
      end
    end

    private
        def challenge_params
            params.require(:challenge).permit(:name, :purpose, :space, :goal, :challenge, :actions_movements, :tools, :rules, :video_url, :image_url)
        end
end

class ChallengesController < ApplicationController
  include ApplicationHelper
  load_and_authorize_resource

  before_action :authenticate_user!

  
    def index
      if helpers.current_user_plan(current_user) == "none" || current_user.subscription && !helpers.is_sub_active(current_user.subscription.stripe_subscription_id)
        if !current_user.superadmin_role
        redirect_to pricing_index_path
        end
    end
      if current_user
        @challenges = Challenge.all
      end
    end 

    def show
      if helpers.current_user_plan(current_user) == "none" || current_user.subscription && !helpers.is_sub_active(current_user.subscription.stripe_subscription_id)
        if !current_user.superadmin_role
        redirect_to pricing_index_path
        end
    end

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

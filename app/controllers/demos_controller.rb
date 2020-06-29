class DemosController < ApplicationController
    skip_before_action :authenticate_user!, :only => [:index]
    
def index
    
end

def home
    if helpers.current_user_plan(current_user) == "none" || current_user.subscription && !helpers.is_sub_active(current_user.subscription.stripe_subscription_id)
        if !current_user.superadmin_role
        redirect_to pricing_index_path
        end
    end
    @challenges = Challenge.all
    @lessons = Lesson.all
    @page = Page.where(name: 'home').first
end
end

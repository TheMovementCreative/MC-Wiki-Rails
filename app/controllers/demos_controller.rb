class DemosController < ApplicationController
    skip_before_action :authenticate_user!, :only => [:index]

def index
    @lessons = Lesson.find(15,24,23,21)
    @challenges = Challenge.all
end

def home
    if helpers.current_user_plan(current_user) == "none"
        redirect_to pricing_index_path
    end
    @challenges = Challenge.all
    @lessons = Lesson.all
    @page = Page.where(name: 'home').first
end
end

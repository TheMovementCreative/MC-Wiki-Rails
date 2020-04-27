class DemosController < ApplicationController
    skip_before_action :authenticate_user!, :only => [:index]

def index
    @lessons = Lesson.find(15,24,23,21)
    @challenges = Challenge.all
end

def home
    @challenges = Challenge.all
    @lessons = Lesson.all
    @page = Page.where(name: 'home').first
end
end

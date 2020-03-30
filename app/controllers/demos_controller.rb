class DemosController < ApplicationController
    skip_before_action :authenticate_user!, :only => [:index]

def index
    @lessons = Lesson.find(15,24,32,23,21)
end

end

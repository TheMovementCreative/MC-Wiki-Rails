class DemosController < ApplicationController
    skip_before_action :authenticate_user!, :only => [:index]

def index
    @lessons = Lesson.find(20,21,22,23,24)
end

end

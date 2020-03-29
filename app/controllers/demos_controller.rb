class DemosController < ApplicationController

def index
    @lessons = Lesson.find(15,23,24,25,21)
end

end

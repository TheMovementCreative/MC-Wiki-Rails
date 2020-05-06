class UsersController < ApplicationController
    before_action :authenticate_user!
    layout "subs"

    def profile
        if current_user.id != User.find(params[:id]).id
            redirect_to root_path
        else
            @user = User.find(params[:id])
        end
    end

end
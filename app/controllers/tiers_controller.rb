class TiersController < ApplicationController
    load_and_authorize_resource

    before_action :authenticate_user!

    def index
        if current_user
          @tiers = Tier.all
        end
      end 
  
      def show
        @Tier = Tier.find(params[:id])
        
      end
  
      def new
      end
  
      def edit
        @Tier = Tier.find(params[:id])
      end
  
      def create
          @Tier = Tier.new(Tier_params)
   
          if @Tier.save
            redirect_to @Tier
          else
            render 'new'
          end
      end
  
      def update
        @Tier = Tier.find(params[:id])
       
        if @Tier.update(Tier_params)
          redirect_to @Tier
        else
          render 'edit'
        end
      end
  
      private
          def Tier_params
              params.require(:Tier).permit(:name, :tier, :month, :week)
          end
  end


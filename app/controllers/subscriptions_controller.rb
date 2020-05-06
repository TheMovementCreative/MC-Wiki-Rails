class SubscriptionsController < ApplicationController

    before_action :authenticate_user!, except: [:new, :create]
    layout "subs"
    def new
        if current_user.subscription && current_user.subscription.stripe_subscription_id?
            redirect_to root_path, notice: "You're already subscribed"
        end
    end

    def index

    end
    
    def create
        Stripe.api_key = Rails.application.credentials.stripe_api_key

        plan_id = params[:plan_id]
        plan = Stripe::Plan.retrieve(plan_id)
        token = params[:stripeToken]

         if current_user.subscription && current_user.subscription.stripe_id?
            customer =  Stripe::Customer.retrieve(current_user.subscription.stripe_id)
            
        else
            customer =  Stripe::Customer.create(email: current_user.email, source: token)
            current_user.subscription = Subscription.new(:stripe_id => customer.id)
        end



        tmp_sub = customer.subscriptions.create(plan: plan.id)

        options ={
            stripe_id: customer.id,
            stripe_subscription_id: tmp_sub.id,
            subscribed: true,
        
            card_last_4: params[:user][:card_last4],
            card_expiry_month: params[:user][:card_exp_month],
            card_expiry_year: params[:user][:card_exp_year]
            
    } 

        current_user.subscription.update(options)
        current_user.subscribed = true;

        redirect_to root_path, notice: "Your membership was setup successfully"
    end

    def destroy
        Stripe.api_key = Rails.application.credentials.stripe_api_key
        customer = Stripe::Customer.retrieve(current_user.subscription.stripe_id)
        customer.subscriptions.retrieve(current_user.subscription.stripe_subscription_id).delete
        current_user.subscription.update(stripe_subscription_id: nil)
        current_user.subscribed = false;
        current_user.subscription.subscribed = false;

        redirect_to root_path, notice: "Your membership has been terminated."
    end

end
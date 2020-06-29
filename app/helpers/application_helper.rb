module ApplicationHelper

    def current_user_subscribed?
        user_signed_in? && current_user.subscribed?
    end

    def current_user_plan(user)
        if user && user.subscription
            if user.superadmin_role
                return "admin"
            elsif user.subscription.stripe_price_id === Rails.application.credentials.challenger
                return "challenger"
            
            elsif user.subscription.stripe_price_id === Rails.application.credentials.warrior
                return "warrior"
            
            elsif user.subscription.stripe_price_id === Rails.application.credentials.champion
                return "champion"
            else
                return "none"
            end
        else
            if user && user.superadmin_role
                return "admin"
            else
                return "none"
            end
        end
    
    end

    def show_auth(record, subType)
        if subType == "admin" || subType == "champion"
            return true
        elsif subType == "warrior"
            return record.warrior_tier
        elsif subType == "challenger"
            return record.challenger_tier
        else
            return false
        end

    end

    def is_sub_active(subID)
        Stripe.api_key = Rails.application.credentials.stripe_api_key
        
        this_sub = Stripe::Subscription.retrieve(subID)

        return (this_sub.status == "active")
      


    end

    def check_plan
        if helpers.current_user_plan(current_user) == "none" || !helpers.is_sub_active(current_user.subscription.stripe_subscription_id)
            redirect_to pricing_index_path
        end
    end

end

Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => 'challenges/admin', as: 'rails_admin'
  # For details on the SL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'challenges/index'
  resources :challenges
  root 'challenges#index'
end

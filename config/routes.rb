Rails.application.routes.draw do

  devise_for :users

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the SL available within this file, see https://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: 'json' } do
    resources :challenges, only: [:index, :show]
    resources :lessons, only: [:index, :show]
    resources :lesson_plans, only: [:index]
  end

  get 'challenges/index'
  resources :challenges
 

  get'lessons/index'
  resources :lessons


  
  get 'home' => 'demos#home'
  get'demos/index'
  resources :demos
  root 'demos#index'

end

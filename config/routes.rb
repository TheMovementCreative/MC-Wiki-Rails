Rails.application.routes.draw do

  
  devise_for :users, controllers: {registrations: "registrations"}
  get 'profile' => 'users#profile'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the SL available within this file, see https://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: 'json' } do
    resources :challenges, only: [:index, :show]
    resources :lessons, only: [:index, :show]
    resources :courses, only: [:index, :show]
    resources :lesson_plans, only: [:index]
    resources :course_plans, only: [:index]
  end

  get 'challenges/index'
  resources :challenges
 
  resources :pricing, only: [:index]
  get'lessons/index'
  resources :lessons

  resources :subscriptions
  post 'subscriptions/new'
  get 'subscriptions/destroy'
  

  get'courses/index'
  resources :courses

  
  get 'home' => 'demos#home'
  get'demos/index'
  resources :demos
  root 'demos#home'

end

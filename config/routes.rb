Rails.application.routes.draw do

  devise_for :users

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the SL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'challenges/index'
  resources :challenges
 

  get'lessons/index'
  resources :lessons
  
  get'demos/index'
  resources :demos
  root 'demos#index'

end

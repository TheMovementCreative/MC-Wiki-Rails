Rails.application.routes.draw do
  # For details on the SL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'challenges/index'
  resources :challenges
  root 'challenges#index'
end

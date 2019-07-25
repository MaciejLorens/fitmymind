Rails.application.routes.draw do

  resources :posts
  devise_for :users
  root to: 'home#index'

  get 'home/index'

end

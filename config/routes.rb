Rails.application.routes.draw do

  root to: 'home#index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users

  resources :posts
  resources :news

  get 'home/index'
end

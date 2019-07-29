Rails.application.routes.draw do

  root to: 'home#index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users

  resources :posts

  get 'home/index'
end

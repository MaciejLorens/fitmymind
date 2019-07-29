Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :posts
  devise_for :users
  root to: 'home#index'

  get 'home/index'

  get 'bootstrap_parent_modal', to: 'home#bootstrap_parent_modal'
end

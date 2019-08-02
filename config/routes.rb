Rails.application.routes.draw do

  root to: 'home#index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users

  get 'home/index'
  get 'uslugi', as: 'services', to: 'home#services'
  get 'zespol', as: 'team', to: 'home#team'
  get 'galeria_slaw', as: 'celebrities', to: 'home#celebrities'
  get 'kalkulatory', as: 'calculators', to: 'home#calculators'
  get 'blog', as: 'blog', to: 'home#blog'
  get 'kontakt', as: 'contact', to: 'home#contact'


  resources :posts
  resources :news

end

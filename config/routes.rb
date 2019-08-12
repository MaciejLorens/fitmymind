Rails.application.routes.draw do

  root to: 'home#index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users

  get 'uslugi', as: 'services', to: 'services#index'
  get 'zespol', as: 'team', to: 'team#index'
  get 'rezultaty', as: 'results', to: 'results#index'
  get 'kalkulatory', as: 'calculators', to: 'calculators#index'
  get 'blog', as: 'blog', to: 'posts#index'
  get 'kontakt', as: 'contact', to: 'contact#index'


  resources :posts
  resources :news

end

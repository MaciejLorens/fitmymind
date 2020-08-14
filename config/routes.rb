Rails.application.routes.draw do

  root to: 'home#index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
  }

  get 'uslugi', as: 'services', to: 'services#index'
  get 'metabolic_balance', as: 'metabolic_balance', to: 'services#metabolic_balance'
  get 'bonne_sante', as: 'bonne_sante', to: 'services#bonne_sante'
  get 'metamorfoza', as: 'metamorphosis', to: 'services#metamorphosis'
  get 'ars_medica', as: 'ars_medica', to: 'services#ars_medica'
  get 'prelekcje', as: 'lectures', to: 'services#lectures'

  get 'zespol', as: 'team', to: 'team#index'
  get 'rezultaty', as: 'results', to: 'results#index'
  get 'galeria', as: 'gallery', to: 'gallery#index'
  get 'blog', as: 'blog', to: 'posts#index'
  get 'kalkulatory', as: 'calculators', to: 'calculators#index'
  get 'kontakt', as: 'contact', to: 'contact#index'
  get 'dla_firm', as: 'corporations', to: 'corporations#index'

  get 'mobile', as: 'mobile', to: 'mobile#index'

  namespace :mobile do
    put :upsert_water_statistic, to: 'upsert_water_statistic'
    put :reservation, to: 'reservation'
  end

  get 'polityka_prywatnosci', as: 'private_policy', to: 'private_policy#index'

  resources :posts
  resources :news

end

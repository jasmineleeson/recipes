Rails.application.routes.draw do
  get 'sessions/new'

  root 'static_pages#home'
  get '/home', to: 'static_pages#home', as: :home
  get '/help', to: 'static_pages#help', as: :help
  get '/about', to: 'static_pages#about', as: :about
  get '/signup', to: 'users#new', as: :signup
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users
end

Rails.application.routes.draw do
  get 'sessions/new'

  root 'root#home'
  get '/home', to: 'root#home', as: :home
  get '/signup', to: 'users#new', as: :signup
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users
end

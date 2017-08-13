Rails.application.routes.draw do
  root 'root#home'
  get '/home', to: 'root#home', as: :home

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/signup', to: 'registration#new', as: :signup
  post '/signup', to: 'registration#create'

  post '/join-family', to: 'registration#join_family'
  post '/create-family', to: 'registration#create_family'

  post '/recipe', to: 'recipes#create'
  post '/recipe/:id', to: 'recipes#update'

  resources :users
end

Rails.application.routes.draw do
  root 'root#home'
  get '/home', to: 'root#home', as: :home
  get '/home-data', to: 'root#home_data'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/signup', to: 'registration#new', as: :signup
  post '/signup', to: 'registration#create'

  post '/join-family', to: 'registration#join_family'
  post '/create-family', to: 'registration#create_family'

  post '/recipe', to: 'recipes#create'
  patch '/recipe/:id', to: 'recipes#update'
  delete '/recipe/:id', to: 'recipes#destroy'

  resources :users
end

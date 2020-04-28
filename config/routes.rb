Rails.application.routes.draw do
  devise_for :users, only: []

  namespace :v1, defaults: { format: :json } do
    resource :login, only: [:create], controller: :sessions
    resource :users, only: [:create]
  end
  
  get 'whies/index'

  resources :whies do
    member do
      get 'count'
    end
  end
  # get 'whies/find'

  post 'whies/post'
  patch 'whies/update'

  post 'answers/post_pv'
  post 'answers/post_pb'
end

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

  get 'answers/find_pv/:id' => 'answers#find_pv'
  get 'answers/find_pb/:id' => 'answers#find_pb'
  get 'answers/index_pv'
  get 'answers/index_pb'
  post 'answers/post_pv'
  post 'answers/post_pb'
end

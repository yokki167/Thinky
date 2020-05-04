Rails.application.routes.draw do
  
  get 'whies/index'

  resources :sessions, only: [:create]
  resources :registrations, only: [:create, :edit, :update]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  resources :whies do
    member do
      get 'count'
      get 'user'
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

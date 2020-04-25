Rails.application.routes.draw do
  devise_for :users, only: []

  namespace :v1, defaults: { format: :json } do
    resource :login, only: [:create], controller: :sessions
    resource :users, only: [:create]
  end

  get 'whies/index'
  post 'whies/post'

  post 'answers/post_pv'
  post 'answers/post_pb'
end

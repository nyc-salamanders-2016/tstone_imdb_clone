Rails.application.routes.draw do
  resources :find, only: :index

  root to: 'static#index'
end

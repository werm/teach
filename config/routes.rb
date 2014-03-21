Teach::Application.routes.draw do
  resources :caregories

  resources :elements

  root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
end
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "meter_vis", to: "meter_vis/index"

  match '/:controller(/:action(/:id.:format))',via: [:get,:post]
end

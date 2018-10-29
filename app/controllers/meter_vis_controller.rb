class MeterVisController < ApplicationController
	skip_before_filter :verify_authenticity_token  
	# layout "meter_vis"
	def index
		
	end
	def foo
		p params
		p 'ffffffffffff'
		p params[:a]
		rs = {bar: "bar"}
		render json: rs
	end
end

class MeterVisController < ApplicationController
	# layout "meter_vis"
	def index
		
	end
	def foo
		rs = {bar: "bar"}
		render json: rs
	end
end

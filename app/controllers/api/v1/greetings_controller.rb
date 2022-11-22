class Api::V1::GreetingsController < ApplicationController
  def index
    id = rand(1..Greeting.count)
    if id.nil?
      render json: { error: 'opps! not found' }.to_json, status: 404
    else
      @greetings = Greeting.find(id)
      render json: @greetings
    end
  end
end

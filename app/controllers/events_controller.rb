class EventsController < ApplicationController
  def create
    Event.create(event_params)
    redirect_to "/"
  end

  def index
    @events = Event.all
    render json: @events
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :address, :latitude, :longitude)
  end
end

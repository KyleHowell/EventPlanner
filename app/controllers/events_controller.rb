class EventsController < ApplicationController
  def create
    Event.create(event_params)
    redirect_to "/"
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :address, :latitude, :longitude)
  end
end

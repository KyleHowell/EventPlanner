class StaticPagesController < ApplicationController
  def index
    @event = Event.new
    @events = Event.all
  end
end

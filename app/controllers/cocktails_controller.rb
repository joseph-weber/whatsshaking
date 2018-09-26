class CocktailsController < ApplicationController

  def index
    render json: Cocktail.all
  end

end

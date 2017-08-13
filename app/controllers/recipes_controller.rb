class RecipesController < ApplicationController
  def new
  end

  def create
    @recipe_facade = RecipeFacade.new(recipe_params.merge!(user: current_user, family: current_user.family))
    if @recipe_facade.add_recipe
      render json: {}, status: 200
    else
      render json: { error: @recipe_facade.errors.full_messages.first }.to_json, status: 200
    end
  end

  private

  def recipe_params
    params.permit(:name, :serves, :prep_time, :ingredients, :directions, :notes)
  end
end

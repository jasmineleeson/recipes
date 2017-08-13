class RecipesController < ApplicationController
  def new
  end

  def create
    @recipe_facade = RecipeFacade.new(recipe_params.merge!(user: current_user, family: current_user.family))
    if recipe = @recipe_facade.add_recipe
      render json: { recipe: recipe }, status: 200
    else
      render json: { error: @recipe_facade.errors.full_messages.first }.to_json, status: 200
    end
  end

  def update
    recipe = Recipe.find(params[:id])
    @recipe_facade = RecipeFacade.new(recipe_params.merge!(user: current_user, family: current_user.family, recipe: recipe))
    if updated_recipe = @recipe_facade.edit_recipe
      render json: { recipe: updated_recipe }, status: 200
    else
      render json: { error: @recipe_facade.errors.full_messages.first }.to_json, status: 200
    end
  end

  def destroy
    recipe = Recipe.find(params[:id])
    @recipe_facade = RecipeFacade.new(user: current_user, family: current_user.family, recipe: recipe)
    if @recipe_facade.delete_recipe
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

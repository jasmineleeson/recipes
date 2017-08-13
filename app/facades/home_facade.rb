#TODO: handle spaces

class HomeFacade
  attr_reader :user,
    :family,
    :recipes

  def initialize(user, family, recipes)
    @user = user
    @family = family
    @recipes = recipes
  end

  def react_props
    @_react_props ||= {
      user: serialize_user(user),
      family: serialize_family,
      recipes: serialize_recipes
    }.to_json
  end

  private

  def serialize_user(user)
    {
      firstName: user.first_name,
      lastName: user.last_name
    }
  end

  def serialize_family
    family_members = []
    family.users.each do |user|
      family_members.push(serialize_user(user))
    end
    {
      displayName: family.display_name,
      familyMembers: family_members
    }
  end

  def serialize_recipe(recipe)
    {
      name: recipe.name,
      serves: recipe.serves,
      prepTime: recipe.prep_time,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
      notes: recipe.notes
    }
  end

  def serialize_recipes
    family_recipes = []
    recipes.each do |recipe|
      family_recipes.push(serialize_recipe(recipe))
    end
    family_recipes
  end
end

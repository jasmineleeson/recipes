class RecipeFacade
  include ActiveModel::Model

  attr_accessor :recipe,
    :user,
    :family,
    :name,
    :serves,
    :prep_time,
    :ingredients,
    :directions,
    :notes

  validates :user, presence: true
  validates :family, presence: true
  validates :name, presence: true, length: { maximum: 50 }
  validates :ingredients, presence: true, length: { maximum: 50 }
  validates :directions, presence: true, length: { maximum: 50 }

  def edit_recipe
    return false unless existing_recipe
    return false unless valid?
    return false unless update_recipe
    serialize_recipe(recipe).to_json
  end

  def add_recipe
    return false unless valid?
    return false unless create_recipe
    serialize_recipe(recipe).to_json
  end

  private

  def serialize_recipe(recipe)
    {
      id: recipe.id,
      name: recipe.name,
      serves: recipe.serves,
      prepTime: recipe.prep_time,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
      notes: recipe.notes
    }
  end

  def update_recipe
    @recipe.update_attributes(
      name: name,
      serves: serves,
      prep_time: prep_time,
      ingredients: ingredients,
      directions: directions,
      notes: notes
    )
  end

  def existing_recipe
    if recipe
      true
    else
      errors.add(:password, 'does not exist')
    end
  end

  def create_recipe
    @recipe = Recipe.new(
      name: name,
      serves: serves,
      prep_time: prep_time,
      ingredients: ingredients,
      directions: directions,
      notes: notes,
      user: user,
      family: family
    )
    @recipe.save!
  end
end

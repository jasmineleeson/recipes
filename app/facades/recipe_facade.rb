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

  def add_recipe
    return false unless valid?

    create_recipe
    true
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

  # def react_props
  #   @_react_props ||= { hello: 'world' }.to_json
  # end
end

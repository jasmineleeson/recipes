class AddNotesToRecipes < ActiveRecord::Migration[5.1]
  def change
    rename_column :recipes, :method, :directions
    add_column :recipes, :notes, :text
  end
end

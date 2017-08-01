class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.integer :serves
      t.string :prep_time
      t.string :name
      t.text :ingredients
      t.text :method
      t.integer :user_id
      t.integer :family_id

      t.timestamps
    end
    add_index :recipes, :user_id
    add_index :recipes, :family_id
  end
end

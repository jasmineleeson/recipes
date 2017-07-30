class CreateFamilies < ActiveRecord::Migration[5.1]
  def change
    create_table :families do |t|
      t.string :name
      t.string :display_name
      t.text :description

      t.timestamps
    end
    add_index :families, :name, unique: true
  end
end

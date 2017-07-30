class AddFamilyIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :family_id, :integer, null: true
    add_index :users, :family_id
  end
end

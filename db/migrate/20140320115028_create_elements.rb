class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.string :name
      t.string :example
      t.text :description
      t.integer :category_id

      t.timestamps
    end
  end
end

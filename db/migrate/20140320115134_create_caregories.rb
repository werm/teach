class CreateCaregories < ActiveRecord::Migration
  def change
    create_table :caregories do |t|
      t.string :name
      t.integer :element_id

      t.timestamps
    end
  end
end

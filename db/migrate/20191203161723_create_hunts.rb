class CreateHunts < ActiveRecord::Migration[6.0]
  def change
    create_table :hunts do |t|
      t.string :cost
      t.string :animal
      t.string :review

      t.timestamps
    end
  end
end

class CreateLands < ActiveRecord::Migration[6.0]
  def change
    create_table :lands do |t|
      t.string :state
      t.string :county
      t.text :image_url
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end

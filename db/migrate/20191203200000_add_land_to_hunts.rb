class AddLandToHunts < ActiveRecord::Migration[6.0]
  def change
    add_reference :hunts, :land, null: false, foreign_key: true
  end
end

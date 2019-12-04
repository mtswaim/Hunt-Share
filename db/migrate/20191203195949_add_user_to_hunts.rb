class AddUserToHunts < ActiveRecord::Migration[6.0]
  def change
    add_reference :hunts, :user, null: false, foreign_key: true
  end
end

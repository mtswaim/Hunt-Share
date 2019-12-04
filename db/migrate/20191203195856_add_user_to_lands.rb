class AddUserToLands < ActiveRecord::Migration[6.0]
  def change
    add_reference :lands, :user, null: false, foreign_key: true
  end
end

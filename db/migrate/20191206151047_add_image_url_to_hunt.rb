class AddImageUrlToHunt < ActiveRecord::Migration[6.0]
  def change
    add_column :hunts, :image_url, :text
  end
end

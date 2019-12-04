# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(
  {
    username: "Admin",
    password: "123456",
    email: "mtswaim@gmail.com"
  }
)

land = Land.create!(
  {
    state: "Kansas",
    county: "Leavenworth",
    image_url: "https://i.imgur.com/Wh7b2sp.jpg",
    latitude: "",
    longitude: "",
    user_id: 1
  }
)

p "#{User.count} users created"
p "#{Land.count} lands created"
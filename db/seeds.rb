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

land = Land.create!([
  {
    state: "Kansas",
    county: "Leavenworth",
    image_url: "https://www.whitetailhabitatsolutions.com/uploads/general/_blogLargeImage/2017-10-17-08.57.28.jpg",
    latitude: "",
    longitude: "",
    user_id: 1
  },
  {
    state: "Kansas",
    county: "Leavenworth",
    image_url: "https://www.whitetailhabitatsolutions.com/uploads/general/_blogSmallImage/IMG_20181010_094839.jpg",
    latitude: "",
    longitude: "",
    user_id: 1
  },
  {
    state: "Kansas",
    county: "Leavenworth",
    image_url: "https://cdn0.wideopenspaces.com/wp-content/uploads/2014/11/BB14.jpg",
    latitude: "",
    longitude: "",
    user_id: 1
  },
  {
    state: "Nebraska",
    county: "Pawnee",
    image_url: "https://www.qdma.com/wp-content/uploads/2017/11/rut-cam-lead.jpg",
    latitude: "",
    longitude: "",
    user_id: 1
  },
  {
    state: "Nebraska",
    county: "Richardson",
    image_url: "https://www.whitetailhabitatsolutions.com/uploads/blog/_blogSmallImage/wpid-PICT0547-1.jpg",
    latitude: "",
    longitude: "",
    user_id: 1
  },
  {
    state: "Nebraska",
    county: "Richardson",
    image_url: "https://www.grandviewoutdoors.com/uploads/images/SW435-Trail-camera-scouting-copyright-Mark-Kayser.jpg",
    latitude: "",
    longitude: "",
    user_id: 1
  }
])

p "#{User.count} users created"
p "#{Land.count} lands created"
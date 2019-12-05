class Land < ApplicationRecord
  belongs_to :users
  has_many :hunts
end

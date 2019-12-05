class Land < ApplicationRecord
  belongs_to :user
  has_many :hunts
end

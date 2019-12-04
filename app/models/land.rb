class Land < ApplicationRecord
  belongs_to :user
  has_many :hunt
end

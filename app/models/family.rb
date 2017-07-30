class Family < ApplicationRecord
  has_many :users

  validates :name, presence: true, uniqueness: true, length: { minimum: 3 }, format: { with: /\A[a-zA-Z0-9_]+\z/ }
  validates :display_name, presence: true, length: { maximum: 50 }
end

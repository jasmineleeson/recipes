class Family < ApplicationRecord
  has_many :users
  has_many :recipes

  validates :name, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9_]+\z/ }
  validates :display_name, presence: true, length: { maximum: 50 }
end

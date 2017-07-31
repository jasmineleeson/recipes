# frozen_string_literal: true

class FamilyFacade
  include ActiveModel::Model

  attr_accessor :name,
    :display_name,
    :user,
    :family

  validates :name, presence: true, length: { minimum: 3 }, format: { with: /\A[a-zA-Z0-9_]+\z/ }
  validates :user, presence: true

  def join_family!
    return false unless valid?
    return false if no_existing_family

    user.update_attribute(:family_id, @family.id)
    true
  end

  private

  def no_existing_family
    if @family = Family.find_by(name: name)
      false
    else
      errors.add(:family, "doesn't exist")
      true
    end
  end
end

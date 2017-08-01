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

  def create_family!
    return false unless valid?
    return false unless valid_display_name
    return false if existing_family

    @family = Family.create(name: name, display_name: display_name)
    user.update_attribute(:family_id, @family.id)
  end

  private

  def valid_display_name
    if display_name.present?
      true
    else
      errors.add(:display_name, "can't be blank")
      false
    end
  end

  def no_existing_family
    if @family = Family.find_by(name: name)
      false
    else
      errors.add(:family, "doesn't exist")
      true
    end
  end

  def existing_family
    if @family = Family.find_by(name: name)
      errors.add(:family, "already exists")
      true
    else
      false
    end
  end
end

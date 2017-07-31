class Registration
  include ActiveModel::Model

  attr_reader :user

  attr_accessor :first_name,
    :last_name,
    :email,
    :password,
    :password_confirmation

  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }
  validates :password, presence: true, length: { minimum: 6 }

  def register
    return false if existing_user
    return false if password_mismatch
    return false unless valid?

    create_user
    true
  end

  private

  def existing_user
    if User.find_by(email: email)
      errors.add(:email, :taken)
      true
    else
      false
    end
  end

  def password_mismatch
    if password != password_confirmation
      errors.add(:password, 'mismatch')
      true
    else
      false
    end
  end

  def create_user
    @user = User.new(
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    )
    @user.save!
  end
end

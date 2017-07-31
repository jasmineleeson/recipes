class RegistrationController < ApplicationController
  def new
    @registration = Registration.new
  end

  def create
    @registration = Registration.new(registration_params)
    if @registration.register
      log_in @registration.user
      render json: {}, status: 200
    else
      render json: { error: @registration.errors.full_messages.first }.to_json, status: 200
    end
  end

  def join_family
    @family_facade = FamilyFacade.new(user: current_user, name: params[:name])
    if @family_facade.join_family!
      render json: {}, status: 200
    else
      render json: { error: @family_facade.errors.full_messages.first }.to_json, status: 200
    end
  end

  def create_family
    @family_facade = FamilyFacade.new(user: current_user, name: params[:name], display_name: params[:display_name])
    if @family_facade.create_family!
      render json: {}, status: 200
    else
      render json: { error: @family_facade.errors.full_messages.first }.to_json, status: 200
    end
  end

  private

  def registration_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end

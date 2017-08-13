class RootController < ApplicationController
  def home
    if logged_in?
      user = current_user
      family = user.family
      recipes = family.recipes
      @home_facade = HomeFacade.new(user, family, recipes)
      render 'signed_in'
    else
      render 'signed_out'
    end
  end
end

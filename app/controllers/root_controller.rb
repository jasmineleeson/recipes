class RootController < ApplicationController
  def home
    if logged_in?
      user = current_user
      if family = user.family
        recipes = family.recipes
        @home_facade = HomeFacade.new(user, family, recipes)
        render 'signed_in'
      else
        render 'no_family'
      end
    else
      render 'signed_out'
    end
  end
end

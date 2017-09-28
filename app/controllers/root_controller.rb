class RootController < ApplicationController
  def home
    if logged_in?
      user = current_user
      if user.family
        render 'signed_in'
      else
        render 'no_family'
      end
    else
      render 'signed_out'
    end
  end

  def home_data
    user = current_user
    family = user.family
    recipes = family.recipes
    render json: HomeFacade.new(user, family, recipes).react_props, status: 200
  end
end

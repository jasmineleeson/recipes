class RootController < ApplicationController
  def home
    if logged_in?
      user = current_user
      render 'signed_in'
    else
      render 'signed_out'
    end
  end
end

class RootController < ApplicationController
  def home
    if logged_in?
      render 'signed_in'
    else
      render 'signed_out'
    end
  end
end

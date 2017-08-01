class RecipeFacade
  attr_reader :user,
    :family

  def initialize(user, family)
    @user = user
    @family = family
  end

  def react_props
    @_react_props ||= { hello: 'world' }.to_json
  end
end

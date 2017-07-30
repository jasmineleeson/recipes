require 'test_helper'

class RootControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get root_home_url
    assert_response :success
  end

  test "should get help" do
    get root_help_url
    assert_response :success
  end
end

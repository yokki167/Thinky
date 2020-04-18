require 'test_helper'

class WhiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get whies_index_url
    assert_response :success
  end

end

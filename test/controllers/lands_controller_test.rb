require 'test_helper'

class LandsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @land = lands(:one)
  end

  test "should get index" do
    get lands_url, as: :json
    assert_response :success
  end

  test "should create land" do
    assert_difference('Land.count') do
      post lands_url, params: { land: { county: @land.county, image_url: @land.image_url, latitude: @land.latitude, longitude: @land.longitude, state: @land.state } }, as: :json
    end

    assert_response 201
  end

  test "should show land" do
    get land_url(@land), as: :json
    assert_response :success
  end

  test "should update land" do
    patch land_url(@land), params: { land: { county: @land.county, image_url: @land.image_url, latitude: @land.latitude, longitude: @land.longitude, state: @land.state } }, as: :json
    assert_response 200
  end

  test "should destroy land" do
    assert_difference('Land.count', -1) do
      delete land_url(@land), as: :json
    end

    assert_response 204
  end
end

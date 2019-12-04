require 'test_helper'

class HuntsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hunt = hunts(:one)
  end

  test "should get index" do
    get hunts_url, as: :json
    assert_response :success
  end

  test "should create hunt" do
    assert_difference('Hunt.count') do
      post hunts_url, params: { hunt: { animal: @hunt.animal, cost: @hunt.cost, review: @hunt.review } }, as: :json
    end

    assert_response 201
  end

  test "should show hunt" do
    get hunt_url(@hunt), as: :json
    assert_response :success
  end

  test "should update hunt" do
    patch hunt_url(@hunt), params: { hunt: { animal: @hunt.animal, cost: @hunt.cost, review: @hunt.review } }, as: :json
    assert_response 200
  end

  test "should destroy hunt" do
    assert_difference('Hunt.count', -1) do
      delete hunt_url(@hunt), as: :json
    end

    assert_response 204
  end
end

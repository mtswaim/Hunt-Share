class LandsController < ApplicationController
  before_action :set_land, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show, :update]

  # GET /lands
  def index
    @lands = Land.all

    render json: @lands
  end

  # GET /lands/1
  def show
    render json: @land
  end

  # POST /lands
  def create
    # @land = Land.new(land_params)
    @land = @current_user.lands.new(land_params)
    if @land.save
      render json: @land, status: :created, location: @land
    else
      puts @land.errors.full_messages
      render json: @land.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lands/1
  def update
    if @land.update(land_params)
      render json: @land
    else
      render json: @land.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lands/1
  def destroy
    if @land.user == @current_user
      @land.destroy
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_land
      @land = Land.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def land_params
      params.require(:land).permit(:state, :county, :image_url, :latitude, :longitude, :user_id, :id, :created_at, :updated_at)
    end
end

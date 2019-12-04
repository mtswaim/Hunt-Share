class HuntsController < ApplicationController
  before_action :set_hunt, only: [:show, :update, :destroy]

  # GET /hunts
  def index
    @hunts = Hunt.all

    render json: @hunts
  end

  # GET /hunts/1
  def show
    render json: @hunt
  end

  # POST /hunts
  def create
    @hunt = Hunt.new(hunt_params)

    if @hunt.save
      render json: @hunt, status: :created, location: @hunt
    else
      render json: @hunt.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hunts/1
  def update
    if @hunt.update(hunt_params)
      render json: @hunt
    else
      render json: @hunt.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hunts/1
  def destroy
    @hunt.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hunt
      @hunt = Hunt.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hunt_params
      params.require(:hunt).permit(:cost, :animal, :review)
    end
end

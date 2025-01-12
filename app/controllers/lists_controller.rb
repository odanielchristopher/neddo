class ListsController < ApplicationController
  before_action :set_list, only: %i[ show edit update destroy ]

  # GET /lists or /lists.json
  def index
    @lists = List.all
    render json: @lists
  end

  # GET /lists/1 or /lists/1.json
  def show
  end

  # GET /lists/new
  def new
    @list = List.new
  end

  # GET /lists/1/edit
  def edit
  end
  # POST /lists or /lists.json
  def create
    @list = List.new(list_params)

    respond_to do |format|
      if @list.save
        format.html { redirect_to root_path, notice: "List was successfully created." }
        format.json { render json: { message: "List created successfully" }, status: :created }
      else
        Rails.logger.error @list.errors.full_messages
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: { errors: @list.errors.full_messages }, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lists/1 or /lists/1.json
  def update
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to root_path, notice: "List was successfully updated." }
        format.json { render :show, status: :ok, location: @list }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lists/1 or /lists/1.json
  def destroy
    if @list.destroy
      respond_to do |format|
        format.js   { render js: "document.getElementById('list-#{@list.id}').remove();" }
      end
    else
      respond_to do |format|
        format.js   { render js: "alert('Failed to delete the list.');" }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params.expect(:id))
    end

  # Only allow a list of trusted parameters through.
  def list_params
    # Permitir o title dentro de list e color diretamente
    # params.require(:list).permit(:title).merge(color: params[:color])
    params.require(:list).permit(:title, :color)
  end
end

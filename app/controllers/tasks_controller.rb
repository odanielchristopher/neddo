class TasksController < ApplicationController
  before_action :set_task, only: %i[ show edit update destroy ]
  before_action :set_list, only: %i[new create]  # Adicionando callback para garantir que @list esteja disponível

  # GET /tasks or /tasks.json
  def index
    @tasks = Task.where(list_id: params[:list_id])
    render json: @tasks  # Corrigido para @tasks, não @lists
  end

  # GET /tasks/1 or /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks or /tasks.json
  def create
    @task = @list.tasks.build(task_params)  # Corrigido para usar @list

    respond_to do |format|
      if @task.save
        format.html { redirect_to @task, notice: "Task was successfully created." }
        format.json { render :show, status: :created, location: @task }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tasks/1 or /tasks/1.json
  def update
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to @task, notice: "Task was successfully updated." }
        format.json { render :show, status: :ok, location: @task }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tasks/1 or /tasks/1.json
  def destroy
    @task.destroy!

    respond_to do |format|
      format.html { redirect_to tasks_path, status: :see_other, notice: "Task was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])  # Corrigido para usar params[:id]
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:titulo, :descricao, :horario, :list_id, :categoria_id)  # Corrigido para usar permit
    end

    def set_list
      @list = List.find(params[:list_id])  # Certifique-se de que @list é setado para o create e new
    end
end

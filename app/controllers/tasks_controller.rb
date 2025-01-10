class TasksController < ApplicationController
  before_action :set_task, only: %i[show edit update destroy]
  before_action :set_list, only: %i[new create]  # Adicionando callback para garantir que @list esteja disponível

  # GET /tasks or /tasks.json
  def index
    @tasks = Task.where(list_id: params[:list_id]) # Filtra tarefas com base no list_id
    render json: @tasks  # Retorna todas as tarefas como JSON
  end

  # GET /tasks/1 or /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = @list.tasks.new
    @categories = Category.all # Carrega todas as categorias
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks or /tasks.json
  def create
    @task = @list.tasks.build(task_params)
    @categories = Category.all

    respond_to do |format|
      if @task.save
        format.html { redirect_to home_index_path(list_id: @list.id), notice: "Task was successfully created." }
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
        format.html { redirect_to home_index_path(list_id: @list.id), notice: "Task was successfully updated." }
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
    # Usar callbacks para compartilhar configuração ou restrições entre ações.
    def set_task
      @task = Task.find(params[:id])  # Corrigido para usar params[:id]
    end

    # Somente permitir uma lista de parâmetros confiáveis.
    def task_params
      params.require(:task).permit(:title, :description, :hour, :list_id, :category_id)  # Corrigido para os parâmetros corretos
    end

    def set_list
      @list = List.find(params[:list_id])  # Recupera a lista com base no list_id
    end
end

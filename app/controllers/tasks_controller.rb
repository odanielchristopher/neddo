class TasksController < ApplicationController
  before_action :set_list
  before_action :set_task, only: %i[show edit update destroy]

  # GET /tasks or /tasks.json
  def index
    @tasks = @list.tasks # Filtra tarefas pertencentes à lista
    render json: @tasks  # Retorna todas as tarefas como JSON (ou ajuste para HTML se necessário)
    @selected_list = List.find(params[:list_id]) if params[:list_id].present?
    Rails.logger.debug "Selected list: #{@selected_list.inspect}"
  end

  # GET /tasks/1 or /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = @list.tasks.new
    @categories = Category.all # Carrega todas as categorias
    puts @categories.inspect
  end

  # GET /tasks/1/edit
  def edit
    @categories = Category.all
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
    if params[:task] && params[:task].key?(:completed) # Verifica se o parâmetro 'completed' foi enviado
      completed = ActiveModel::Type::Boolean.new.cast(params[:task][:completed])
      @task.update(completed: completed)
    end

    respond_to do |format|
      format.json { render json: { completed: @task.completed } }
      format.html { redirect_to home_index_path(list_id: @task.list_id), notice: "Task was successfully updated." }
    end
  end

  # DELETE /tasks/1 or /tasks/1.json
  def destroy
    @task.destroy!

    respond_to do |format|
      format.html { redirect_to home_index_path(list_id: @list.id), status: :see_other, notice: "Task was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def set_task
    @task = @list.tasks.find(params[:id]) # Garante que a tarefa pertence à lista
  end

  def set_list
    @list = List.find(params[:list_id]) # Garante que a lista é carregada
  end

  def task_params
    params.require(:task).permit(:title, :description, :hour, :list_id, :category_id, :completed)
  end
end

class TasksController < ApplicationController
  before_action :set_list
  before_action :set_task, only: %i[show edit update destroy]

  # GET /tasks or /tasks.json
  def index
    @tasks = @list.tasks # Filtra tarefas pertencentes à lista
    render json: @tasks
    @selected_list = List.find(params[:list_id]) if params[:list_id].present?
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
        flash[:notice] = "Tarefa criada com sucesso."
        format.html { redirect_to home_index_path(list_id: @list.id) }
        format.json { render :show, status: :created, location: @task }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tasks/1 or /tasks/1.json
  def update
    @categories = Category.all
    
    # Lógica específica para atualizar o campo `completed`
    if params[:task] && params[:task].key?(:completed)
      completed = ActiveModel::Type::Boolean.new.cast(params[:task][:completed])
      if @task.update(completed: completed)
        respond_to do |format|
          format.json { render json: { completed: @task.completed } }
          format.html { redirect_to home_index_path(list_id: @task.list_id) }
        end
      else
        flash.now[:alert] = "Erro ao atualizar o status da tarefa."
        render :edit, status: :unprocessable_entity
      end
    else
      # Atualização de outros campos da tarefa
      if @task.update(task_params)
        respond_to do |format|
          flash[:notice] = "Tarefa editada com sucesso."
          format.json { render json: { task: @task } }
          format.html { redirect_to home_index_path(list_id: @task.list_id) }
        end
      else
        # Renderiza erros caso as validações falhem
        respond_to do |format|
          flash.now[:alert] = "Erro ao atualizar a tarefa."
          format.json { render json: @task.errors, status: :unprocessable_entity }
          format.html { render :edit, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /tasks/1 or /tasks/1.json
  def destroy
    @task.destroy!

    respond_to do |format|
      flash[:notice] = "Tarefa excluída com sucesso."
      format.html { redirect_to home_index_path(list_id: @list.id), status: :see_other }
      format.json { head :no_content }
    end
  end

  private

  def set_task
    @task = @list.tasks.find(params[:id])
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def task_params
    params.require(:task).permit(:title, :description, :hour, :list_id, :category_id, :completed)
  end
end

class HomeController < ApplicationController
  def index
    @lists = List.all
    @selected_list = List.find_by(id: params[:list_id]) # Lista selecionada
    @tasks = @selected_list&.tasks || []
  end
end

class Task < ApplicationRecord
  belongs_to :list
  belongs_to :category

  # Adicionando validação para o campo completed, se necessário
  validates :completed, inclusion: { in: [ true, false ] }

  # Se você quiser um escopo para tarefas completas ou incompletas
  scope :completed, -> { where(completed: true) }
  scope :incomplete, -> { where(completed: false) }
end

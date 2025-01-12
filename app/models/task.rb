class Task < ApplicationRecord
  belongs_to :list
  belongs_to :category

  validates :title, presence: { message: "O título é obrigatório." }
  validates :hour, presence: { message: "A hora é obrigatória." }
  validates :category_id, presence: { message: "A categoria é obrigatória." }

  # Adicionando validação para o campo completed, se necessário
  validates :completed, inclusion: { in: [ true, false ] }

  # Se você quiser um escopo para tarefas completas ou incompletas
  scope :completed, -> { where(completed: true) }
  scope :incomplete, -> { where(completed: false) }
end

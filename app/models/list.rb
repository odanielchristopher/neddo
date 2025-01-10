class List < ApplicationRecord
  has_many :tasks, dependent: :destroy

  validates :title, presence: { message: "O título é obrigatório." }
end

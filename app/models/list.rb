class List < ApplicationRecord
  has_many :tasks, dependent: :destroy

  validates :title, presence: { message: "O título é obrigatório." }
  validates :color, presence: { message: "A cor é obrigatória." }
end

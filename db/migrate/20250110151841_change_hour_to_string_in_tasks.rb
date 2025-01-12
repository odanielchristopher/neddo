class ChangeHourToStringInTasks < ActiveRecord::Migration[8.0]
  def change
    change_column :tasks, :hour, :string
  end
end

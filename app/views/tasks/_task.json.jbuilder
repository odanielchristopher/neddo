json.extract! task, :id, :title, :description, :hour, :list_id, :category_id, :created_at, :updated_at
json.url task_url(task, format: :json)

json.extract! new, :id, :title, :introduction, :content, :photo, :created_at, :updated_at
json.url new_url(new, format: :json)

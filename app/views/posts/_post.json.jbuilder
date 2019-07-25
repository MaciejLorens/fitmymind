json.extract! post, :id, :title, :introduction, :content, :photo, :created_at, :updated_at
json.url post_url(post, format: :json)

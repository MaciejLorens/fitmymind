class CreatePostsTagsJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_join_table :posts, :tags
  end
end

class AddPhotoToPosts < ActiveRecord::Migration[5.2]
  def up
    add_attachment :posts, :photo
  end

  def down
    remove_attachment :posts, :photo
  end
end

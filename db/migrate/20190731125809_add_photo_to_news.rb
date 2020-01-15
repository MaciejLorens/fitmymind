class AddPhotoToNews < ActiveRecord::Migration[5.2]
  def up
    add_attachment :news, :photo
  end

  def down
    remove_attachment :news, :photo
  end
end

class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :introduction
      t.text :content
      t.text :author
      t.integer :category_id

      t.timestamps
    end

    add_index :posts, :title
    add_index :posts, :introduction
    add_index :posts, :content
    add_index :posts, :category_id
  end
end

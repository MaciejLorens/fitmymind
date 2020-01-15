class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :title
      t.text :introduction
      t.text :content

      t.timestamps
    end

    add_index :news, :title
    add_index :news, :introduction
    add_index :news, :content
  end
end

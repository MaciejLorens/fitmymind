class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.string :name
      t.string :result

      t.timestamps
    end
  end
end

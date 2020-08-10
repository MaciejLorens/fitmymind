class CreateStatistics < ActiveRecord::Migration[5.2]
  def change
    create_table :statistics do |t|
      t.string :key
      t.float :value
      t.string :status
      t.integer :user_id

      t.timestamps
    end
  end
end

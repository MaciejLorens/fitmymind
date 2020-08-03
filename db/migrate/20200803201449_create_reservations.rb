class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.date :day
      t.string :time
      t.boolean :available, default: true
      t.integer :company_id

      t.timestamps
    end
  end
end

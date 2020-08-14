class ChangeDataTypeForReservationsDay < ActiveRecord::Migration[5.2]

  def self.up
    change_table :reservations do |t|
      t.change :day, :string
    end
  end

  def self.down
    change_table :reservations do |t|
      t.change :day, :date
    end
  end

end

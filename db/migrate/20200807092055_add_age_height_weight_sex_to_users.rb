class AddAgeHeightWeightSexToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :integer
    add_column :users, :height, :integer
    add_column :users, :weight, :float
    add_column :users, :sex, :string
  end
end

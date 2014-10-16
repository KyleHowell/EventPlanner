class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :address
      t.string :description
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end

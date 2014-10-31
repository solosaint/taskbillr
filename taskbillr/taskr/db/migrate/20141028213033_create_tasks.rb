class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :content, null: false
      t.belongs_to :user, index: true
      t.boolean :completed, default: false, null: false

      t.timestamps
    end
  end
end

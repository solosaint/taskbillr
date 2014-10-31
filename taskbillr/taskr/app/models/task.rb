class Task < ActiveRecord::Base
  belongs_to :user
  validates :content, presence: true

  def complete!
    self.completed = true
    save
  end
end

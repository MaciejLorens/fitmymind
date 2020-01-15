class Post < ApplicationRecord
  has_attached_file :photo,
                    styles: { big: '945x450', medium: '750x357', thumb: '80x43' },
                    default_url: '/assets/missing/:style/missing.jpg'

  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  has_and_belongs_to_many :tags

  belongs_to :category

end

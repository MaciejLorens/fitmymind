class Post < ApplicationRecord
  has_attached_file :photo,
                    styles: { big: '850x450', medium: '360x230', thumb: '80x53' },
                    default_url: '/images/:style/missing.png'

  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  has_and_belongs_to_many :tags

  belongs_to :category

end

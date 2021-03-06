class New < ApplicationRecord
  has_attached_file :photo,
                    styles: { medium: '300x300>', thumb: '80x55>' },
                    default_url: '/assets/missing/:style/missing.jpg'

  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

end

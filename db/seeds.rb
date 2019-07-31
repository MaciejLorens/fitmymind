short_lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."

lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

User.create(
  email: 'mckl@poczta.fm',
  password: '123456',
  password_confirmation: '123456',
  admin: true
)

p1 = Post.create(title: 'Sample posts title 1', introduction: short_lorem, content: lorem)
p2 = Post.create(title: 'Sample posts title 2', introduction: short_lorem, content: lorem)
p3 = Post.create(title: 'Sample posts title 3', introduction: short_lorem, content: lorem)

n1 = New.create(title: 'Sample news title 1', introduction: short_lorem, content: lorem)
n2 = New.create(title: 'Sample news title 2', introduction: short_lorem, content: lorem)
n3 = New.create(title: 'Sample news title 3', introduction: short_lorem, content: lorem)

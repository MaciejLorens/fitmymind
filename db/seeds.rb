short_lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."

lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

User.create(
  email: 'maciej.lorens@gmail.com',
  password: '123456',
  password_confirmation: '123456',
  admin: true
)

c1 = Category.create(name: 'dietetyka')
c2 = Category.create(name: 'fitness')
c3 = Category.create(name: 'zdrowie')

t1 = Tag.create(name: 'woda')
t2 = Tag.create(name: 'kalorie')
t3 = Tag.create(name: 'energia')

p1 = Post.create(title: 'Sample post title 1', introduction: short_lorem, content: lorem, category: c1, author: 'Aleksandra Kucharchyk')
p2 = Post.create(title: 'Sample post title 2', introduction: short_lorem, content: lorem, category: c2, author: 'Aleksandra Kucharchyk')
p3 = Post.create(title: 'Sample post title 3', introduction: short_lorem, content: lorem, category: c3, author: 'Aleksandra Kucharchyk')

n1 = New.create(title: 'Sample new title 1', introduction: short_lorem, content: lorem)
n2 = New.create(title: 'Sample new title 2', introduction: short_lorem, content: lorem)
n3 = New.create(title: 'Sample new title 3', introduction: short_lorem, content: lorem)

50.times do
  Result.create(
    name: SecureRandom.hex(4),
    result: - (rand(150).to_f / 10),
    created_at: rand(100).days.ago
  )
end

p1.update(tags: [t1, t2, t3])
p2.update(tags: [t1])
p3.update(tags: [t1, t3])

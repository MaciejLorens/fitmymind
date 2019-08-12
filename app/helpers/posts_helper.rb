module PostsHelper

  def category_to(category)
    category_link = "#{category.name} (#{category.posts.count})"

    if params[:category] == category.name
      category_class = 'selected'
      category_path = posts_path(
        tags: params[:tags]
      )
    else
      category_class = ''
      category_path = posts_path(
        category: category.name,
        tags: params[:tags]
      )
    end

    link_to category_link, category_path, class: category_class
  end

  def tag_to(tag)
    tag_link = "#{tag.name} (#{tag.posts.count})"

    if params[:tags]&.include?(tag.name)
      tag_class = ' selected'
      tag_path = posts_path(
        category: params[:category],
        tags: (params[:tags] || []) - [tag.name]
      )
    else
      tag_class = ''
      tag_path = posts_path(
        category: params[:category],
        tags: (params[:tags] || []) + [tag.name]
      )
    end

    link_to tag_link, tag_path, class: tag_class
  end

end

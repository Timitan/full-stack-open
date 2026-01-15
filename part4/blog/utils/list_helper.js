const _ = require('lodash');

const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0);
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return null;
    }
    return blogs.reduce((fav, blog) => blog.likes > fav.likes ? blog : fav, blogs[0])
}

const mostBlogs = (blogs) => {
  if(blogs.length === 0) {
    return null;
  }
  
  // Group blogs by author
  const grouped = Object.entries(_.groupBy(blogs, 'author'));

  // Count blogs per author
  const authorBlogCounts = grouped.map(([author, authorBlogs]) => ({
    author: author,
    blogs: authorBlogs.length
  }));

  // Find author with maximum blogs
  return authorBlogCounts.reduce((max, author) => author.blogs > max.blogs ? author : max, authorBlogCounts[0]);
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
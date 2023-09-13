import PropTypes from 'prop-types';
const Blog = ({blog}) => {
console.log(blog)
    return (
        <div>
            {
                blog.map(blog => <h2>{blog.title}</h2>)
            }
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
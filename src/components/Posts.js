import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

export class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    containerStyle = () => {
        return{
            display: 'block',
            padding: '2rem'
        }
    }




  render() {
      const postItem = this.props.posts.map(post => (
          <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
          </div>
      ))
    return (
      <div style={this.containerStyle()}>
        <h1 style = {{borderBottom: '3px solid'}}>Posts</h1>
          {postItem}
      </div>
    )
  }
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost: propTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);

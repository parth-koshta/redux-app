import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

export class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
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

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Posts);

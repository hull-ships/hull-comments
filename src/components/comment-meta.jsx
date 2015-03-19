import React from 'react';
import cx from 'react/lib/cx';
import moment from 'moment';
import CommentActions from './comment-actions';

var CommentMeta = React.createClass({
  render: function() {
    var comment = this.props.comment;
    var user = comment.user;

    return (
      <header className='comment-meta light-text'>
        <strong className='comment-author'>
          <a>{user.name || 'Guest'}</a> { user.is_admin ? <span className='admin'>Admin</span> : undefined }
        </strong>

        <span className='comment-time'>
          <a href={'#comment-' + comment.id}>{moment(comment.created_at).fromNow()}</a>
        </span>

        <CommentActions {...this.props}/>
      </header>
    );
  }
});

module.exports = CommentMeta;
import React from 'react';
import CommentForm from './comment-form';
import { translate } from '../lib/i18n';
import styles from '../styles/comment-message.scss';
import cssModules from '../lib/cssModules';


const CommentMessage = React.createClass({
  propTypes: {
    comment: React.PropTypes.shape({
      user: React.PropTypes.object,
      id: React.PropTypes.string,
    }).isRequired,
    isCurrentUser: React.PropTypes.bool,
    isEditing: React.PropTypes.bool,
    onToggleEdit: React.PropTypes.func.isRequired,
  },

  render() {
    const { comment, isCurrentUser, isEditing, onToggleEdit } = this.props;
    let content;

    if (isCurrentUser && isEditing) {
      content = <CommentForm mode="edit" {...this.props} onCancel={onToggleEdit} onSubmit={onToggleEdit} />;
    } else if (comment.deleted_at) {
      content = <small className="light-text">{translate('Comment has been deleted.')}</small>;
    } else {
      content = <div dangerouslySetInnerHTML={{__html: comment.description }} />;
    }
    return <div styleName="body">{content}</div>;
  },

});

module.exports = cssModules(CommentMessage, styles);
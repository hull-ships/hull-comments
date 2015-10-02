import _ from '../lib/lodash';
import str from 'underscore.string';
import React from 'react';
import DropdownMenu from './dropdown-menu';
import Icon from './icon';
import { translate } from '../lib/i18n';
import styles from '../styles/share-menu.scss';
import cssModules from '../lib/cssModules';


const PROVIDERS = ['facebook', 'twitter', 'linkedin', 'google', 'email'];
const MOBILE_PROVIDERS = ['whatsapp'];

const ShareMenu = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    size: React.PropTypes.number,
    actions: React.PropTypes.object.isRequired,
    component: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string,
    ]).isRequired,
    right: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      right: false,
      size: 24,
      component: 'span',
    };
  },

  getTitle() {
    return this.props.title || <span><Icon colorize name="share"/>{translate('Share')}</span>;
  },

  getOptions() {
    const providers = Hull.utils.isMobile() ? PROVIDERS.concat(MOBILE_PROVIDERS) : PROVIDERS;

    return _.map(providers, (value) => {
      return {
        label: <span><Icon size={this.props.size} style={{marginRight: 5}} colorize={false} name={value}/><span className="share-text">&nbsp;{str.humanize(value)}</span></span>,
        value: value.toLowerCase(),
      };
    });
  },

  handleShare(event) {
    this.props.actions.share(event.value);
  },

  render() {
    return (
      <DropdownMenu
        component={this.props.component}
        right={this.props.right}
        options={this.getOptions()}
        title={this.getTitle()}
        onSelect={this.handleShare} />
    );
  },
});

module.exports = cssModules(ShareMenu, styles);

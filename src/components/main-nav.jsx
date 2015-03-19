import _            from 'underscore';
import React        from 'react';
import cx           from 'react/lib/cx';
import UserMenu     from './user-menu';
import SortMenu from './sort-menu';
import ShareMenu from './share-menu';
import FavoritesButton from './favorites-button';

var MainHeader = React.createClass({
  propTypes: {
    orderBy: React.PropTypes.string
  },

  getInitialState() {
    return {
      expanded:false
    };
  },
  getDefaultProps() {
    return { orderBy: 'newest' };
  },

  toggleNavBar(){
    this.setState({expanded:!this.state.expanded});
  },

  renderMenuToggle(){
    return <li className="toggle-topbar menu-icon"><a href="#" onClick={this.toggleNavBar}><span>Menu</span></a></li>
  },

  render() {
    var navClasses = {
      'nav-bar': true,
      'top-bar': true,
      'expanded': true
    };

    return <nav className={cx(navClasses)}>
      <section className="top-bar-section">
        <ul className="title-area">
          <li className="name">
            <h1>
              <a href="">
                {_('Comment').pluralize(this.props.commentsCount, true)}
              </a>
            </h1>
          </li>
        </ul>
        <ul className="left">
          <SortMenu {...this.props} />
        </ul>
        <ul className="left">
          <FavoritesButton {...this.props}/>
          <ShareMenu {...this.props} right={false} />
        </ul>
        <ul className="right">
          <UserMenu {...this.props} />
        </ul>
      </section>
    </nav>;
  }
});

module.exports = MainHeader;
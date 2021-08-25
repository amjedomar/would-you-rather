import {Link, NavLink} from 'react-router-dom';
import {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

class Nav extends Component {
  links = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'New Question',
      to: '/add'
    },
    {
      label: 'Leader Board',
      to: '/leaderboard'
    }
  ];

  state = {
    show: false
  };

  showNav = () => {
    this.setState({show: true});
  }

  hideNav = () => {
    this.setState({show: false});
  }

  logout = () => {
    const {dispatch} = this.props;

    dispatch(setAuthedUser(null));

    this.hideNav();
  };

  render() {
    const rootClassname = ['nav', this.state.show ? 'show' : ''].join(' ');

    const {user} = this.props;

    return (
      <>
        <div className={rootClassname}>
          <Link to="/" className="nav-title">
            WouldYouRather
          </Link>

          <div className="nav-sections">
            <div className="nav-section">
              {this.links.map(link => (
                <NavLink
                  key={link.label}
                  exact
                  className="nav-item nav-link"
                  activeClassName="active"
                  to={link.to}
                  onClick={this.hideNav}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {user && (
              <div className="nav-section">
                <div className="nav-item">
                  <img
                    style={{marginRight: 8}}
                    src={user.avatarURL}
                    alt="Your Avatar"
                    width="24"
                    height="24"
                  />

                  <span>{user.name}</span>
                </div>

                <button onClick={this.logout} className="nav-item nav-link">
                  Logout
                </button>
              </div>
            )}
          </div>

          <button onClick={this.showNav} className="nav-toggler">
            <img src="/menu-icon.png" alt="Menu Icon" width="24px" height="24px" />
          </button>

          <div onClick={this.hideNav} className="nav-backdrop" />
        </div>

        <div className="nav-space" />
      </>
    );
  }
}

const mapStateToProps = ({users, authedUser}) => ({
  user: authedUser ? users[authedUser] : null
});

export default connect(mapStateToProps)(Nav);

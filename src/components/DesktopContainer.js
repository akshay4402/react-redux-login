import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {Container, Menu, Dropdown} from 'semantic-ui-react'

import { logout } from '../store/actions/auth';

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  logout = () => this.props.logout(this.props.history);

  render() {
    const { children } = this.props

    return (
      <div>
        <Menu className="top">
          <Container>
            <Menu.Item as={Link} to='/about'>Create User</Menu.Item>

              <Menu.Menu position='right'>
                  <Dropdown item text='My Account'>
                    <Dropdown.Menu>
                      <Dropdown.Header
                        icon='user'
                        content={'user name'}
                      />
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={this.logout} >Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </Menu.Menu>
            
          </Container>
        </Menu>
        {children}
      </div>
    )
  }
}

DesktopContainer.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
  logout: PropTypes.func
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { logout })(withRouter(DesktopContainer));
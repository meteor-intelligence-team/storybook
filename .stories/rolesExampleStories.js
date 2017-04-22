import React, { Component } from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import RoleManager from '@techexmachina/react-role-manager';
import { Segment, Checkbox, Grid, Header, Table, Search, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';


// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
const stories = storiesOf('react-role-manager', module)
stories.addDecorator(withKnobs);

const style={
  marginLeft: 15,
  marginRight: 15
}

stories.addWithInfo(
  'Example of management',
  `
  This is a role management interface.
  `,
  () =>  (
    <div style={style}>
    <RoleManagerExample/>
    </div>
  ),
  {
    inline: true,
    styles: stylesheet => {
        stylesheet.infoPage = {
          paddingLeft: 15,
          paddingRight: 15,
        };
        return stylesheet;
      },
    },
)


const roles = [
  "super-admin",
  "admin",
  "author",
  "subscriber",
  "user",
];

const users = [
  {
    _id: 1,
    name: "david",
    roles: ['admin'],
  },
  {
    _id: 2,
    name: "simon",
    roles: ['subscriber'],
  },
  {
    _id: 3,
    name: "sylvain",
    roles: ['author'],
  },
  {
    _id: 4,
    name: "francois",
    roles: ['subscriber'],
  },
  {
    _id: 5,
    name: "jimmy",
    roles: ['admin'],
  },
];

/********************************************************/

export default class RoleManagerExample extends Component {
  constructor( props ){
    super( props );
    autobind( this );
    this.state = {
      loading: false,
      results: users,
      columns: [
        '_id',
        'name',
      ],
    };
  }

  handeOptionChange( roles, searchValue ){
    this.setState({ loading: true });

    searchValue = searchValue.trim();

    if ( !roles.length && !searchValue ) this.setState({ loading: false, results: users });
    else setTimeout( f => {
      const regexp = new RegExp( searchValue, 'i' );
      const results = users.filter( user => (
        ( !roles.length && regexp.test( user.name ) ) ||
        ( roles.length && roles.indexOf( user.roles ) >= 0 && regexp.test( user.name ) ) ||
        ( !searchValue && roles.length && roles.indexOf( user.roles ) >= 0 )
      ) );

      this.setState({ loading: false, results });
    }, 500 );
  }

  handleRoleChange( newRoles, userId ){
    console.log("Attributing new roles to " + userId, newRoles);
    // Update your databse here
  }

  render(){
    const { loading, results, columns } = this.state;

    return (
      <RoleManager
        loading={loading}
        results={results}
        onOptionChange={this.handeOptionChange}
        roles={roles}
        columns={columns}
        onRoleChange={this.handleRoleChange}
      />
    );
  }
}

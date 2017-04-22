import React from 'react';
import { List, Segment, Header, Container } from 'semantic-ui-react'
import { linkTo } from '@kadira/storybook';

const styles = {
  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

const components = [
  {
    name: "mx-react-wysiwyg",
    repo: "https://github.com/meteor-intelligence-team/mx-react-wysiwyg",
    author: "MeXaaR",
    version: "0.1.0",
    shortDesc: "Simple React component for a rich editor text and the conversion to render HTML"
  },
  {
    name: "react-role-manager",
    repo: "https://github.com/meteor-intelligence-team/react-role-manager",
    author: "Fen747",
    version: "1.0.5",
    shortDesc: "Simple React component to manage users roles/teams based on Semantic UI for React"
  },
  {
    name: "react-table-generator",
    repo: "https://github.com/meteor-intelligence-team/react-table-generator",
    author: "Fen747",
    version: "1.0.1",
    shortDesc: "A semantic-ui-react based modular table generator"
  },
  {
    name: "react-semantic-form",
    repo: "https://github.com/meteor-intelligence-team/react-semantic-form",
    author: "Sylchauf",
    version: "0.0.1",
    shortDesc: "A dynamic form for react with validation and data posting support with customizable input components."
  }
]

export default class Welcome extends React.Component {
  showWysiwyg(e) {
    e.preventDefault();
    if(this.props.showWysiwyg) this.props.showWysiwyg();
  }

  showComponent(value){
    this.props.linkTo(value)
  }

  render() {
    return (
      <Container style={{marginTop: 80}}>
        <Header dividing as="h1">Welcome to the Meteor Intelligence Toulouse</Header>
        <p>
          Here you can find all our component for react et check the way they work
        </p>
        <p>
          You can find them all on this organization github link
          <br/>
          <a href="https://github.com/meteor-intelligence-team">https://github.com/meteor-intelligence-team</a>
        </p>
        <Segment raised>
          <Header>Our components</Header>
          <List divided relaxed>
            {components.map((compo, i) => (
              <List.Item key={i}>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a' href="https://github.com/meteor-intelligence-team/mx-react-wysiwyg" target="_blank">{compo.name} - version {compo.version}</List.Header>
                  <List.Description>by {compo.author}</List.Description>
                  <List.Description>{compo.shortDesc}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>

        <p>
          <Header as="h3">Tools</Header>
          We have made a tool to help people to create React components.

          Have a look at the <a style={styles.link} href="https://github.com/meteor-intelligence-team/npm-packages-editor" target="_blank">Peditor</a> repo for more information.
        </p>
      </Container>
    );
  }
}

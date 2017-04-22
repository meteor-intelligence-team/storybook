import React from 'react';
import { render } from 'react-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import 'semantic-ui-css/semantic.min.css';
import Form, { ValidationError, TextInput } from 'react-semantic-form';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';


// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
const stories = storiesOf('react-semantic-form', module)
stories.addDecorator(withKnobs);
const style={
  marginLeft: 15,
  marginRight: 15
}

stories.addWithInfo(
  'Example of form',
  `
  A dynamic form for react with validation and data posting support with customizable input components
  `,
  () =>  (
    <div style={style}>
    <Form
      action="/"
      method="GET"
      className="form"
      attributes={[
          { type: "Text", name: "username", required: true, label: "Username" },
          { type: "Date", name: "dob", required: true, label: "Date of Birth"},
          { type: "TextArea", name: "description", label: "Description" }
      ]} />
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

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Wysiwyg, ConvertToHTML} from "mx-react-wysiwyg"
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

var content = null

const style={
  marginLeft: 15,
  marginRight: 15
}

const stories = storiesOf('mx-react-wysiwyg', module)
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'All options',
  `
  This is a rich text editor with many options.
  `,
  () =>  (
    <div style={style}>
    <Wysiwyg
      onChange={(value) => {var content = value}}
      value={content}
    />
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
stories.addWithInfo(
  'Whatever you want',
  `
  You can select wich style you disable.
  `,
  () =>  (
    <div style={style}>
    <Wysiwyg
      style={style}
      h1={boolean('Disable h1', true)}
      h2={boolean('Disable h2', true)}
      h3={boolean('Disable h3', true)}
      h4={boolean('Disable h4', true)}
      h5={boolean('Disable h5', true)}
      h6={boolean('Disable h6', true)}
      bold={boolean('Disable bold', true)}
      underline={boolean('Disable underline', true)}
      blockQuote={boolean('Disable blockQuote', true)}
      code={boolean('Disable code style', true)}
      italic={boolean('Disable italic', true)}
      list={boolean('Disable list', true)}
      numberedList={boolean('Disable numberedList', true)}
      onChange={(value) => {var content = value}}
      value={content}
    />
  </div>
  ),
  {
    inline: true,
    styles: stylesheet => {
        stylesheet.infoPage = {
          paddingLeft: 15,
          paddingRight: 15
        };
        return stylesheet;
      },
    },
)

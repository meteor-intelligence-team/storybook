import React, { Component } from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Wysiwyg, ConvertToHTML} from "mx-react-wysiwyg"
import { Container, Grid } from 'semantic-ui-react'
import Welcome from './Welcome';
var content = null

const style={
  marginLeft: 15,
  marginRight: 15
}

storiesOf('Welcome', module)
.add('to our Storybook', () => (
  <Welcome/>
));

storiesOf('mx-react-wysiwyg', module)
.addWithInfo(
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
    propTables: false,
    inline: true,
    styles: stylesheet => {
        stylesheet.infoPage = {
          paddingLeft: 15,
          paddingRight: 15,
          overflowX: "hidden"
        };
        return stylesheet;
      },
    },
)
.addWithInfo(
  'No titles style',
  `
  You can select wich style you disable.
  `,
  () =>  (
    <div style={style}>
    <Wysiwyg
      style={style}
      h1={false}
      h2={false}
      h3={false}
      h4={false}
      h5={false}
      h6={false}
      onChange={(value) => {var content = value}}
      value={content}
    />
  </div>
  ),
  {
    propTables: false,
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

.addWithInfo(
  'One title, no underline style',
  `
  You can select wich style you disable.
  `,
  () =>  (
    <div style={style}>
    <Wysiwyg
      style={style}
      h1={false}
      h2={false}
      h3={true}
      h4={false}
      h5={false}
      h6={false}
      underline={false}
      onChange={(value) => {var content = value}}
      value={content}
    />
  </div>
  ),
  {
    propTables: false,
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

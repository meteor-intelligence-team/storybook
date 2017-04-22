import React from 'react';
import AlertContainer from 'mx-react-toaster';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';


// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
const stories = storiesOf('mx-react-toaster', module)
stories.addDecorator(withKnobs);

const style={
  marginLeft: 15,
  marginRight: 15
}



stories.addWithInfo(
  'Success',
  `
  A simple piling react toaster
  `,
  () =>  (
    <div style={style}>
     <ToasterExample
       offset={number("Offset", 14)}
       position={text("Position", "bottom left")}
       theme={text("Theme", "dark")}
       time={number("Time", 5000)}
       transition={text("Transition", "scale")}
       type={text("Type", "success")}
       text={text("Message", "Some text or component")}
     />
    </div>
  ),
  {
    inline: true,
    storySource: false,
    styles: stylesheet => {
        stylesheet.infoPage = {
          paddingLeft: 15,
          paddingRight: 15,
        };
        return stylesheet;
      },
    },
)


export default class ToasterExample extends React.Component {

  showAlert(){
    this.msg.show(this.props.text, {
      type: this.props.type,
    });
  }

  render(){
    const alertOptions = this.props;
    return(
      <div>
        <AlertContainer ref={a => this.msg = a} {...alertOptions} />
        <button onClick={this.showAlert.bind(this)}>Show Alert</button>
      </div>
    );
  }
}

import { configure } from '@kadira/storybook';
import { setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
function loadStories() {
  require('../.stories');
}


setAddon(infoAddon);

configure(loadStories, module);

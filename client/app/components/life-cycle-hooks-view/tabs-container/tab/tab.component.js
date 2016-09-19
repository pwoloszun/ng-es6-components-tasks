import template from './tab.component.html';
import controller from './tab.controller';

const TabComponent = {
  transclude: true,
  require: {
    tabsContainer: "^^"
  },
  bindings: {
    label: "@"
  },
  template,
  controller
};

export default TabComponent;

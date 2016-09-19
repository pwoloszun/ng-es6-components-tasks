import angular from 'angular';

import TabComponent from './tab.component';

const TabModule = angular.module('componentsApp.components.lifeCycleHooksView.tabsContainer.tab', [])
  .component('tab', TabComponent);

export default TabModule;
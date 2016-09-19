import angular from 'angular';

import TabModule from './tab/tab.module';
import TabsContainerComponent from './tabs-container.component';

const TabsContainerModule = angular.module('componentsApp.components.lifeCycleHooksView.tabsContainer', [
  TabModule.name
])
  .component('tabsContainer', TabsContainerComponent);

export default TabsContainerModule;
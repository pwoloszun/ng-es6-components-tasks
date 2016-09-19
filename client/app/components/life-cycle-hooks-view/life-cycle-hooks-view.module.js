import angular from 'angular';

import TabsContainerModule from './tabs-container/tabs-container.module';
import WizardModule from "./wizard/wizard.module";
import LifeCycleHooksViewComponent from './life-cycle-hooks-view.component';

const LifeCycleHooksViewModule = angular.module('componentsApp.components.lifeCycleHooksView', [
  TabsContainerModule.name,
  WizardModule.name
])
  .component('lifeCycleHooksView', LifeCycleHooksViewComponent);

export default LifeCycleHooksViewModule;
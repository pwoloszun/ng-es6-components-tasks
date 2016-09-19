import angular from 'angular';

import LifeCycleHooksViewModule from './life-cycle-hooks-view/life-cycle-hooks-view.module';
import SharedModule from './shared/shared.module';

const ComponentsModule = angular.module('componentsApp.components', [
  LifeCycleHooksViewModule.name,
  SharedModule.name
]);

export default ComponentsModule;

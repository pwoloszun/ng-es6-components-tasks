import angular from 'angular';

import WizardStepModule from './wizard-step/wizard-step.module';
import WizardComponent from './wizard.component';

const WizardModule = angular.module('componentsApp.components.lifeCycleHooksView.wizard', [
  WizardStepModule.name
])
  .component('wizard', WizardComponent);

export default WizardModule;
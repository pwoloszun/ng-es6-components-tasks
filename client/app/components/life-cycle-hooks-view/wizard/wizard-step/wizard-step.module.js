import angular from 'angular';

import WizardStepComponent from './wizard-step.component';

const WizardStepModule = angular.module('componentsApp.components.lifeCycleHooksView.wizard.wizardStep', [])
  .component('wizardStep', WizardStepComponent);

export default WizardStepModule;
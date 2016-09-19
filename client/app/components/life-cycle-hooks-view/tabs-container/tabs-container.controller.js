class TabsContainerController {
  $onInit() { // called once after constructor
    this.tabs = [];
  }

  $postLink() { // called once after all child components/directives has been rendered
    this.selectTab(2);
  }

  addTab(tab) {
    this.tabs.push(tab);
  }

  selectTab(index) {
    this.selectedTab = this.tabs[index];
  }

  isSelectedTab(tab) {
    return this.selectedTab === tab;
  }
}

export default TabsContainerController;

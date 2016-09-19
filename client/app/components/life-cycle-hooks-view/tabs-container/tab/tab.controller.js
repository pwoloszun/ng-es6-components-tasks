class TabController {
  $onInit() { // called once after constructor
    this.tab = {
      label: this.label
    };
    this.tabsContainer.addTab(this.tab);
  }

  isSelected() {
    return this.tabsContainer.isSelectedTab(this.tab);
  }
}

export default TabController;

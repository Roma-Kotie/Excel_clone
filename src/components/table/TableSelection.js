export class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear();
    if ($el instanceof DOM) {
      $el.focus().addClass(TableSelection.className);
      this.group.push($el);
      this.current = $el;
    }
  }

  clear() {
    this.group.forEach(($el) => {
      if ($el instanceof DOM) {
        $el.removeClass(TableSelection.className);
      }
    });
    this.group = [];
  }

  selectGroup($group = []) {
    this.clear();

    this.group = $group.filter(($el) => $el instanceof DOM);
    this.group.forEach(($el) => $el.addClass(TableSelection.className));
  }
}

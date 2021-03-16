import Route from '@ember/routing/route';

export default class Step2Route extends Route {
  model() {
    let m = this.controllerFor('step1');
    return m.includedItems;
  }
}

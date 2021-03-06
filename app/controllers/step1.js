import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked includedItems_ = [];
  @tracked dispoItems_ = [];

  @action changeDispo(elements) {
    this.dispoItems_ = elements;
  }

  @action changeIncluded(elements) {
    this.includedItems_ = elements;
  }

  @action add(source, dest, what) {
    dest.addObjects(what);
    source.removeObjects(what);
    this.includedItems_=what;
  }

  @action remove(source, dest, what) {
    dest.addObjects(what);
    source.removeObjects(what);
    this.dispoItems_=what;
  }
}

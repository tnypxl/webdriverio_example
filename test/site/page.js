export default class Page {
  // constructor() {
  //   this.title = 'The Internet';
  // }

  open(path) {
    browser.url(path);
  }
}
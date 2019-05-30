export default class Navigation {
  constructor(selector) {
    const navigation = document.querySelector(selector);

    navigation.querySelectorAll('a').forEach(
      link => link.addEventListener(
        'click', e => this.onNavigationLinkClick(e)));
  }

  onNavigationLinkClick(e) {
    e.preventDefault();

    const sections = document.querySelectorAll('.section');

    sections.forEach(section => section.classList.add('hidden'));

    document.querySelector(e.target.hash).classList.remove('hidden');
  }
}

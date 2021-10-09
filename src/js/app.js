import Taskmanager from './Taskmanager';

const taskmanager = new Taskmanager(document.querySelector('.taskmanager'));
taskmanager.init();
taskmanager.tasks = [
  ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Suspendisse pellentesque ex ornare felis placerat fringilla.', 'Ut imperdiet, risus at vestibulum fermentum', 'Donec vel purus blandit nisi rhoncus semper in sed sem.', 'Morbi fermentum ex sed lectus finibus'],
  ['Duis tincidunt consequat dolor', 'Nam eleifend hendrerit lorem.', 'Vestibulum augue odio'],
  ['Phasellus eget pulvinar dolor.', 'Sed et enim non nibh volutpat imperdiet.'],
];
taskmanager.render();

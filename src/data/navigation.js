export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Magazine', href: '/magazine' },
  { label: 'News', href: '/news', children: [
    { label: 'Power', href: '/news/power' },
    { label: 'Renewable', href: '/news/renewable' },
    { label: 'Policy', href: '/news/policy' },
  ]},
  { label: 'Interviews', href: '/interviews' },
  { label: 'Resources', href: '/resources', children: [
    { label: 'Reports', href: '/resources/reports' },
    { label: 'Whitepapers', href: '/resources/whitepapers' },
  ]},
  { label: 'Cover Story', href: '/cover-story' },
  { label: 'Editorial Calender', href: '/editorial-calender' },
  { label: 'Event Calender', href: '/event-calender' },
  { label: 'Gallery', href: '/gallery' },
];

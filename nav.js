const PAGES = [
  {
    key:   'mat',
    label: 'MAT',
    title: 'Mathematics',
    href:  'mat.html',
    ready: true,
  },
  {
    key:   'csi',
    label: 'CSI',
    title: 'Computer Science',
    href:  'csi.html',
    ready: true,
  },
  {
    
  },
];

function buildNav(activePage) {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Brand — links back to home
  const brand = document.createElement('a');
  brand.className = 'brand';
  brand.textContent = 'uOttawa';
  brand.href = 'index.html';
  brand.style.textDecoration = 'none';
  nav.appendChild(brand);

  const div = document.createElement('div');
  div.className = 'divider';
  nav.appendChild(div);

  // Tabs
  PAGES.forEach(page => {
    const a = document.createElement('a');
    a.className = 'nav-tab' + (page.key === activePage ? ' active' : '') + (!page.ready ? ' coming-soon' : '');
    a.href  = page.ready ? page.href : '#';
    a.title = page.title;

    const label = document.createElement('span');
    label.textContent = page.label;
    a.appendChild(label);

    if (!page.ready) {
      const soon = document.createElement('span');
      soon.style.cssText = 'font-size:9px;opacity:.6;margin-left:2px;';
      soon.textContent = 'soon';
      a.appendChild(soon);
    }

    nav.appendChild(a);
  });

  // Right-side hint
  const hint = document.createElement('span');
  hint.className = 'hint-text';
  hint.textContent = 'Scroll to zoom · Drag to pan · Esc closes detail';
  nav.appendChild(hint);
}
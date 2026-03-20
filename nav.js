/**
 * nav.js — shared navigation bar for the uOttawa Course Map
 *
 * Usage: include this script in any page and call  buildNav('mat')
 * The argument is the key of the currently active page.
 *
 * To add a new department, just add an entry to PAGES below.
 */

const PAGES = [
  {
    key:   'mat',
    label: 'MAT',
    title: 'Mathematics',
    href:  'mat.html',
    dot:   '#8878e0',   // lavender — matches 1000-level MAT pastel
    ready: true,
  },
  {
    key:   'csi',
    label: 'CSI',
    title: 'Computer Science',
    href:  'csi.html',
    dot:   '#58b0e0',   // sky blue
    ready: true,
  },
  // ── add more departments here ────────────────────────────────────────────
  // { key:'phy', label:'PHY', title:'Physics',   href:'phy.html', dot:'#e0a858', ready:false },
  // { key:'sta', label:'STA', title:'Statistics', href:'sta.html', dot:'#60c878', ready:false },
];

function buildNav(activePage) {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Brand
  const brand = document.createElement('span');
  brand.className = 'brand';
  brand.textContent = 'uOttawa';
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

    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.background = page.dot;

    const label = document.createElement('span');
    label.textContent = page.label;

    a.appendChild(dot);
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
  hint.textContent = 'Scroll to zoom · Drag to pan · Click to inspect';
  nav.appendChild(hint);
}
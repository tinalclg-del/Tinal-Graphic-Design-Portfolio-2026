/* Slide-in case study routing (single page, hash based)
   #/salon-brand-identity      -> Roselle case study
   #/logistics-brand-identity  -> Meridian case study
   anything else               -> main page                                   */
(() => {
  const root = document.documentElement;
  const home = document.getElementById('view-home');
  const routes = {
    '#/salon-brand-identity': document.getElementById('case-salon'),
    '#/logistics-brand-identity': document.getElementById('case-logistics'),
  };
  const panels = Object.values(routes).filter(Boolean);

  /* Every case study reuses the main page's contact footer, so the links only live in one place. */
  const mainFooter = document.getElementById('contact');
  if (mainFooter) {
    panels.forEach((panel) => {
      const suffix = '-' + panel.id;
      const clone = mainFooter.cloneNode(true);
      clone.id = 'contact' + suffix;
      clone.querySelectorAll('[id]').forEach((el) => {
        const old = el.id, next = old + suffix;
        el.id = next;
        clone.querySelectorAll('[filter="url(#' + old + ')"]').forEach((n) => n.setAttribute('filter', 'url(#' + next + ')'));
        if (clone.getAttribute('aria-labelledby') === old) clone.setAttribute('aria-labelledby', next);
      });
      panel.appendChild(clone);
    });
  }

  let current = null;   // the open case study panel, or null for the main page
  let currentHash = '';

  function show(next, hash, animate) {
    if (next === current) return;
    const prev = current, prevHash = currentHash;
    current = next; currentHash = hash;

    if (!animate) root.classList.add('no-anim');

    if (prev) { prev.classList.remove('is-active'); prev.inert = true; }
    if (next) { next.classList.add('is-active'); next.inert = false; next.scrollTop = 0; }
    root.classList.toggle('case-is-open', !!next);
    home.inert = !!next;      // keep keyboard focus and screen readers in the visible view

    if (next) {
      next.focus({ preventScroll: true });
    } else if (animate && prev) {
      const trigger = document.querySelector('.project__hit[href="' + prevHash + '"]');
      if (trigger) trigger.focus({ preventScroll: true });
    }

    if (!animate) {
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('no-anim')));
    }
  }

  const sync = (animate) => show(routes[location.hash] || null, routes[location.hash] ? location.hash : '', animate);

  window.addEventListener('hashchange', () => sync(true));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && current) location.hash = '#work';
  });

  sync(false);   // supports opening the page directly on a case study link
})();

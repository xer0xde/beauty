(() => {
  'use strict';
  // Animate position only: content remains visible even if scripting fails.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visit-enter');
        observer.unobserve(entry.target);
      });
    }, {threshold:0.12});
    const seen = new WeakSet();
    function observeNew() {
      document.querySelectorAll('.visit-copy,.visit-map').forEach(el=>{
        if (seen.has(el)) return;
        seen.add(el);
        observer.observe(el);
      });
    }
    observeNew();
    new MutationObserver(observeNew).observe(document.body,{childList:true,subtree:true});
  }
})();

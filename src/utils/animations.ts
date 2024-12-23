export function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('p, img, button');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--viewport-threshold')
          .trim()
      ),
    }
  );

  animatedElements.forEach((element) => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
  });
}
import { Router } from "@angular/router";

export function  scrollToSection(sectionId: string, router: Router, closeMenu?: () => void) {
  const locationUrl = window.location.pathname;

    // Check if we're already on the home page
    if (locationUrl === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Height of fixed header
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
      if (closeMenu) {
        closeMenu();
      }
    } else {
      router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerHeight = 80; // Height of fixed header
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
        if (closeMenu) {
          closeMenu();
        }
      });
    }
  }

const { createApp } = Vue;

createApp({
  data() {
    return {
      mobileMenuActive: false,
      activeSection: 'hero',
      skills: [
        {
          name: 'HTML',
          icon: 'fab fa-html5',
          category: 'frontend'
        },
        {
          name: 'CSS',
          icon: 'fab fa-css3-alt',
          category: 'frontend'
        },
        {
          name: 'JavaScript',
          icon: 'fab fa-js-square',
          category: 'frontend'
        },
        {
          name: 'Vue.js',
          icon: 'fab fa-vuejs',
          category: 'frontend'
        },
        {
          name: 'Python',
          icon: 'fab fa-python',
          category: 'backend'
        },
        {
          name: 'Java',
          icon: 'fab fa-java',
          category: 'backend'
        },
        {
          name: 'Groovy',
          icon: 'fas fa-code',
          category: 'automation'
        },
        {
          name: 'SQL',
          icon: 'fas fa-database',
          category: 'database'
        },
        {
          name: 'Firebase',
          icon: 'fas fa-fire',
          category: 'database'
        },
        {
          name: 'MongoDB',
          icon: 'fas fa-leaf',
          category: 'database'
        },
        {
          name: 'PostgreSQL',
          icon: 'fas fa-elephant',
          category: 'database'
        },
        {
          name: 'Bootstrap',
          icon: 'fab fa-bootstrap',
          category: 'frontend'
        },
        {
          name: 'Git',
          icon: 'fab fa-git-alt',
          category: 'tools'
        },
        {
          name: 'Jenkins',
          icon: 'fab fa-jenkins',
          category: 'automation'
        },
        {
          name: 'Jira',
          icon: 'fab fa-jira',
          category: 'tools'
        },
        {
          name: 'QA Automation',
          icon: 'fas fa-robot',
          category: 'automation'
        },
        {
          name: 'Agile/Scrum',
          icon: 'fas fa-users',
          category: 'soft-skills'
        }
      ],
      experience: [
        {
          id: 1,
          title: 'Graduate Software Engineer',
          company: 'ITRS',
          duration: '2024 - Present',
          logo: 'images/itrslogo.jpg',
          achievements: [
            'Developed scalable software solutions addressing real-world problems',
            'Collaborated with cross-functional teams',
            'Wrote clean, efficient, and well-documented code',
            'Implemented automation solutions using Groovy and Jenkins pipelines',
            'Conducted QA testing and quality assurance processes'
          ]
        },
        {
          id: 2,
          title: 'Insights & Analytics Intern',
          company: 'Coca-Cola Beverages Philippines Inc.',
          duration: 'Mar - Jul 2024',
          logo: 'images/cola.logo.jpg',
          achievements: [
            'Conducted detailed analysis of sales trends and provided actionable insights',
            'Developed Python scripts for efficient data extraction',
            'Utilized advanced Excel to synthesize customer behavior data',
            'Collaborated with stakeholders using Jira for project management'
          ]
        },
        {
          id: 3,
          title: 'Product Management Intern',
          company: 'Shopee Philippines Inc.',
          duration: 'May - Sep 2023',
          logo: 'images/shopee.logo.png',
          achievements: [
            'Ensured successful User Acceptance Testing (UATs)',
            'Presented and explained features to stakeholders',
            'Developed training materials to streamline knowledge transfer',
            'Worked with cross-functional teams using Agile methodologies'
          ]
        }
      ],
      publications: [
        {
          id: 1,
          title: 'TinyFSL: Tiny Machine Learning for Filipino Sign Language',
          authors: 'Loben Klien Tipan, Alyanna Mari Abalos, Alyana Erin Bondoc, Justin Jarrett To, Joanna Pauline Rivera, Ann Franchesca Laguna, Edward Tighe',
          venue: 'Proceedings of the 38th Pacific Asia Conference on Language, Information and Computation (PACLIC 2024)',
          year: '2024',
          pages: '1504-1513',
          location: 'Tokyo, Japan',
          link: 'https://aclanthology.org/2024.paclic-1.148/',
          doi: 'https://aclanthology.org/2024.paclic-1.148/',
          featured: true
        },
        {
          id: 2,
          title: 'Filipino Sign Language Translation through Transfer Learning',
          authors: 'Loben Klien A Tipan, Alyanna Mari Abalos, Alyana Erin Bondoc, Justin Jarrett To, Joanna Pauline Rivera',
          venue: 'ACM Conference/Journal Name',
          year: '2024',
          pages: 'Page Range',
          location: 'Conference Location',
          link: 'https://dl.acm.org/doi/abs/10.1145/3711542.3711557',
          doi: '10.1145/3711542.3711557',
          featured: false
        }
      ],
      projects: [
        {
          id: 1,
          name: 'Harbor.ph',
          description: 'Full-stack events marketplace platform for the Philippines. Built with Vue.js, Bootstrap, and Firebase. Successfully launched with multiple public events.',
          image: 'images/harborph_ss.png',
          link: 'https://harbor.ph',
          technologies: ['Vue.js', 'Bootstrap', 'Firebase', 'JavaScript', 'CSS3'],
          featured: true
        },
        {
          id: 2,
          name: 'To-Do App',
          description: 'A modern task management application built with Vue.js and Tailwind CSS',
          image: 'images/under_construction_PNG.png',
          link: 'projects/todo.html',
          technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript']
        },
        {
          id: 3,
          name: 'Weather App',
          description: 'Real-time weather application with location-based forecasts',
          image: 'images/under_construction_PNG.png',
          link: 'projects/weather.html',
          technologies: ['Vue.js', 'API Integration', 'CSS3']
        },
        {
          id: 4,
          name: 'Sample Gallery',
          description: 'Responsive image gallery showcasing modern web design principles',
          image: 'images/under_construction_PNG.png',
          link: 'projects/blog-try.html',
          technologies: ['HTML5', 'CSS3', 'JavaScript']
        },
        {
          id: 5,
          name: 'Expense Logger',
          description: 'Personal finance tracking application with data visualization',
          image: 'images/under_construction_PNG.png',
          link: 'projects/expenselogger.html',
          technologies: ['JavaScript', 'jQuery', 'Local Storage']
        },
        {
          id: 6,
          name: 'Profile Page',
          description: 'Dynamic personal profile page with interactive elements',
          image: 'images/under_construction_PNG.png',
          link: 'projects/profile.html',
          technologies: ['HTML5', 'CSS3', 'JavaScript']
        }
      ],
      contactLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/lobentipan/',
          icon: 'fab fa-linkedin'
        },
        {
          name: 'Email',
          url: 'mailto:lobentipan24@gmail.com',
          icon: 'fas fa-envelope'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/LobenKT',
          icon: 'fab fa-github'
        }
      ]
    }
  },
  
  computed: {
    // Group skills by category for better organization
    skillsByCategory() {
      const categories = {};
      this.skills.forEach(skill => {
        if (!categories[skill.category]) {
          categories[skill.category] = [];
        }
        categories[skill.category].push(skill);
      });
      return categories;
    },
    
    // Get featured projects (like Harbor.ph)
    featuredProjects() {
      return this.projects.filter(project => project.featured);
    },
    
    // Get regular projects
    regularProjects() {
      return this.projects.filter(project => !project.featured);
    },
    
    // Get featured publications
    featuredPublications() {
      return this.publications.filter(pub => pub.featured);
    },
    
    // Get regular publications
    regularPublications() {
      return this.publications.filter(pub => !pub.featured);
    }
  },
  
  methods: {
    // Smooth scroll to section with enhanced behavior
    scrollToSection(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80; // Account for fixed elements
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update active section
        this.activeSection = sectionId;
        
        // Close mobile menu after clicking a link
        if (window.innerWidth < 992) {
          this.toggleMobileMenu();
        }
      }
    },

    // Enhanced mobile menu toggle
    toggleMobileMenu() {
      this.mobileMenuActive = !this.mobileMenuActive;
      
      // Prevent scrolling when menu is open
      if (this.mobileMenuActive) {
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
      } else {
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
      }
      
      // Update ARIA attributes
      const toggleButton = document.querySelector('.mobile-nav-toggle');
      if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', this.mobileMenuActive);
      }
    },

    // Throttled scroll handler for better performance
    handleScroll: (() => {
      let ticking = false;
      
      return function() {
        if (!ticking) {
          requestAnimationFrame(() => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionId = section.getAttribute('id');

              if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.activeSection = sectionId;
              }
            });
            
            ticking = false;
          });
          ticking = true;
        }
      }.bind(this);
    })(),



    // Enhanced intersection observer for animations
    setupAnimations() {
      const options = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for child elements
            const animatedChildren = entry.target.querySelectorAll('.animate-child');
            animatedChildren.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * 100);
            });
          }
        });
      }, options);

      document.querySelectorAll('.animate-section').forEach(section => {
        observer.observe(section);
      });
    },

    // Handle keyboard navigation
    handleKeyboard(e) {
      if (e.key === 'Escape' && this.mobileMenuActive) {
        this.toggleMobileMenu();
      }
    },

    // Enhanced image preloading with loading feedback
    preloadImages() {
      const criticalImages = [
        'images/gradpic.JPG',
        'images/itrslogo.jpg',
        'images/cola.logo.jpg',
        'images/shopee.logo.png',
        'images/harborph_ss.png'
      ];

      let loadedCount = 0;
      const totalImages = criticalImages.length;

      return new Promise((resolve) => {
        if (totalImages === 0) {
          resolve();
          return;
        }

        criticalImages.forEach(src => {
          const img = new Image();
          img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              resolve();
            }
          };
          img.src = src;
        });
      });
    },

    // Hide loading screen
    hideLoadingScreen() {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }
      document.body.classList.add('loaded');
    },

    // Get category display name
    getCategoryName(category) {
      const categoryNames = {
        'frontend': 'Frontend Development',
        'backend': 'Backend Development',
        'database': 'Database',
        'automation': 'Automation & QA',
        'tools': 'Development Tools',
        'soft-skills': 'Soft Skills'
      };
      return categoryNames[category] || category;
    },

    // Add error handling for images
    handleImageError(event) {
      console.warn('Image failed to load:', event.target.src);
      // You could set a fallback image here
      // event.target.src = 'images/placeholder.jpg';
    },

    // Lazy load images when they come into view
    setupLazyLoading() {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    }
  },

  async mounted() {
    // Show loading screen initially
    document.body.classList.add('loading');

    try {
      // Initialize functionality
      this.setupAnimations();
      this.setupLazyLoading();
      
      // Preload critical images
      await this.preloadImages();
      
      // Add event listeners
      window.addEventListener('scroll', this.handleScroll);
      document.addEventListener('keydown', this.handleKeyboard);

      // Set initial active section
      this.handleScroll();



      // Small delay to ensure smooth transition
      setTimeout(() => {
        this.hideLoadingScreen();
      }, 300);

    } catch (error) {
      console.warn('Some images failed to load, but continuing...', error);
      // Hide loading screen even if some images fail
      setTimeout(() => {
        this.hideLoadingScreen();
      }, 1000);
    }
  },

  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.handleKeyboard);
  }
}).mount('#app');

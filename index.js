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
          level: 90,
          category: 'frontend'
        },
        {
          name: 'CSS',
          icon: 'fab fa-css3-alt',
          level: 85,
          category: 'frontend'
        },
        {
          name: 'JavaScript',
          icon: 'fab fa-js-square',
          level: 80,
          category: 'frontend'
        },
        {
          name: 'Vue.js',
          icon: 'fab fa-vuejs',
          level: 85,
          category: 'frontend'
        },
        {
          name: 'Python',
          icon: 'fab fa-python',
          level: 80,
          category: 'backend'
        },
        {
          name: 'Java',
          icon: 'fab fa-java',
          level: 75,
          category: 'backend'
        },
        {
          name: 'Groovy',
          icon: 'fas fa-code',
          level: 70,
          category: 'automation'
        },
        {
          name: 'SQL',
          icon: 'fas fa-database',
          level: 85,
          category: 'database'
        },
        {
          name: 'Firebase',
          icon: 'fas fa-fire',
          level: 80,
          category: 'backend'
        },
        {
          name: 'Bootstrap',
          icon: 'fab fa-bootstrap',
          level: 85,
          category: 'frontend'
        },
        {
          name: 'Git',
          icon: 'fab fa-git-alt',
          level: 80,
          category: 'tools'
        },
        {
          name: 'Jenkins',
          icon: 'fab fa-jenkins',
          level: 75,
          category: 'automation'
        },
        {
          name: 'Jira',
          icon: 'fab fa-jira',
          level: 85,
          category: 'tools'
        },
        {
          name: 'QA Automation',
          icon: 'fas fa-robot',
          level: 80,
          category: 'automation'
        },
        {
          name: 'Agile/Scrum',
          icon: 'fas fa-users',
          level: 85,
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

    // Handle scroll events for active section tracking
    handleScroll() {
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
    },

    // Animate skill bars on scroll
    animateSkillBars() {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.width = entry.target.style.width || '0%';
              setTimeout(() => {
                entry.target.style.transition = 'width 1.5s ease-in-out';
                entry.target.style.width = entry.target.getAttribute('data-width') || '0%';
              }, 200);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        observer.observe(bar);
      });
    },

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

    // Preload critical images
    preloadImages() {
      const criticalImages = [
        'images/profile_new2.jpg',
        'images/itrslogo.jpg',
        'images/cola.logo.jpg',
        'images/shopee.logo.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
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
    }
  },

  mounted() {
    // Initialize all functionality
    this.setupAnimations();
    this.animateSkillBars();
    this.preloadImages();

    // Add event listeners
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('keydown', this.handleKeyboard);

    // Set initial active section
    this.handleScroll();

    // Add loading animation
    document.body.classList.add('loaded');

    // Initialize skill bar data attributes
    this.$nextTick(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const percentage = bar.style.width;
        bar.setAttribute('data-width', percentage);
        bar.style.width = '0%';
      });
    });
  },

  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.handleKeyboard);
  }
}).mount('#app');

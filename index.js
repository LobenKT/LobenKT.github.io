const { createApp } = Vue;

createApp({
  data() {
    return {
      mobileMenuActive: false,
      activeSection: 'hero',
      backgroundAnimations: {
        intervals: [],
        elements: []
      },
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
          name: 'Big 3 University Quiz',
          description: 'Viral Filipino university personality quiz with 15 questions, university-specific emojis, and shareable Instagram Story cards. Features UP, ADMU, and DLSU stereotypes with authentic Filipino university culture.',
          image: null,
          link: 'quiz.html',
          technologies: ['Vue.js', 'Canvas API', 'Bootstrap', 'JavaScript', 'CSS3'],
          featured: true
        },
        {
          id: 2,
          name: 'Harbor.ph',
          description: 'Full-stack events marketplace platform for the Philippines. Built with Vue.js, Bootstrap, and Firebase. Successfully launched with multiple public events.',
          image: 'images/harborph_ss.png',
          link: 'https://harbor.ph',
          technologies: ['Vue.js', 'Bootstrap', 'Firebase', 'JavaScript', 'CSS3'],
          featured: true
        },
        {
          id: 3,
          name: 'Letter-Link Battle',
          description: 'Multiplayer word game where players compete in real-time. Players choose starting and ending letters, then race to find valid words within those bounds. Features Firebase integration for live gameplay and competitive scoring system.',
          image: null,
          link: 'projects/word-battle.html',
          technologies: ['JavaScript', 'Firebase', 'Real-time Database', 'CSS3']
        },
        {
          id: 4,
          name: 'To-Do List Manager',
          description: 'Clean and intuitive task management application with add, edit, and delete functionality. Built with Vue.js for reactive updates and styled with Tailwind CSS for a modern, responsive interface.',
          image: null,
          link: 'projects/todo.html',
          technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript']
        },
        {
          id: 5,
          name: 'Weather Dashboard',
          description: 'Real-time weather application displaying current conditions for Manila. Integrates with OpenWeatherMap API to show temperature, humidity, wind speed, and weather icons with a beautiful gradient interface.',
          image: null,
          link: 'projects/weather.html',
          technologies: ['Vue.js', 'OpenWeatherMap API', 'Tailwind CSS']
        },
        {
          id: 6,
          name: 'Expense Logger',
          description: 'Personal finance tracking tool for logging daily expenses. Features category selection, date tracking, and dynamic expense list management. Built with jQuery for DOM manipulation and local data handling.',
          image: null,
          link: 'projects/expenselogger.html',
          technologies: ['JavaScript', 'jQuery', 'CSS3']
        },
        {
          id: 7,
          name: 'Event Marketplace UI',
          description: 'Modern event listing interface showcasing responsive design principles. Features event banners, host information, and clean typography. Demonstrates proficiency in CSS layout and visual hierarchy.',
          image: null,
          link: 'projects/harbor.html',
          technologies: ['HTML5', 'CSS3', 'Responsive Design']
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
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
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
    },

    // Dynamic Background Animation System
    initBackgroundAnimations() {
      const heroBackground = document.getElementById('hero-background');
      if (!heroBackground) return;
      
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // Don't start animations if user prefers reduced motion
      }

      // Code snippets pool
      const codeSnippets = [
        'function()', 'const', 'let', 'var', 'return', 'import', 'export',
        'class', 'async', 'await', 'if', 'else', 'for', 'while', 'try',
        'catch', 'new', 'this', 'super', 'extends', 'static', 'public',
        'private', 'protected', '{ }', '[ ]', '( )', '<>', '/>', '&&', '||',
        '=>', '===', '!==', '++', '--', '+=', '-=', '*=', '/=', '??', '?.', 
        'null', 'undefined', 'true', 'false', 'typeof', 'instanceof'
      ];

      // Binary sequences
      const binarySequences = [
        '01001', '11010', '00110', '10101', '01110', '11001', '00101',
        '10011', '01100', '11100', '00011', '10110', '01010', '11111'
      ];

      // Create code snippet
      const createCodeSnippet = () => {
        const element = document.createElement('div');
        element.className = 'bg-element code-snippet';
        element.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random positioning
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.fontSize = (12 + Math.random() * 8) + 'px';
        
        heroBackground.appendChild(element);
        this.backgroundAnimations.elements.push(element);
        
        // Animate
        this.animateElement(element, 'float');
        
        // Remove after animation
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
            const index = this.backgroundAnimations.elements.indexOf(element);
            if (index > -1) {
              this.backgroundAnimations.elements.splice(index, 1);
            }
          }
        }, 15000 + Math.random() * 10000);
      };

      // Create binary rain
      const createBinaryRain = () => {
        const element = document.createElement('div');
        element.className = 'bg-element binary-element';
        element.textContent = binarySequences[Math.floor(Math.random() * binarySequences.length)];
        
        element.style.left = Math.random() * 100 + '%';
        element.style.top = '-10%';
        element.style.fontSize = (10 + Math.random() * 4) + 'px';
        
        heroBackground.appendChild(element);
        this.backgroundAnimations.elements.push(element);
        
        // Animate downward
        this.animateElement(element, 'rain');
        
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
            const index = this.backgroundAnimations.elements.indexOf(element);
            if (index > -1) {
              this.backgroundAnimations.elements.splice(index, 1);
            }
          }
        }, 12000);
      };

      // Create typing cursor
      const createTypingCursor = () => {
        const element = document.createElement('div');
        element.className = 'bg-element typing-cursor';
        element.textContent = '|';
        
        element.style.left = Math.random() * 90 + '%';
        element.style.top = Math.random() * 90 + '%';
        element.style.fontSize = (16 + Math.random() * 8) + 'px';
        
        heroBackground.appendChild(element);
        this.backgroundAnimations.elements.push(element);
        
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
            const index = this.backgroundAnimations.elements.indexOf(element);
            if (index > -1) {
              this.backgroundAnimations.elements.splice(index, 1);
            }
          }
        }, 8000 + Math.random() * 5000);
      };

      // Create typing effect
      const createTypingEffect = () => {
        const phrases = [
          'console.log("Hello World");',
          'npm install react',
          'git commit -m "fix bug"',
          'const app = new Vue();',
          'python manage.py runserver',
          'docker build -t myapp .',
          'SELECT * FROM users;',
          'function fibonacci(n) {',
          'import { useState } from "react";'
        ];
        
        const element = document.createElement('div');
        element.className = 'bg-element typing-text';
        
        element.style.left = Math.random() * 70 + '%';
        element.style.top = Math.random() * 80 + '%';
        element.style.fontSize = (11 + Math.random() * 3) + 'px';
        
        heroBackground.appendChild(element);
        this.backgroundAnimations.elements.push(element);
        
        // Typing animation
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        let i = 0;
        const typeInterval = setInterval(() => {
          element.textContent = phrase.substring(0, i);
          i++;
          if (i > phrase.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
              if (element.parentNode) {
                element.parentNode.removeChild(element);
                const index = this.backgroundAnimations.elements.indexOf(element);
                if (index > -1) {
                  this.backgroundAnimations.elements.splice(index, 1);
                }
              }
            }, 3000);
          }
        }, 100 + Math.random() * 100);
      };

      // Create geometric shape
      const createGeometricShape = () => {
        const shapes = ['square', 'circle', 'triangle'];
        const element = document.createElement('div');
        element.className = `bg-element tech-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
        
        const size = 20 + Math.random() * 30;
        element.style.width = size + 'px';
        element.style.height = size + 'px';
        element.style.left = Math.random() * 95 + '%';
        element.style.top = Math.random() * 95 + '%';
        
        heroBackground.appendChild(element);
        this.backgroundAnimations.elements.push(element);
        
        this.animateElement(element, 'geometric');
        
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
            const index = this.backgroundAnimations.elements.indexOf(element);
            if (index > -1) {
              this.backgroundAnimations.elements.splice(index, 1);
            }
          }
        }, 20000 + Math.random() * 10000);
      };

      // Adjust intervals based on screen size and performance
      const isMobile = window.innerWidth < 768;
      const multiplier = isMobile ? 2 : 1; // Slower on mobile for performance
      
      // Start intervals
      this.backgroundAnimations.intervals = [
        setInterval(createCodeSnippet, (2000 + Math.random() * 3000) * multiplier),
        setInterval(createBinaryRain, (4000 + Math.random() * 2000) * multiplier),
        setInterval(createTypingCursor, (6000 + Math.random() * 4000) * multiplier),
        setInterval(createTypingEffect, (8000 + Math.random() * 5000) * multiplier),
        setInterval(createGeometricShape, (10000 + Math.random() * 8000) * multiplier)
      ];
      
      // Limit total elements for performance
      setInterval(() => {
        if (this.backgroundAnimations.elements.length > 20) {
          const oldestElement = this.backgroundAnimations.elements.shift();
          if (oldestElement && oldestElement.parentNode) {
            oldestElement.parentNode.removeChild(oldestElement);
          }
        }
      }, 5000);
    },

    // Animate elements
    animateElement(element, type) {
      const duration = 15000 + Math.random() * 10000;
      
      switch(type) {
        case 'float':
          element.style.animation = `codeFloat ${duration}ms ease-in-out infinite`;
          break;
        case 'rain':
          element.style.animation = `binaryRain ${12000}ms linear forwards`;
          break;
        case 'geometric':
          element.style.animation = `geometricFloat ${duration}ms ease-in-out infinite`;
          break;
      }
    },

    // Clean up background animations
    cleanupBackgroundAnimations() {
      // Clear intervals
      this.backgroundAnimations.intervals.forEach(interval => {
        clearInterval(interval);
      });
      this.backgroundAnimations.intervals = [];
      
      // Remove elements
      this.backgroundAnimations.elements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      this.backgroundAnimations.elements = [];
    }
  },

  async mounted() {
    try {
      // Initialize functionality
      this.setupAnimations();
      this.setupLazyLoading();
      
      // Initialize dynamic background animations
      setTimeout(() => {
        this.initBackgroundAnimations();
      }, 1000); // Delay to ensure DOM is ready
      
      // Add event listeners
      window.addEventListener('scroll', this.handleScroll);
      document.addEventListener('keydown', this.handleKeyboard);

      // Set initial active section
      this.handleScroll();

      // Preload critical images in background
      this.preloadImages().then(() => {
        console.log('Images preloaded successfully');
      }).catch(error => {
        console.warn('Some images failed to preload:', error);
      });

      // Mark body as loaded
      document.body.classList.add('loaded');

    } catch (error) {
      console.warn('Initialization error:', error);
      // Mark body as loaded even if there's an error
      document.body.classList.add('loaded');
    }
  },

  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.handleKeyboard);
    
    // Clean up background animations
    this.cleanupBackgroundAnimations();
  }
}).mount('#app');

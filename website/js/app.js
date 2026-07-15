const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      currentPage: 'home',
      isDarkMode: false
    }
  },
  computed: {
    showNavbar() {
      return this.currentPage !== 'home';
    }
  },
  methods: {
    navigateTo(page) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Close mobile menu if open
      const mobileMenu = document.querySelector('.nav-links');
      if (mobileMenu && mobileMenu.classList.contains('mobile-open')) {
        mobileMenu.classList.remove('mobile-open');
      }
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    },
    checkTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.body.classList.add('dark-mode');
      }
    }
  },
  mounted() {
    this.checkTheme();
  }
});

// Register components
app.component('navbar-component', NavbarComponent);
app.component('home-page', HomePage);
app.component('about-page', AboutPage);
app.component('skills-page', SkillsPage);
app.component('projects-page', ProjectsPage);
app.component('achievements-page', AchievementsPage);
app.component('resume-page', ResumePage);
app.component('contact-page', ContactPage);

// Mount app
app.mount('#app');
const NavbarComponent = {
  template: `
    <nav class="navbar">
     <div class="nav-container">
        <div class="brand" @click="$emit('navigate', 'home')">
          <img src="images/logo.jpg" alt="BETIX Logo" class="brand-logo" />
          <span class="brand-text">Kato Solomon</span>
        </div>
        
        <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
          <button 
            v-for="page in pages" 
            :key="page.id"
            class="nav-link"
            :class="{ active: currentPage === page.id }"
            @click="navigate(page.id)"
          >
            {{ page.name }}
          </button>
        </div>
        
        <div class="nav-actions">
          <button class="theme-btn" @click="$emit('toggle-theme')" :title="isDarkMode ? 'Light Mode' : 'Dark Mode'">
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          <button class="hamburger-btn" @click="toggleMobileMenu">
            <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </div>
      </div>
    </nav>
  `,
  props: {
    currentPage: String,
    isDarkMode: Boolean
  },
  emits: ['navigate', 'toggle-theme'],
  data() {
    return {
      mobileMenuOpen: false,
      pages: [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'achievements', name: 'Achievements' },
        { id: 'resume', name: 'Resume' },
        { id: 'contact', name: 'Contact' }
      ]
    }
  },
  methods: {
    navigate(pageId) {
      this.$emit('navigate', pageId);
      this.mobileMenuOpen = false;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
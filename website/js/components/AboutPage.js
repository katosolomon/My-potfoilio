const AboutPage = {
  template: `
    <section class="about-page container fade-in-up">
      <div class="about-header">
        <h2>About solomon</h2>
        <p>Passionate about creating beautiful and reaponsive websitea and systems and finding vurenabilities in systems before the bad people do!</p>
      </div>
      
      <div class="about-content">
        <img 
          :src="profileImage" 
          alt="BETIX Profile" 
          class="profile-image"
          @error="handleImageError"
        >
        
        <div class="about-text">
          <h3>Hi, I'm KATO SOLOMON</h3>
          <p>
            A passionate software engineer with expertise in full-stack development. I specialize in building 
            scalable web applications using modern technologies, and I bring a strong security mindset to every project.
          </p>
          <p>
            With years of hands-on experience, I have helped clients turn ideas into robust digital solutions while 
            also identifying vulnerabilities and improving application security.
          </p>
          <p>
            I represented my school at National Science Week 2026, presenting a technology and cybersecurity project 
            to judges and peers nationwide.
          </p>
          
          <div class="services-grid">
            <div class="service-card">
              <i class="fas fa-laptop-code"></i>
              <h4>Freelance</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">Available for hire</p>
            </div>
            <div class="service-card">
              <i class="fas fa-code"></i>
              <h4>Software Developer</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">Full-stack solutions</p>
            </div>
            <div class="service-card">
              <i class="fas fa-desktop"></i>
              <h4>Frontend Dev</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">UI/UX expert</p>
            </div>
            <div class="service-card">
              <i class="fas fa-server"></i>
              <h4>Backend Dev</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">API & database</p>
            </div>
            <div class="service-card">
              <i class="fas fa-sitemap"></i>
              <h4>Finding vurenabilities and Pentration Testing</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">Ethical Hacking</p>
            </div>
           <div class="service-card">
  <i class="fas fa-robot"></i>
  <h4>Digital Advertising</h4>
  <p style="font-size: 0.9rem; color: var(--text-gray);">Voice Artist</p>
</div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      profileImage: 'images/pic.jpg'
    }
  },
  methods: {
    handleImageError(e) {
      // Fallback if image doesn't exist
      e.target.style.display = 'none';
    }
  }
};
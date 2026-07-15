const ResumePage = {
  template: `
    <section class="resume-page container fade-in-up">
      <div class="resume-header">
        <h2>My Certificates & Achievements</h2>
        <p style="color: var(--text-gray);">Professional certifications that validate my expertise</p>
      </div>
      
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Loading certificates...</p>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <p>{{ error }}</p>
        <button class="btn btn-outline" @click="loadCertificates">Retry</button>
      </div>
      
      <!-- Certificates Grid -->
      <div v-else class="certificate-grid">
        <div 
          v-for="cert in certificates" 
          :key="cert.id" 
          class="certificate-card"
          :class="{ 'featured': cert.featured }"
        >
          <div class="certificate-header">
            <div class="certificate-icon">
              <i :class="getCertificateIcon(cert.category)"></i>
            </div>
            <div v-if="cert.featured" class="featured-badge">
              <i class="fas fa-star"></i> Featured
            </div>
          </div>
          
          <div class="certificate-body">
            <h4>{{ cert.title }}</h4>
            <p class="issuer">
              <i class="fas fa-building"></i> {{ cert.issuer }}
            </p>
            <p class="date">
              <i class="fas fa-calendar-check"></i> {{ formatDate(cert.date) }}
            </p>
            <p v-if="cert.description" class="description">
              {{ cert.description }}
            </p>
            
            <!-- Skills Tags -->
            <div v-if="cert.skills && cert.skills.length" class="cert-skills">
              <span 
                v-for="skill in cert.skills" 
                :key="skill" 
                class="skill-tag"
              >
                {{ skill,  }}
              </span>
            </div>
          </div>
          
          <div class="certificate-footer">
            <a 
              v-if="cert.verifyUrl" 
              :href="cert.verifyUrl" 
              class="btn btn-outline btn-sm" 
              target="_blank"
            >
              <i class="fas fa-check-circle"></i> Verify
            </a>
            <span v-if="cert.credentialId" class="credential-id">
              ID: {{ cert.credentialId }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- No Certificates State -->
      <div v-if="!loading && !error && certificates.length === 0" class="empty-state">
        <i class="fas fa-certificate"></i>
        <p>No certificates found. Add them to the certificates.json file.</p>
      </div>
      
      <!-- Download CV Section -->
      <div class="download-cv">
        <h3>Want the full picture?</h3>
        <p style="color: var(--text-gray); margin-bottom: 20px;">
          Download my complete CV with work experience, education, and more details
        </p>
        <button class="btn download-btn" @click="downloadCV">
          <i class="fas fa-download"></i> Download Complete CV (PDF)
        </button>
      </div>
    </section>
  `,
  data() {
    return {
      certificates: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    this.loadCertificates();
  },
  methods: {
    async loadCertificates() {
      this.loading = true;
      this.error = null;
      
      try {
        // Fetch certificates from JSON file
        const response = await fetch('js/data/certificates.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        this.certificates = data;
        
      } catch (error) {
        console.error('Error loading certificates:', error);
        
        // Check if it's a file:// protocol issue
        if (window.location.protocol === 'file:') {
          this.error = 'Cannot load JSON file with file:// protocol. Please use a local server. See console for details.';
          console.warn('Tip: Use Live Server in VS Code, or run: python -m http.server 8000');
        } else {
          this.error = 'Failed to load certificates. Please check if certificates.json exists and is valid.';
        }
      } finally {
        this.loading = false;
      }
    },
    
    getCertificateIcon(category) {
      const icons = {
        'cloud': 'fas fa-cloud',
        'web': 'fas fa-globe',
        'frontend': 'fas fa-laptop-code',
        'backend': 'fas fa-server',
        'database': 'fas fa-database',
        'mobile': 'fas fa-mobile-alt',
        'devops': 'fas fa-cogs',
        'ai': 'fas fa-brain',
        'security': 'fas fa-shield-alt',
        'default': 'fas fa-certificate'
      };
      return icons[category] || icons.default;
    },
    
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    },
    
    downloadCV() {
      // Try to download CV file
      const cvUrl = 'files/katosolomon.pdf';
      
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'katosolomon.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // If file doesn't exist, show helpful message
      setTimeout(() => {
        console.log('CV download attempted. If it didn\'t work, place your CV at: ' + cvUrl);
      }, 100);
    }
  }
};
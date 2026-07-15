const ContactPage = {
  template: `
    <section class="contact-page container fade-in-up">
      <div class="contact-header">
        <h2>Get In Touch</h2>
        <p style="color: var(--text-gray);">Hand me that difficult project.</p>
      </div>
      
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Connect With Me</h3>
          <p>
            <i class="fas fa-envelope"></i>
            <strong>Email:</strong> wamalasolomon@gmail.com
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            <strong>Location:</strong> Available Worldwide
          </p>
          <p>
            <i class="fas fa-clock"></i>
            <strong>Response Time:</strong> Within 24 hours
          </p>
          
          <div class="social-links">
            <a v-for="social in socialLinks" 
               :key="social.name" 
               :href="social.url" 
               class="social-link"
               target="_blank"
               :title="social.name">
              <i :class="social.icon"></i>
              {{ social.name }}
            </a>
          </div>
        </div>
        
        <form class="contact-form" action="https://formsubmit.co/wamalasolomon@gmail.com" method="POST" target="_blank" @submit="submitForm">
          <input type="hidden" name="_subject" value="New message from portfolio contact form" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_replyto" :value="formData.email" />
          <div class="form-group">
            <label for="name">Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              v-model="formData.name" 
              required 
              placeholder="Your name"
            >
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              v-model="formData.email" 
              required 
              placeholder="wamalasolomon@gmail.com"
            >
          </div>
          <div class="form-group">
            <label for="message">Message *</label>
            <textarea 
              id="message" 
              name="message"
              v-model="formData.message" 
              required 
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" class="btn">
            <i class="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  `,
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      socialLinks: [
        { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/0707737194' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/katosolomon/' },
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/katosolomon/' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/diorrlyrics1/' },
        { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@handsomediorlyrics' },
        { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com/katorigman' },
        { name: 'X (Twitter)', icon: 'fab fa-x-twitter', url: '#' },
         { name: 'Discord', icon: 'Discord', url: 'https://fiverr.com/katosolomon' },
           { name: 'Youtube', icon: 'fab fa-youtube', url: 'https://youtube.com/katosolomon' },
      ]
    }
  },
  methods: {
    submitForm(event) {
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        event.preventDefault();
        alert('Please fill all required fields.');
      }
    }
  }
};
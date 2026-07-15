const ProjectsPage = {
  template: `
    <section class="projects-page container fade-in-up">
      <div class="projects-header">
        <h2>Projects</h2>
        <p style="color: var(--text-gray);">Some of my recent work</p>
      </div>
      
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <i :class="project.icon"></i>
          </div>
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a :href="project.github" class="btn btn-outline" target="_blank">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a :href="project.demo" class="btn" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'Full-featured online store with payment integration and admin dashboard',
          icon: 'fas fa-shopping-cart',
          technologies: ['Vue 3', 'Laravel', 'MySQL', 'Tailwind CSS'],
          github: 'https://github.com/Abbey086/',
          demo: 'https://demo.example.com'
        },
        {
          id: 2,
          title: 'Online Assignment Submission System',
          description: 'Full system for student and lecture assginment submission',
          icon: 'fas fa-tasks',
          technologies: ['HTML', 'CSS','JavaScript','React', 'Express.js', 'PHP', 'github'],
          github: '#',
          demo: 'https://demo.example.com'
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          description: 'Interactive weather application with maps and forecasts',
          icon: 'fas fa-cloud-sun',
          technologies: ['JavaScript', 'OpenWeather API'],
          github: '#',
          demo: 'https://demo.example.com'
        }
      ]
    }
  }
};
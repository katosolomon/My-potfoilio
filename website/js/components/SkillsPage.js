const SkillsPage = {
  template: `
    <section class="skills-page container fade-in-up">
      <div class="skills-header">
        <h2>Skills & Technologies</h2>
        <p style="color: var(--text-gray);">Technologies I work with</p>
      </div>
      
      <div v-for="category in skillCategories" :key="category.name" class="skills-category">
        <h3>
          <i :class="category.icon"></i>
          {{ category.name }}
        </h3>
        <div class="skills-list">
          <div 
            v-for="skill in category.skills" 
            :key="skill" 
            class="skill-item"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      skillCategories: [
        {
          name: 'Frontend',
          icon: 'fas fa-desktop',
          skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Vanilla JavaScript', 'Vue 3', 'React', ]
        },
        {
          name: 'Backend',
          icon: 'fas fa-server',
          skills: ['PHP', 'Laravel', 'Express.js', 'Node.js', 'REST APIs', 'GraphQL']
        },
        {
          name: 'Database',
          icon: 'fas fa-database',
          skills: ['MySQL', 'PostgreSQL', 'MongoDB',  'Firebase', 'Supabase']
        },
        {
          name: 'DevOps & Tools',
          icon: 'fas fa-tools',
          skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Nginx', 'Apache','Artificial Intelligence (AI)']
        }
      ]
    }
  }
};
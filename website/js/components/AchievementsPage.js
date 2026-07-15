const AchievementsPage = {
  template: `
    <section class="achievements-page container fade-in-up">
      <div class="achievements-header">
        <p class="section-eyebrow">Highlights</p>
        <h2>Achievements & Milestones</h2>
        <p>These milestones reflect my growth across development, security, and client delivery.</p>
      </div>

      <div class="achievement-highlights">
        <div v-for="stat in stats" :key="stat.label" class="achievement-highlight-card">
          <div class="achievement-icon">
            <i :class="stat.icon"></i>
          </div>
          <div>
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div class="achievement-grid">
        <div v-for="achievement in achievements" :key="achievement.id" class="achievement-card">
          <div class="achievement-badge">{{ achievement.year }}</div>
          <div class="achievement-content">
            <div class="achievement-icon">
              <i :class="achievement.icon"></i>
            </div>
            <h3>{{ achievement.title }}</h3>
            <p>{{ achievement.description }}</p>
            <div class="achievement-tags">
              <span v-for="tag in achievement.tags" :key="tag" class="achievement-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      stats: [
        { value: '4+', label: 'Years of experience', icon: 'fas fa-calendar-check' },
        { value: '30+', label: 'Projects delivered', icon: 'fas fa-rocket' },
        { value: '130+', label: 'Happy clients', icon: 'fas fa-smile' },
        { value: '2', label: 'Professional certifications', icon: 'fas fa-certificate' }
      ],
      achievements: [
        {
          id: 1,
          year: '2025',
          title: 'Completed UCE with strong results',
          description: 'Finished the Uganda Certificate of Education with strong performance in mathematics, science, and computer studies.',
          icon: 'fas fa-graduation-cap',
          tags: ['Education', 'Academic Achievement']
        },
        {
          id: 2,
          year: '2026',
          title: 'National Science Week participation',
          description: 'Represented my school at National Science Week 2026, presenting a technology and cybersecurity project to industry judges and peers.',
          icon: 'fas fa-atom',
          tags: ['Science Week', 'Presentation', 'Innovation']
        },
        {
          id: 3,
          year: '2027',
          title: 'Completed Certificate in Computer Science',
          description: 'Earned a professional certificate in Computer Science with practical skills in software development, networks, and systems analysis.',
          icon: 'fas fa-laptop-code',
          tags: ['Programming', 'Web Development', 'IT Skills']
        },
        {
          id: 4,
          year: '2025',
          title: 'Grew skills in ethical hacking and security testing',
          description: 'Built real experience in vulnerability discovery, secure coding practices, and performing penetration testing responsibly.',
          icon: 'fas fa-shield-alt',
          tags: ['Security', 'Penetration Testing', 'Ethical Hacking']
        }
      ]
    };
  }
};

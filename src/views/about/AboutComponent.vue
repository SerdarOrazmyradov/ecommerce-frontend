<template>
  <div class="our-story">
    <!-- Animated title -->
    <h2 class="title" @mouseover="hoverTitle = true" @mouseleave="hoverTitle = false">
      <span :class="{ 'text-pop': hoverTitle }">Our Story</span>
    </h2>

    <!-- Main content with fade-in effect -->
    <div class="content" :class="{ 'fade-in': showContent }">
      <p class="story-text">
        Founded in 2015, we started in South Asia to provide a unique shopping experience 
        about what customers can expect throughout. In accordance with our values, we offer 
        a range of interesting products across our services.
      </p>
      
      <p class="highlight-text">
        Eric Marks has served over 3 million customers across the region, offering more than 
        1 billion products and growing rapidly.
      </p>
      
      <p>
        Eric Marks offers diverse selections in categories designed to serve consumers.
      </p>
    </div>

    <!-- Stats with counter animation using vue-number-animation -->
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.value" class="stat-item">
        <vue-number-animation
          :from="0"
          :to="stat.value"
          :format="formatNumber"
          :duration="1000"
          class="stat-number"
        />
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Team members with hover effects -->
    <div class="team-grid">
      <div 
        v-for="member in team" 
        :key="member.name"
        class="team-member"
        @mouseover="hoverMember = member.name"
        @mouseleave="hoverMember = ''"
      >
        <div class="member-photo" :style="{ backgroundImage: `url(${member.photo})` }">
          <div class="social-icon" v-if="hoverMember === member.name">
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
        <h3>{{ member.name }}</h3>
        <p>{{ member.position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueNumberAnimation from 'vue-number-animation';

export default {
  components: { VueNumberAnimation },
  data() {
    return {
      hoverTitle: false,
      showContent: false,
      hoverMember: '',
      stats: [
        { value: 10500, label: "Settles online on site" },
        { value: 33000, label: "Maternity Pharmaceuticals" },
        { value: 45500, label: "Customer online in over site" },
        { value: 25000, label: "Arred great walk in over site" }
      ],
      team: [
        { 
          name: "Tom Cruise", 
          position: "Founder & Chairman",
          photo: "https://randomuser.me/api/portraits/men/1.jpg" 
        },
        { 
          name: "Emma Watson", 
          position: "Manager & Director",
          photo: "https://randomuser.me/api/portraits/women/1.jpg" 
        },
        { 
          name: "Will Smith", 
          position: "Executive Manager",
          photo: "https://randomuser.me/api/portraits/men/2.jpg" 
        }
      ]
    };
  },
  mounted() {
    // Trigger content animation after component mounts
    setTimeout(() => {
      this.showContent = true;
    }, 300);
  },
  methods: {
    formatNumber(value) {
      // Format numbers with commas
      return value.toLocaleString();
    }
  }
};
</script>

<style scoped>
.our-story {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #2c3e50;
}

.text-pop {
  display: inline-block;
  animation: pop 0.3s ease;
}

@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.content {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s, transform 0.8s;
  margin-bottom: 50px;
  line-height: 1.6;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.story-text {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.highlight-text {
  background-color: #f8f4e5;
  padding: 15px;
  border-left: 4px solid #f0ad4e;
  font-weight: 500;
  margin: 25px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin: 50px 0;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.team-member {
  text-align: center;
  padding: 20px;
  transition: all 0.3s;
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-photo {
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  position: relative;
  border: 3px solid #eee;
  transition: all 0.3s;
}

.team-member:hover .member-photo {
  border-color: #3498db;
}

.social-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #3498db;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: transform 0.3s;
}

.team-member:hover .social-icon {
  transform: scale(1);
}

.team-member h3 {
  margin: 10px 0 5px;
  font-size: 1.3rem;
}

.team-member p {
  color: #666;
  font-size: 0.9rem;
}
</style>
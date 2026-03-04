<script setup>
import EducationCard from './EducationCard.vue';
import uwiLogo from '../../assets/uwi-ch-logo.jpeg';
import salccLogo from '../../assets/salcc-logo.png';
import smcLogo from '../../assets/smc-logo.png';

const techStack = [
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776ab' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/f7df1e' },
  { name: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus/00599c' },
  { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/60a5fa' },
  { name: 'HTML/CSS', logo: 'https://cdn.simpleicons.org/html5/e34f26' },
  { name: 'Vue', logo: 'https://cdn.simpleicons.org/vuedotjs/42b883' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/3c873a' },
  { name: 'Flask', logo: 'https://cdn.simpleicons.org/flask/ffffff' },
  { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/38bdf8' },
  { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap/7952b3' },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/00ed64' },
  { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/00758f' },
  { name: 'PocketBase', logo: 'https://cdn.simpleicons.org/pocketbase/b7ff5a' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ed' },
  { name: 'Linux', logo: 'https://cdn.simpleicons.org/linux/fcc624' },
  { name: 'Git', logo: 'https://cdn.simpleicons.org/git/f05032' },
]

const education = [
    { slug: "uwi", logo: uwiLogo, school: "Universtiy of the West Indies", degree: "BSc in Computer Science with Economics", year: "2022"},
    { slug: "salcc", logo:salccLogo, school: "Sir Arthur Lewis Community College", degree: "CAPE (Pure Math, Physics, Chemistry)", year: "2018"},
    { slug: "smc", logo:smcLogo, school: "Saint Mary's College", degree: "10 CXC Subjects", year: "2016"}
]
</script>

<style scoped>
/* Infinite loop */
.marquee { animation: marquee 35s linear infinite; will-change: transform; }
.tech-scroll:hover .marquee { animation-play-state: paused; }

/* Respect accessibility */
@media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }

/* Hide scrollbar ONLY if you switch overflow-x-hidden to overflow-x-auto later */
.tech-scroll { scrollbar-width: none; -ms-overflow-style: none; }
.tech-scroll::-webkit-scrollbar { display: none; }

/* Move exactly half the track (because we duplicated the list) */
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
</style>

<template>
  <div class="w-4/5 max-w-6xl mx-auto mt-30">
    <div class="mb-12">
        <h1 class="text-4xl font-semibold text-heading mb-6">Resume</h1>  
        <p class="text-body max-w-2xl">Software Developer | Graphic Designer | Environmentalist</p>
        <p class="text-body italic max-w-2xl">Balancing prestige and standards through creativity and code.</p>
    </div>
    <div class="mb-12">
        <h2 class="text-2xl font-semibold text-heading mb-6">Profesional Summary</h2>
        <p class="text-justify">
        Software developer and environmental innovator focused on building digital systems that strengthen climate resilience and sustainable development in the Caribbean. With over 3 years of experience and a Bachelors of Science in Computer Science with Economics, I specialize in developing web platforms that transform complex environmental data into actionable insights. I am actively expanding my expertise into data science as my goal is to leveraging design and visualisation of information to create long-term impacts across finance, climate, and other important regional sectors.
        </p>
    </div>
    <div class="mb-12">
        <h2 class="text-2xl font-semibold text-heading mb-6">Education</h2>
        <div class="space-y-8">
            <EducationCard :edu="education" />
        </div>
    </div>
    <div class="relative">
      <div class="tech-scroll overflow-x-hidden py-6">
        <div class="marquee flex w-max gap-6">
          <div v-for="(tech, i) in [...techStack, ...techStack]" :key="`${tech.name}-${i}`" class="tech-item shrink-0 bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <img :src="tech.logo" :alt="tech.name" class="h-10 mb-3 object-contain" />
            <span class="text-sm text-body font-medium">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

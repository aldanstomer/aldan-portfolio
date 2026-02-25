<script setup>
import EducationCard from './EducationCard.vue';
import uwiLogo from '../../assets/uwi-ch-logo.jpeg';
import salccLogo from '../../assets/salcc-logo.png';
import smcLogo from '../../assets/smc-logo.png';
import { Code2, Server, Database, Boxes, Terminal, GitBranch, Globe } from 'lucide-vue-next'

const techStack = [
  { name: 'Vue', icon: Globe },
  { name: 'Node.js', icon: Server },
  { name: 'Flask', icon: Server },
  { name: 'Tailwind CSS', icon: Boxes },
  { name: 'Bootstrap', icon: Boxes },
  { name: 'MongoDB', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'PocketBase', icon: Database },
  { name: 'Docker', icon: Boxes },
  { name: 'Linux', icon: Terminal },
  { name: 'Git', icon: GitBranch },
  { name: 'Hyperledger Fabric', icon: Server },
  { name: 'Python', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Java', icon: Code2 },
  { name: 'C++', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'HTML/CSS', icon: Globe }
]
const education = [
    { slug: "uwi", logo: uwiLogo, school: "Universtiy of the West Indies", degree: "BSc in Computer Science with Economics", year: "2022"},
    { slug: "salcc", logo:salccLogo, school: "Sir Arthur Lewis Community College", degree: "CAPE (Pure Math, Physics, Chemistry)", year: "2018"},
    { slug: "smc", logo:smcLogo, school: "Saint Mary's College", degree: "10 CXC Subjects", year: "2016"}
]
</script>

<template>
    <div class="w-4/5 max-w-6xl mx-auto mt-30">
        <div class="mb-12">
            <h1 class="text-4xl font-semibold text-heading mb-6">Resume</h1>  
            <p class="text-body max-w-2xl">
            Software Developer | Graphic Designer | Environmentalist
            </p>
            <p class="text-body italic max-w-2xl">
            Balancing prestige and standards through creativity and code.
            </p>
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
        <section class="mb-12">
            <h2 class="text-2xl font-semibold text-heading mb-6">Technologies</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div v-for="tech in techStack" :key="tech.name" class="group bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-md">
                    <component :is="tech.icon" class="w-8 h-8 text-blue-500 mb-3 transition group-hover:text-blue-400" />
                    <span class="text-sm text-body font-medium">{{ tech.name }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

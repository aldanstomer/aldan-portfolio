<script setup>
import { ref, onMounted, computed } from 'vue'
import ProfileCard from '../components/sections/ProfileCard.vue'
import { devProjects } from "../data/devProjects"
import { designProjects } from "../data/designProjects"

const titles = ['Software Developer', 'Graphic Designer', 'Environmentalist']
const name = 'Aldan Saint Omer'
const subtitle = '"The most important investment you can make is in yourself."'
const currentTitle = ref(titles[0])
let index = 0

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % titles.length
    currentTitle.value = titles[index]
  }, 2500)
})

const featured = computed(() => [
  ...devProjects.filter(p => p.featured),
  ...designProjects.filter(p => p.featured)
])
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }

.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

<template>
  <div class="w-9/10 md:w-4/5 max-w-6xl mx-auto mt-24">
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
      <div class="lg:col-span-7">
        <p class="text-blue-400 font-medium mb-3">Aldan Saint Omer</p>
        <h1 class="text-4xl md:text-5xl font-semibold text-heading leading-tight mb-5">
          Hi, I am a
          <Transition name="fade" mode="out-in">
            <span :key="currentTitle" class="text-blue-400 block xl:inline whitespace-nowrap">{{ currentTitle }}</span>
          </Transition>
        </h1>
        <p class="text-body text-lg max-w-2xl mb-7">I am a St. Lucian developer who builds systems that balance design and functionality for smooth experiences on the web and social media. I strive to be at the forefront of climate action and sustainable development across the Caribbean.</p>
      </div>
      <div class="lg:col-span-5">
        <ProfileCard :name = "name" :subtitle= "subtitle" />
      </div>
    </section>
    <section class="mb-16">
      <div class="flex items-end justify-between gap-6 mb-6">
        <div>
          <h2 class="text-2xl font-semibold text-heading mb-2">Featured Projects</h2>
          <p class="text-body">A few pieces of work that best represent what I build and design.</p>
        </div>
        <RouterLink :to="{ path: '/portfolio', query: { tab: 'dev' } }" class="text-sm text-blue-400 hover:text-blue-300 whitespace-nowrap">
          See all →
        </RouterLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <RouterLink v-for="p in featured" :key="`${p.type}-${p.slug}`" :to="p.type === 'dev' ? `/projects/${p.slug}` : `/designs/${p.slug}`" class="group bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xs hover:-translate-y-1 hover:border-blue-600 hover:shadow-md transition">
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-heading font-semibold text-lg leading-snug group-hover:text-blue-300">{{ p.title }}</h3>
            <span class="text-blue-400 text-sm">{{ p.type === 'dev' ? 'Development' : 'Design' }}</span>
          </div>
          <p class="text-body mt-3 mb-5">{{ p.summary }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="t in p.tags" :key="t" class="px-3 py-1 rounded-full text-sm border border-slate-600 bg-slate-900 text-body">{{ t }}</span>
          </div>
        </RouterLink>
      </div>
    </section>
    <section class="mb-20">
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 class="text-2xl font-semibold text-heading mb-2">Let’s build something together.</h2>
          <p class="text-body max-w-2xl">If you need a website, dashboard, or a digital product for your organisation, I’m open to projects and collaborations.</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <RouterLink to="/contact" class="inline-flex items-center justify-center text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-900 shadow-xs font-medium leading-5 rounded-xl text-sm px-5 py-3 focus:outline-none">Contact</RouterLink>
          <RouterLink to="/resume" class="inline-flex items-center justify-center text-heading bg-slate-900 border border-slate-700 hover:border-blue-600 hover:text-blue-300 focus:ring-4 focus:ring-slate-700 shadow-xs font-medium leading-5 rounded-xl text-sm px-5 py-3 focus:outline-none">View Resume</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
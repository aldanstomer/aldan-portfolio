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
  <div class="relative min-h-screen bg-slate-950 overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[38rem] overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_84%_24%,rgba(34,211,238,0.08),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0.96)_0%,rgba(2,6,23,0.92)_58%,rgba(2,6,23,0)_100%)]"></div>
      <div class="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-slate-950/85 to-slate-950"></div>
    </div>

    <div class="relative z-10 w-9/10 md:w-4/5 max-w-6xl mx-auto pt-32">
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
          <ProfileCard :name="name" :subtitle="subtitle" />
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
          <RouterLink
            v-for="p in featured"
            :key="`${p.type}-${p.slug}`"
            :to="p.type === 'dev' ? `/projects/${p.slug}` : `/designs/${p.slug}`"
            class="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/90 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/40"
          >
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-700/20 via-transparent to-slate-900/20"></div>
            <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
            <div class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10"></div>

            <div class="relative flex items-start justify-between gap-4">
              <h3 class="text-heading font-semibold text-lg leading-snug transition-colors duration-300 group-hover:text-blue-300">
                {{ p.title }}
              </h3>
              <span class="text-blue-400 text-sm whitespace-nowrap">
                {{ p.type === 'dev' ? 'Development' : 'Design' }}
              </span>
            </div>

            <p class="text-body mt-3 mb-5">
              {{ p.summary }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in p.tags"
                :key="t"
                class="px-3 py-1 rounded-full text-sm border border-slate-600 bg-slate-900/80 text-body transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800"
              >
                {{ t }}
              </span>
            </div>
          </RouterLink>
        </div>
      </section>

      <section class="mb-20">
        <div class="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/80 p-8 shadow-xs backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10"></div>
          <div class="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div class="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div class="relative">
            <h2 class="text-2xl md:text-3xl font-semibold text-heading mb-3 leading-tight">
              Let’s build something together.
            </h2>

            <p class="text-body max-w-xl leading-relaxed">
              If you need a website, dashboard, or digital product, I’m open to projects and collaborations across the Caribbean and beyond.
            </p>
          </div>

          <div class="relative flex flex-wrap gap-3">
            <RouterLink to="/contact" class="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/30 font-medium rounded-xl text-sm px-6 py-3 transition-all duration-300 hover:-translate-y-0.5">
              Contact
            </RouterLink>

            <RouterLink to="/resume" class="inline-flex items-center justify-center text-heading bg-slate-900/80 border border-slate-700 hover:border-blue-500 hover:text-blue-300 font-medium rounded-xl text-sm px-6 py-3 transition-all duration-300 hover:-translate-y-0.5">
              View Resume
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
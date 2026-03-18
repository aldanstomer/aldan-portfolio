<script setup>
import { computed } from "vue"
import { useRoute, RouterLink } from "vue-router"
import { devProjects } from "../../data/devProjects"

const route = useRoute()
const project = computed(() => devProjects.find((p) => p.slug === route.params.slug))
</script>

<template>
  <section v-if="project" class="w-9/10 md:w-4/5 max-w-6xl mx-auto py-20">
    <RouterLink :to="{ path: '/portfolio', query: { tab: 'dev' } }" class="inline-flex items-center text-sm text-body hover:text-heading mb-8">
      ← Back to portfolio
    </RouterLink>
    <div class="mb-12">
      <p v-if="project.category" class="text-sm uppercase tracking-wider text-blue-500 mb-3">{{ project.category }}</p>
      <h1 class="text-4xl md:text-5xl font-semibold text-heading mb-4">{{ project.title }}</h1>
      <p v-if="project.summary" class="text-lg text-body max-w-3xl leading-8">{{ project.summary }}</p>
    </div>
    <div class="grid gap-10 lg:grid-cols-[1.7fr_1fr] mb-14 items-stretch">
      <div class="h-full">
        <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full rounded-2xl border border-slate-700 object-cover" />
      </div>
      <div class="rounded-2xl border border-slate-700 bg-slate-800 p-6 h-full flex flex-col justify-between">
        <h2 class="text-xl font-semibold text-heading mb-5">Project Details</h2>
        <div class="space-y-5">
          <div v-if="project.role">
            <p class="text-xs uppercase tracking-wide text-body mb-1">Role</p>
            <p class="text-heading">{{ project.role }}</p>
          </div>
          <div v-if="project.client">
            <p class="text-xs uppercase tracking-wide text-body mb-1">Client</p>
            <p class="text-heading">{{ project.client }}</p>
          </div>
          <div v-if="project.year">
            <p class="text-xs uppercase tracking-wide text-body mb-1">Year</p>
            <p class="text-heading">{{ project.year }}</p>
          </div>
          <div v-if="project.tools?.length">
            <p class="text-xs uppercase tracking-wide text-body mb-2">Tools</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tool in project.tools" :key="tool" class="rounded-full bg-slate-700 px-3 py-1 text-xs text-heading">{{ tool }}</span>
            </div>
          </div>
          <div v-if="project.links?.live || project.links?.github" class="pt-2">
            <p class="text-xs uppercase tracking-wide text-body mb-3">Links</p>
            <div class="flex flex-wrap gap-3">
              <a v-if="project.links?.live" :href="project.links.live" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition">
                Live Site
              </a>
              <a v-if="project.links?.github" :href="project.links.github" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl border border-slate-600 px-4 py-2.5 text-sm font-medium text-heading hover:bg-slate-700 transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid gap-8 md:grid-cols-2 mb-14">
      <div v-if="project.problem" class="rounded-2xl border border-slate-700 bg-slate-800 p-6">
        <h2 class="text-2xl font-semibold text-heading mb-4">Problem</h2>
        <p class="text-body leading-7">{{ project.problem }}</p>
      </div>
      <div v-if="project.solution" class="rounded-2xl border border-slate-700 bg-slate-800 p-6">
        <h2 class="text-2xl font-semibold text-heading mb-4">Solution</h2>
        <p class="text-body leading-7">{{ project.solution }}</p>
      </div>
    </div>
    <div v-if="project.features?.length" class="mb-14">
      <h2 class="text-2xl font-semibold text-heading mb-8">Key Features</h2>
      <div class="space-y-6">
        <div v-for="feature in project.features" :key="feature" class="flex iitems-center gap-4">
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 flex items-center justify-center rounded-md bg-blue-600 text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div class="flex-1 w-px bg-slate-700 mt-2"></div>
          </div>
          <p class="text-body leading-7 ">{{ feature }}</p>
        </div>
      </div>
    </div>
    <div v-if="project.gallery?.length" class="mb-14">
      <h2 class="text-2xl font-semibold text-heading mb-6">Screenshots</h2>
      <div class="columns-1 md:columns-2 gap-6 space-y-6">
        <img v-for="(image, index) in project.gallery" :key="index" :src="image" :alt="`${project.title} screenshot ${index + 1}`" class="w-full rounded-2xl border border-slate-700 object-cover break-inside-avoid" />
      </div>
    </div>
  </section>
  <section v-else class="w-4/5 max-w-4xl mx-auto py-20">
    <h1 class="text-3xl font-semibold text-heading mb-4">Project not found</h1>
    <RouterLink :to="{ path: '/portfolio', query: { tab: 'dev' } }" class="text-blue-500 hover:underline">
      Back to portfolio
    </RouterLink>
  </section>
</template>
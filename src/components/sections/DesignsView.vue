<script setup>
import { computed } from "vue"
import { useRoute, RouterLink } from "vue-router"
import { designProjects } from "../../data/designProjects"

const route = useRoute()
const project = computed(() => designProjects.find((p) => p.slug === route.params.slug))
</script>

<template>
  <section v-if="project" class="w-9/10 md:w-4/5 max-w-6xl mx-auto pt-20">
    <RouterLink :to="{ path: '/portfolio', query: { tab: 'design' } }" class="inline-flex items-center text-sm text-body hover:text-heading mb-8">
      ← Back to portfolio
    </RouterLink>
    <div class="mb-6">
      <p class="text-sm uppercase tracking-wider text-blue-500 mb-3">{{ project.category }}</p>
      <h1 class="text-4xl md:text-5xl font-semibold text-heading mb-4">{{ project.title }}</h1>
      <p class="text-lg text-body max-w-3xl">{{ project.summary }}</p>
    </div>
    <div>
      <h2 class="text-2xl font-semibold text-heading mb-6">Gallery</h2>
      <div class="columns-1 md:columns-2 gap-6 space-y-6">
        <img v-for="(image, index) in project.gallery" :key="index" :src="image" :alt="`${project.title} ${index + 1}`" class="w-full rounded-2xl border border-slate-700 object-cover break-inside-avoid" />
      </div>
    </div>
  </section>
  <section v-else class="w-4/5 max-w-4xl mx-auto py-20">
    <h1 class="text-3xl font-semibold text-heading mb-4">Project not found</h1>
    <RouterLink to="/" class="text-blue-500 hover:underline">
      Back to portfolio
    </RouterLink>
  </section>
</template>
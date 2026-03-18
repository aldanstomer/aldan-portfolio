<script setup>
import { RouterLink } from "vue-router"

defineProps({
  projects: { type: Array, required: true }
})
</script>

<template>
  <div class="grid gap-10 justify-items-center mt-10 px-6 mx-auto max-w-6xl grid-cols-1 md:grid-cols-2">
    <div
      v-for="p in projects"
      :key="p.slug"
      class="bg-slate-800 w-full max-w-sm border border-slate-700 rounded-xl shadow-xs overflow-hidden flex flex-col"
    >
      <component
        :is="p.external ? 'a' : RouterLink"
        :href="p.external ? p.href : undefined"
        :to="!p.external ? (p.type === 'design' ? `/designs/${p.slug}` : `/projects/${p.slug}`) : undefined"
        :target="p.external ? '_blank' : undefined"
        :rel="p.external ? 'noopener noreferrer' : undefined"
        class="block group"
      >
        <img
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          :src="p.image"
          :alt="p.title"
        />
      </component>

      <div class="p-6 flex flex-col flex-1">
        <p v-if="p.category" class="text-sm text-blue-400">
          {{ p.category }}
        </p>

        <p v-if="p.title" class="text-xl text-body font-semibold mb-1">
          {{ p.title }}
        </p>

        <p v-if="p.summary" class="text-sm text-body leading-6 mb-3">
          {{ p.summary }}
        </p>

        <div v-if="p.tools?.length" class="mt-auto pt-4 border-t border-slate-700">
          <p class="text-xs uppercase tracking-wide text-body mb-3">Tools</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in p.tools"
              :key="tool"
              class="rounded-full bg-slate-700 px-3 py-1 text-xs text-heading"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <component
          :is="p.external ? 'a' : RouterLink"
          :href="p.external ? p.href : undefined"
          :to="!p.external ? (p.type === 'design' ? `/designs/${p.slug}` : `/projects/${p.slug}`) : undefined"
          :target="p.external ? '_blank' : undefined"
          :rel="p.external ? 'noopener noreferrer' : undefined"
          class="inline-flex mt-5 self-start items-center text-white bg-blue-600 border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none"
        >
          See more
          <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
        </component>
      </div>
    </div>
  </div>
</template>
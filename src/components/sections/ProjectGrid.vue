<script setup>
import { RouterLink } from "vue-router"

defineProps({
  projects: { type: Array, required: true }
})
</script>

<template>
  <div class="grid gap-10 mt-10 w-full grid-cols-1 md:grid-cols-2">
    <div
      v-for="p in projects"
      :key="p.slug"
      class="group relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/40"
    >
      <div class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10"></div>

      <component
        :is="p.external ? 'a' : RouterLink"
        :href="p.external ? p.href : undefined"
        :to="!p.external ? (p.type === 'design' ? `/designs/${p.slug}` : `/projects/${p.slug}`) : undefined"
        :target="p.external ? '_blank' : undefined"
        :rel="p.external ? 'noopener noreferrer' : undefined"
        class="relative block overflow-hidden"
      >
        <img
          class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          :src="p.image"
          :alt="p.title"
          loading="lazy"
          decoding="async"
        />

        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </component>

      <div class="relative flex flex-col p-6">
        <div class="mb-4 flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p
              v-if="p.category"
              class="mb-2  text-xs font-medium text-blue-300"
            >
              {{ p.category }}
            </p>

            <h3
              v-if="p.title"
              class="text-2xl font-semibold leading-tight text-heading transition-colors duration-300 group-hover:text-blue-200"
            >
              {{ p.title }}
            </h3>
          </div>

        </div>

        <p
          v-if="p.summary"
          class="mb-5 text-sm leading-7 text-body"
        >
          {{ p.summary }}
        </p>

        <div
          v-if="p.tools?.length"
          class="mt-auto border-t border-slate-700 pt-4"
        >
          <p class="mb-3 text-xs uppercase tracking-[0.18em] text-slate-400">
            Tools
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in p.tools"
              :key="tool"
              class="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-xs text-slate-200 transition-colors duration-300 group-hover:border-slate-500"
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
          class="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
        >
          View project
          <svg
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </component>
      </div>
    </div>
  </div>
</template>
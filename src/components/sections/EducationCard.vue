<script setup>
    const props = defineProps({ edu: { type: Array, required: true } })
</script>

<template>
  <div
    v-for="e in edu"
    :key="e.slug"
    class="group flex rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl">
    <!-- COLOR BLOCK -->
    <div
      class="w-24 flex items-center justify-center"
      :style="{ backgroundColor: e.color || '#1e293b' }"
    >
      <img
  :src="e.logo"
  class="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
/>
    </div>

    <!-- CONTENT -->
    <div class="flex-1 p-6 flex items-center justify-between gap-4">
      <div>
        <h3 class="text-lg font-semibold text-heading">
          {{ e.school }}
        </h3>
        <p class="text-blue-300 text-sm">
          {{ e.degree }}
        </p>
      </div>

      <span class="text-body text-sm shrink-0">
        {{ e.year }}
      </span>
    </div>
  </div>
</template>

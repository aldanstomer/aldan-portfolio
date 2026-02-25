<script setup>
    const props = defineProps({ edu: { type: Array, required: true } })
</script>

<template>
    <div v-for="e in edu" :key="e.slug" class="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-slate-800/70 border border-slate-700 rounded-xl p-6 shadow-xs relative overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md hover:border-slate-600">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
        <div class="flex items-center gap-6 pl-2">
            <div class="bg-slate-900/60 border border-slate-700 rounded-xl w-20 h-20 flex items-center justify-center overflow-hidden">
                <img :src="e.logo" alt="" class="w-12 h-12 object-contain" />
            </div>
            <div class="min-w-0">
                <h3 class="text-xl font-semibold text-heading leading-tight truncate">{{ e.school }}</h3>
                <p class="text-sm md:text-base font-medium text-blue-200 mt-1">{{ e.degree }}</p>
            </div>
        </div>
        <div class="text-body font-semibold md:text-right shrink-0">
            {{ e.year }}
        </div>
    </div>
</template>

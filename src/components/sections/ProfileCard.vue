<script setup>
import headshot from '../../assets/aldan.jpg'

const props = defineProps({
  name: { type: String, default: 'Aldan Saint Omer' },
  subtitle: {
    type: String,
    default: 'Software Developer • Graphic Designer • Environmental Innovator'
  },
  followers: { type: Number, default: 312 },
  projects: { type: Number, default: 48 }
})
</script>

<template>
    <div class="relative w-full max-w-sm mx-auto p-2 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div class="relative rounded-[2.25rem] overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
            <div class="relative">
                <img :src="headshot" :alt="props.name" class="w-full aspect-[3/4] object-cover" />
                <div class="pointer-events-none absolute inset-x-0 bottom-0 h-56 backdrop-blur-xl bg-white/10 [mask-image:linear-gradient(to_top,black_0%,black_45%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,black_45%,transparent_100%)]" />
                <div class="absolute inset-x-0 bottom-0 z-10 p-6">
                    <div class="flex items-center gap-3">
                        <h3 class="text-2xl font-semibold text-black">{{ props.name }}</h3>
                        <img src="https://www.svgrepo.com/show/325719/twitter-verified-badge.svg" class="w-6 h-6" alt="verified" />
                    </div>
                    <p class="mt-2 text-black/80 leading-snug">{{ props.subtitle }}</p>
                    <div class="mt-3 flex items-center gap-3">
                        <a href="https://linkedin.com/in/YOURUSERNAME" target="_blank" class="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-black/10 border border-black/10 text-black hover:bg-black/15 transition">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.23 8.98h4.52V24H.23V8.98zM8.5 8.98h4.33v2.05h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.43 3.02 5.43 6.95V24h-4.52v-7.44c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V24H8.5V8.98z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <a href="https://github.com/YOURUSERNAME" target="_blank" class="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-black/10 border border-black/10 text-black hover:bg-black/15 transition">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.23 9.2 7.71 10.69.56.1.76-.24.76-.54v-2.02c-3.14.68-3.8-1.51-3.8-1.51-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.5-.29-5.14-1.25-5.14-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.47.11-3.06 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.59.23 2.77.11 3.06.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.27-5.16 5.55.41.35.77 1.04.77 2.1v3.11c0 .3.2.65.77.54 4.47-1.49 7.7-5.71 7.7-10.69C23.25 5.48 18.27.5 12 .5z"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
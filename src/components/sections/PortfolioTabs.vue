<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { designProjects } from "../../data/designProjects"
import { devProjects } from "../../data/devProjects"
import ProjectGrid from "./ProjectGrid.vue"

const route = useRoute()
const router = useRouter()
const activeTab = computed(() => route.query.tab || "dev")

function setTab(tab) {
  router.replace({
    query: {
      ...route.query,
      tab,
    },
  })
}
</script>


<template>
  <div class="overflow-auto mt-25 w-4/5 mx-auto border border-slate-700 rounded-xl shadow-xs">
    <ul class="text-sm font-medium text-center text-body divide-x divide-slate-700 flex items-stretch">
      <li class="w-full">
        <button type="button" @click="setTab('dev')" :class="[ 'inline-block w-full p-4  bg-slate-800', activeTab === 'dev' ? 'text-blue-600' : 'hover:bg-slate-700' ]">
          Software Development
        </button>
      </li>
      <li class="w-full">
        <button type="button" @click="setTab('design')" :class="[ 'inline-block w-full p-4 bg-slate-800', activeTab === 'design' ? 'text-blue-600' : 'hover:bg-slate-700' ]">
          Graphic Design
        </button>
      </li>
    </ul>
    <div id="fullWidthTabContent" class="border-t border-slate-700">
      <div v-show="activeTab === 'dev'" class="p-4 rounded-base md:p-8" id="dev">
        <div class="mb-10 text-center max-w-3xl mx-auto">
          <h1 class="text-3xl md:text-4xl font-semibold text-heading mb-4">Software Development Portfolio</h1>
          <p class="text-body text-lg leading-relaxed">
            A collection of projects focused on building impactful digital solutions across the Caribbean.
          </p>
        </div>
        <dl class="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-center">
          <div class="flex flex-col group cursor-default">
            <dt class="mb-2 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-125">
              3+
            </dt>
            <dd>Years of Developing</dd>
          </div>
          <div class="flex flex-col group cursor-default">
            <dt class="mb-2 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-125">
              5+
            </dt>
            <dd>Major Projects</dd>
          </div>
          <div class="flex flex-col group cursor-default">
            <dt class="mb-2 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-125">
              10+
            </dt>
            <dd>Tech Tools Mastered</dd>
          </div>
        </dl>   
        <ProjectGrid :projects="devProjects" />
      </div>
      <div v-show="activeTab === 'design'" class="p-4 rounded-base md:p-8" id="design">
        <div class="mb-10 text-center max-w-3xl mx-auto">
          <h1 class="text-3xl md:text-4xl font-semibold text-heading mb-4">Graphic Design Portfolio</h1>
          <p class="text-body text-lg leading-relaxed">
            Modern curated visuals that communicate clear ideas and elevate brand identity.
          </p>
        </div>
        <dl class="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-center">
          <div class="flex flex-col group cursor-default">
            <dt class="mb-2 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-125">
              3+
            </dt>
            <dd>Years of Design</dd>
          </div>
          <div class="flex flex-col group cursor-default">
            <dt class="mb-2 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-125">
              5+
            </dt>
            <dd>Brands and Campaigns Supported</dd>
          </div>
          <div class="flex flex-col group cursor-default">
            <dt class="mb-2 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-125">
              30+
            </dt>
            <dd>Visual Assets Created</dd>
          </div>
        </dl>
        <ProjectGrid :projects="designProjects" />
      </div>
    </div>
  </div>
</template>
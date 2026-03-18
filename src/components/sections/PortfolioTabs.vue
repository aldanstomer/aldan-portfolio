<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import ProjectGrid from "./ProjectGrid.vue"
import image1 from "../../assets/7371.jpeg"
import { designProjects } from "../../data/designProjects"
import { devProjects } from "../../data/devProjects"

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
        <ul class=" text-sm font-medium text-center text-body divide-x divide-slate-700 rounded-base flex">
            <li class="w-full">
                <button type="button" @click="setTab('dev')" :class="[ 'inline-block w-full p-4  bg-slate-800', activeTab === 'dev' ? 'text-blue-600' : 'hover:bg-slate-700' ]">
                Web Development
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
                <dl class="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-center">
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">3+</dt>
                        <dd>Years of Developing</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">5+</dt>
                        <dd>Major Projects</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">10+</dt>
                        <dd>Technologies Mastered</dd>
                    </div>
                </dl>
                <ProjectGrid :projects="devProjects" />
            </div>
            <div v-show="activeTab === 'design'" class="p-4 rounded-base md:p-8" id="design">
                <dl class="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-center">
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">3+</dt>
                        <dd>Years of Design</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">5+</dt>
                        <dd>Brands and Campaigns Supported</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">30+</dt>
                        <dd>Visual Assests Created</dd>
                    </div>
                </dl>
                <ProjectGrid :projects="designProjects" />
            </div>
        </div>
    </div>
</template>
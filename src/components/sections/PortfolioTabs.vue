<script setup>
import { ref } from "vue"
import ProjectGrid from "./ProjectGrid.vue"
import image1 from "../../assets/7371.jpeg"

const activeTab = ref("stats") 

const webProjects = [
  { slug: "idf", title: "IDF Curve Look-Up Tool", image: image1, href: "#", external: false, badge: "Latest" },
  { slug: "dfh", title: "DFH Productions", image: image1, href: "https://www.dfhproductions.com", external: true, badge: "Latest" },
  { slug: "fair-helen", title: "Discover Fair Helen", image: image1, href: "#", external: false, badge: "Latest" },
  { slug: "certs", title: "Blockchain Digital Certificates", image: image1, href: "#", external: false, badge: "Latest" },
]

const designProjects = [
  { slug: "logo-pack", title: "Logo Pack: Everyday Life Science", image: image1, href: "#", external: false, badge: "Featured" },
  { slug: "nic-tm-posters", title: "Posters: NIC Toastmasters", image: image1, href: "#", external: false, badge: "Featured" },
  { slug: "dfh-posters", title: "Posters: DFH Kayaking", image: image1, href: "#", external: false, badge: "Featured" },
  { slug: "dfh-logo", title: "Logo Rebuild: Dive Fair Helen", image: image1, href: "#", external: false, badge: "Featured" },
]

function setTab(tab) {
  activeTab.value = tab
}
</script>


<template>
    <div class="overflow-auto mt-25 w-4/5 mx-auto border border-slate-700 rounded-xl shadow-xs">
        <ul class=" text-sm font-medium text-center text-body divide-x divide-slate-700 rounded-base flex">
            <li class="w-full">
                <button type="button" @click="setTab('stats')" :class="[ 'inline-block w-full p-4  bg-slate-800', activeTab === 'stats' ? 'text-blue-600' : 'hover:bg-slate-700' ]">
                Web Development
                </button>
            </li>
            <li class="w-full">
                <button type="button" @click="setTab('about')" :class="[ 'inline-block w-full p-4 bg-slate-800', activeTab === 'about' ? 'text-blue-600' : 'hover:bg-slate-700' ]">
                Graphic Design
                </button>
            </li>
        </ul>
        <div id="fullWidthTabContent" class="border-t border-slate-700">
            <div v-show="activeTab === 'stats'" class="p-4 rounded-base md:p-8" id="stats">
                <dl class="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-center">
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">3+</dt>
                        <dd>Years of developing</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">5+</dt>
                        <dd>Major projects</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-2xl font-semibold tracking-tight">10+</dt>
                        <dd>Technologies mastered</dd>
                    </div>
                </dl>
                <ProjectGrid :projects="webProjects" />
            </div>
            <div v-show="activeTab === 'about'" class="p-4 rounded-base md:p-8" id="about">
                <ProjectGrid :projects="designProjects" />
            </div>
        </div>
    </div>
</template>
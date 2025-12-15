<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <!-- Top Bar -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1
              class="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              English Learning Hub
            </h1>
            <p class="text-sm text-gray-500 mt-0.5">Master English with confidence</p>
          </div>
          <div class="flex items-center gap-2">
            <div
              class="hidden sm:flex items-center gap-1 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1.5 rounded-full">
              <span class="text-xs font-medium text-blue-700">{{ currentPageTitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 overflow-y-auto pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <router-view v-slot="{ Component }">
          <component :is="Component" :tenses="tensesData" @select-tense="selectTense" />
        </router-view>
        <TenseDetail v-if="selectedTense" :tense="selectedTense" @close="selectedTense = null" />
      </div>
    </main>

    <!-- Bottom Navigation - Mobile First -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20 shadow-lg">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-3 gap-1 px-2 py-2">
          <router-link to="/learn" custom v-slot="{ navigate, isActive }">
            <button @click="navigate" :class="[
              'flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-xl transition-all duration-200',
              isActive
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200'
                : 'text-gray-600 hover:bg-gray-50 active:scale-95'
            ]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span :class="['text-xs font-medium', isActive ? 'font-semibold' : '']">Learn</span>
            </button>
          </router-link>

          <router-link to="/vocab" custom v-slot="{ navigate, isActive }">
            <button @click="navigate" :class="[
              'flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-xl transition-all duration-200',
              isActive
                ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-200'
                : 'text-gray-600 hover:bg-gray-50 active:scale-95'
            ]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span :class="['text-xs font-medium', isActive ? 'font-semibold' : '']">Vocabulary</span>
            </button>
          </router-link>

          <router-link to="/practice" custom v-slot="{ navigate, isActive }">
            <button @click="navigate" :class="[
              'flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-xl transition-all duration-200',
              isActive
                ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200'
                : 'text-gray-600 hover:bg-gray-50 active:scale-95'
            ]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span :class="['text-xs font-medium', isActive ? 'font-semibold' : '']">Practice</span>
            </button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { tensesData } from './data/tensesData.js';
import TenseDetail from './components/TenseDetail.vue';

const route = useRoute();
const selectedTense = ref(null);

const selectTense = (tense) => {
  selectedTense.value = tense;
};

const currentPageTitle = computed(() => {
  const titles = {
    '/learn': 'Learn Tenses',
    '/vocab': 'Vocabulary',
    '/practice': 'Practice'
  };
  return titles[route.path] || 'English Learning';
});
</script>

<template>
    <div class="space-y-6">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-purple-500 via-pink-600 to-rose-600 rounded-2xl p-8 text-white shadow-xl">
            <div class="flex items-center gap-3 mb-3">
                <div class="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-3xl font-bold">Vocabulary Builder</h2>
                    <p class="text-purple-100 text-sm mt-1">30-day challenge to expand your word power</p>
                </div>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
                'flex-shrink-0 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200',
                activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]">
                {{ tab.label }}
            </button>
        </div>

        <!-- Content Area -->
        <VocabView v-if="activeTab === 'daily'" />
        <VocabTestList v-else-if="activeTab === 'tests'" />
        <VocabProgress v-else-if="activeTab === 'progress'" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VocabView from '../components/VocabView.vue';
import VocabTestList from '../components/VocabTestList.vue';
import VocabProgress from '../components/VocabProgress.vue';

const activeTab = ref('daily');

const tabs = [
    { id: 'daily', label: 'Daily Words', count: null },
    { id: 'tests', label: 'Tests', count: null },
    { id: 'progress', label: 'Progress', count: null }
];
</script>

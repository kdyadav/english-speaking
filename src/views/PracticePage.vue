<template>
    <div class="space-y-6">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
            <div class="flex items-center gap-3 mb-3">
                <div class="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-3xl font-bold">Practice Hub</h2>
                    <p class="text-emerald-100 text-sm mt-1">Test your skills with interactive exercises</p>
                </div>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
                'flex-shrink-0 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200',
                activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]">
                {{ tab.label }}
            </button>
        </div>

        <!-- Content Area -->
        <PracticeMode v-if="activeTab === 'translate'" :tenses="tenses" />
        <div v-else class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div class="text-center py-12">
                <div :class="[
                    'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                    activeTab === 'fill-blanks' ? 'bg-emerald-100' : activeTab === 'quiz' ? 'bg-teal-100' : 'bg-cyan-100'
                ]">
                    <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                    {{ activeTab === 'fill-blanks' ? 'Fill in the Blanks' : activeTab === 'quiz' ? 'Quick Quiz' : 'Your Scores' }}
                </h3>
                <p class="text-gray-600">Coming soon! {{ activeTab === 'fill-blanks' ? 'Practice filling in the blanks with correct tense forms.' : activeTab === 'quiz' ? 'Test your knowledge with quick quizzes.' :
                    'Track your practice scores and progress.' }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PracticeMode from '../components/PracticeMode.vue';

defineProps({
    tenses: {
        type: Array,
        required: true
    }
});

const activeTab = ref('translate');

const tabs = [
    { id: 'translate', label: 'Translation Practice' },
    { id: 'fill-blanks', label: 'Fill Blanks' },
    { id: 'quiz', label: 'Quick Quiz' },
    { id: 'scores', label: 'Scores' }
];
</script>

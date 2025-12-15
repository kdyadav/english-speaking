<template>
    <div class="space-y-6">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <div class="flex items-center gap-3 mb-3">
                <div class="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-3xl font-bold">Learn Grammar</h2>
                    <p class="text-blue-100 text-sm mt-1">Master English grammar step by step</p>
                </div>
            </div>
        </div>

        <!-- Main Category Toggle -->
        <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button @click="mainCategory = 'tenses'" :class="[
                'flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200',
                mainCategory === 'tenses'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]">
                📅 Tenses
            </button>
            <button @click="mainCategory = 'grammar'" :class="[
                'flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200',
                mainCategory === 'grammar'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]">
                📚 Grammar Topics
            </button>
        </div>

        <!-- Tenses Section -->
        <div v-if="mainCategory === 'tenses'">
            <!-- Tense Filter Tabs -->
            <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide mb-6">
                <button v-for="tab in tenseTabs" :key="tab.id" @click="activeTenseTab = tab.id" :class="[
                    'flex-shrink-0 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200',
                    activeTenseTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                ]">
                    {{ tab.label }}
                    <span :class="[
                        'ml-2 px-2 py-0.5 rounded-full text-xs font-semibold',
                        activeTenseTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
                    ]">
                        {{ tab.count }}
                    </span>
                </button>
            </div>

            <!-- Tenses List -->
            <TensesList :tenses="filteredTenses" @select-tense="$emit('select-tense', $event)" />
        </div>

        <!-- Grammar Section -->
        <div v-else-if="mainCategory === 'grammar'">
            <!-- Grammar Category Tabs -->
            <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide mb-6">
                <button v-for="category in grammarCategories" :key="category" @click="activeGrammarCategory = category"
                    :class="[
                        'flex-shrink-0 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 whitespace-nowrap',
                        activeGrammarCategory === category
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-200'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    ]">
                    {{ category }}
                    <span :class="[
                        'ml-2 px-2 py-0.5 rounded-full text-xs font-semibold',
                        activeGrammarCategory === category ? 'bg-white/20' : 'bg-gray-100'
                    ]">
                        {{ getTopicsByCategory(category).length }}
                    </span>
                </button>
            </div>

            <!-- Grammar Topics List -->
            <GrammarList :topics="filteredGrammarTopics" @select-topic="$emit('select-grammar-topic', $event)" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TensesList from '../components/TensesList.vue';
import GrammarList from '../components/GrammarList.vue';
import { grammarData, getCategories, getTopicsByCategory } from '../data/grammarData';

const props = defineProps({
    tenses: {
        type: Array,
        required: true
    }
});

defineEmits(['select-tense', 'select-grammar-topic']);

// Main category toggle
const mainCategory = ref('tenses');

// Tenses state
const activeTenseTab = ref('present');

const tenseTabs = computed(() => {
    const presentTenses = props.tenses.filter(t => t.name.toLowerCase().includes('present'));
    const pastTenses = props.tenses.filter(t => t.name.toLowerCase().includes('past'));
    const futureTenses = props.tenses.filter(t => t.name.toLowerCase().includes('future'));

    return [
        { id: 'present', label: 'Present', count: presentTenses.length },
        { id: 'past', label: 'Past', count: pastTenses.length },
        { id: 'future', label: 'Future', count: futureTenses.length }
    ];
});

const filteredTenses = computed(() => {
    return props.tenses.filter(t =>
        t.name.toLowerCase().includes(activeTenseTab.value)
    );
});

// Grammar state
const grammarCategories = computed(() => getCategories());
const activeGrammarCategory = ref(grammarCategories.value[0]);

const filteredGrammarTopics = computed(() => {
    return getTopicsByCategory(activeGrammarCategory.value);
});
</script>

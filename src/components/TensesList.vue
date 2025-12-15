<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div v-for="tense in tenses" :key="tense.id" @click="$emit('select-tense', tense)"
            class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer hover:-translate-y-1">

            <!-- Header -->
            <div class="flex justify-between items-start mb-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {{ tense.name }}
                    </h3>
                    <p class="text-sm text-indigo-600 font-medium">{{ tense.hindiName }}</p>
                </div>
                <span :class="[
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    getCategoryColor(tense.name)
                ]">
                    {{ getCategoryBadge(tense.name) }}
                </span>
            </div>

            <!-- Formula Section -->
            <div class="mb-4 bg-gradient-to-br from-gray-50 to-blue-50/30 p-4 rounded-xl border border-gray-100">
                <div class="flex items-center gap-2 mb-2">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span class="text-xs font-semibold text-gray-600">Formula</span>
                </div>
                <p class="text-sm font-mono text-gray-800 mb-1">{{ tense.formula }}</p>
                <p class="text-xs text-gray-600">{{ tense.hindiFormula }}</p>
            </div>

            <!-- Usage Section -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-xs font-semibold text-gray-600">When to use</span>
                </div>
                <p class="text-sm text-gray-700 mb-1">{{ tense.usage }}</p>
                <p class="text-xs text-gray-600">{{ tense.hindiUsage }}</p>
            </div>

            <!-- Footer Stats -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center gap-4 text-xs text-gray-500">
                    <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {{ tense.examples.length }} examples
                    </span>
                    <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {{ tense.exercises.length }} exercises
                    </span>
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    tenses: {
        type: Array,
        required: true
    }
});

defineEmits(['select-tense']);

const getCategoryBadge = (tenseName) => {
    const name = tenseName.toLowerCase();
    if (name.includes('present')) return 'Present';
    if (name.includes('past')) return 'Past';
    if (name.includes('future')) return 'Future';
    return '';
};

const getCategoryColor = (tenseName) => {
    const name = tenseName.toLowerCase();
    if (name.includes('present')) return 'bg-blue-100 text-blue-700';
    if (name.includes('past')) return 'bg-purple-100 text-purple-700';
    if (name.includes('future')) return 'bg-emerald-100 text-emerald-700';
    return 'bg-gray-100 text-gray-700';
};
</script>

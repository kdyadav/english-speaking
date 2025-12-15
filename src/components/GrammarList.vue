<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div v-for="topic in topics" :key="topic.id" @click="$emit('select-topic', topic)"
            class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer hover:-translate-y-1">

            <!-- Header -->
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-start gap-3 flex-1">
                    <span class="text-3xl">{{ topic.icon }}</span>
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {{ topic.name }}
                        </h3>
                        <p class="text-sm text-indigo-600 font-medium">{{ topic.hindiName }}</p>
                    </div>
                </div>
                <span :class="[
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    getCategoryColor(topic.category)
                ]">
                    {{ getCategoryBadge(topic.category) }}
                </span>
            </div>

            <!-- Description -->
            <div class="mb-4 bg-gradient-to-br from-gray-50 to-blue-50/30 p-4 rounded-xl border border-gray-100">
                <p class="text-sm text-gray-800 mb-1">{{ topic.description }}</p>
                <p class="text-xs text-gray-600">{{ topic.hindiDescription }}</p>
            </div>

            <!-- Rules Count -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center gap-4 text-xs text-gray-500">
                    <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{{ topic.rules?.length || 0 }} Rules</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <span>{{ topic.examples?.length || 0 }} Examples</span>
                    </div>
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
    topics: {
        type: Array,
        required: true
    }
});

defineEmits(['select-topic']);

const getCategoryColor = (category) => {
    const colors = {
        'Parts of Speech': 'bg-purple-100 text-purple-700',
        'Sentence Structure': 'bg-blue-100 text-blue-700',
        'Advanced Grammar': 'bg-green-100 text-green-700',
        'Common Mistakes': 'bg-red-100 text-red-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
};

const getCategoryBadge = (category) => {
    const badges = {
        'Parts of Speech': 'Basic',
        'Sentence Structure': 'Structure',
        'Advanced Grammar': 'Advanced',
        'Common Mistakes': 'Tips'
    };
    return badges[category] || category;
};
</script>

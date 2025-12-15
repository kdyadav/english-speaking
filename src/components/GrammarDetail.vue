<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50"
        @click.self="$emit('close')">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-start">
                <div class="flex-1 min-w-0 pr-2">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-3xl">{{ topic.icon }}</span>
                        <div>
                            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{{ topic.name }}</h2>
                            <p class="text-sm sm:text-base md:text-lg text-blue-600 font-medium">{{ topic.hindiName }}
                            </p>
                        </div>
                    </div>
                </div>
                <button @click="$emit('close')"
                    class="text-gray-400 hover:text-gray-600 transition p-1 -mr-1 flex-shrink-0">
                    <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>

            <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <!-- Description Section -->
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-xl">
                    <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-3">📝 What is it?</h3>
                    <div class="bg-white p-3 sm:p-4 rounded-lg">
                        <p class="text-sm sm:text-base md:text-lg text-gray-800">{{ topic.description }}</p>
                        <p class="text-gray-600 mt-2">{{ topic.hindiDescription }}</p>
                    </div>
                </div>

                <!-- Rules Section -->
                <div>
                    <h3 class="text-lg font-bold text-gray-800 mb-4">📖 Rules & Types</h3>
                    <div class="space-y-4">
                        <div v-for="(rule, index) in topic.rules" :key="index"
                            class="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-5 rounded-xl border border-purple-200">
                            <div class="flex items-start gap-3 mb-3">
                                <span
                                    class="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    {{ index + 1 }}
                                </span>
                                <div class="flex-1">
                                    <h4 class="text-base sm:text-lg font-bold text-gray-800">{{ rule.title }}</h4>
                                    <p class="text-sm text-purple-600 font-medium">{{ rule.hindi }}</p>
                                </div>
                            </div>

                            <div class="bg-white p-3 sm:p-4 rounded-lg mb-3">
                                <p class="text-sm sm:text-base text-gray-800">{{ rule.explanation }}</p>
                                <p class="text-sm text-gray-600 mt-1">{{ rule.hindiExplanation }}</p>
                            </div>

                            <!-- Rule Examples -->
                            <div class="space-y-2">
                                <div v-for="(example, idx) in rule.examples" :key="idx"
                                    class="bg-white p-2.5 rounded-lg border-l-4 border-purple-400">
                                    <p class="text-sm text-gray-700 font-medium">{{ example }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Examples Section -->
                <div v-if="topic.examples && topic.examples.length">
                    <h3 class="text-lg font-bold text-gray-800 mb-4">💬 Example Sentences</h3>
                    <div class="space-y-4">
                        <div v-for="(example, index) in topic.examples" :key="index"
                            class="bg-gray-50 p-5 rounded-xl border border-gray-200">
                            <div class="flex items-start gap-3">
                                <span
                                    class="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    {{ index + 1 }}
                                </span>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm sm:text-base md:text-lg text-gray-800 font-medium">{{
                                        example.english }}</p>
                                    <p class="text-sm sm:text-base text-blue-600 mt-1.5 sm:mt-2">{{ example.hindi }}</p>
                                    <div class="mt-2 sm:mt-3 bg-white p-2.5 sm:p-3 rounded-lg">
                                        <p class="text-xs text-gray-500 mb-1">Breakdown:</p>
                                        <p class="text-sm text-gray-700">{{ example.breakdown }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Exercises Section -->
                <div v-if="topic.exercises && topic.exercises.length"
                    class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-xl">
                    <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-4">🎯 Quick Quiz</h3>
                    <div class="space-y-4">
                        <div v-for="(exercise, index) in topic.exercises" :key="index" class="bg-white p-4 rounded-lg">
                            <p class="font-medium text-gray-800 mb-2">{{ exercise.question }}</p>
                            <p class="text-sm text-gray-600 mb-3">{{ exercise.hindi }}</p>
                            <div class="space-y-2">
                                <button v-for="option in exercise.options" :key="option"
                                    @click="checkAnswer(index, option)" :class="[
                                        'w-full text-left px-4 py-2.5 rounded-lg border-2 transition-all',
                                        selectedAnswers[index] === option
                                            ? option === exercise.correctAnswer
                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                : 'border-red-500 bg-red-50 text-red-700'
                                            : 'border-gray-200 hover:border-blue-300 bg-gray-50'
                                    ]">
                                    {{ option }}
                                    <span v-if="selectedAnswers[index] === option" class="ml-2">
                                        {{ option === exercise.correctAnswer ? '✓' : '✗' }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Practice Button -->
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl">
                    <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-3">✍️ Ready to Practice?</h3>
                    <p class="text-gray-600 text-sm mb-4">Test your knowledge in Practice mode!</p>
                    <button @click="$emit('close')"
                        class="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                        Go to Practice Mode
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    topic: {
        type: Object,
        required: true
    }
});

defineEmits(['close']);

const selectedAnswers = ref({});

const checkAnswer = (index, option) => {
    selectedAnswers.value[index] = option;
};
</script>

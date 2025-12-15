<template>
    <div class="space-y-6">
        <!-- Test Overview -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">Vocabulary Tests</h2>
                    <p class="text-gray-600 mt-1">Test yourself every 3 days to unlock new content</p>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-purple-600">{{ passedTests.length }}/10</div>
                    <p class="text-sm text-gray-600">Tests Passed</p>
                </div>
            </div>

            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
                <div class="flex items-start gap-3">
                    <span class="text-2xl">ℹ️</span>
                    <div>
                        <h4 class="font-semibold text-purple-900 mb-1">How Tests Work</h4>
                        <ul class="text-sm text-purple-800 space-y-1">
                            <li>• Complete 3 days of vocabulary to unlock each test</li>
                            <li>• Pass with 70% or higher to continue</li>
                            <li>• Each test covers words from the previous 3 days</li>
                            <li>• Retake tests as many times as needed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Test List -->
        <div class="space-y-4">
            <div v-for="testNum in 10" :key="testNum" :class="[
                'bg-white rounded-2xl p-6 shadow-sm border-2 transition-all',
                isTestAvailable(testNum)
                    ? 'border-blue-200 hover:shadow-lg cursor-pointer'
                    : 'border-gray-200 opacity-60'
            ]" @click="handleTestClick(testNum)">
                <div class="flex items-center justify-between">
                    <!-- Left Side: Test Info -->
                    <div class="flex items-center gap-4 flex-1">
                        <!-- Test Number Badge -->
                        <div :class="[
                            'w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl',
                            passedTests.includes(testNum)
                                ? 'bg-green-500 text-white'
                                : isTestAvailable(testNum)
                                    ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                                    : 'bg-gray-300 text-gray-600'
                        ]">
                            {{ testNum }}
                        </div>

                        <!-- Test Details -->
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-800 mb-1">Test {{ testNum }}</h3>
                            <p class="text-gray-600 text-sm mb-2">
                                Days {{ (testNum - 1) * 3 + 1 }}-{{ testNum * 3 }} • 5 Questions
                            </p>

                            <!-- Progress Indicators -->
                            <div class="flex items-center gap-2 flex-wrap">
                                <span v-if="passedTests.includes(testNum)"
                                    class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    Passed
                                </span>
                                <span v-else-if="isTestAvailable(testNum)"
                                    class="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                    ✨ Available Now
                                </span>
                                <span v-else-if="isTestRequired(testNum)"
                                    class="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                                    ⚠️ Required to Continue
                                </span>
                                <span v-else
                                    class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                    🔒 Complete Days {{ (testNum - 1) * 3 + 1 }}-{{ testNum * 3 }} First
                                </span>

                                <!-- Passing Score Badge -->
                                <span
                                    class="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                    Pass: 70%+
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side: Action Button -->
                    <div>
                        <button v-if="isTestAvailable(testNum)" :class="[
                            'px-6 py-3 rounded-xl font-semibold transition-all',
                            passedTests.includes(testNum)
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:scale-105'
                        ]" @click.stop="startTest(testNum)">
                            {{ passedTests.includes(testNum) ? 'Retake Test' : 'Start Test' }}
                        </button>
                        <div v-else class="text-gray-400">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Test Coverage (collapsed view) -->
                <div v-if="isTestAvailable(testNum)" class="mt-4 pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-2 text-sm text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Click to start the test - covers {{ 3 * 50 }} words from Days {{ (testNum - 1) * 3 + 1
                            }}-{{ testNum * 3 }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Test Component Modal -->
        <VocabTest v-if="showTest && currentTest" :test="currentTest" @close="showTest = false"
            @complete="handleTestComplete" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { vocabTests } from '../data/vocabData.js';
import VocabTest from './VocabTest.vue';

const currentDay = ref(1);
const completedDays = ref([]);
const passedTests = ref([]);
const showTest = ref(false);
const currentTest = ref(null);

// Load progress from localStorage
onMounted(() => {
    const savedProgress = localStorage.getItem('vocabProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentDay.value = progress.currentDay || 1;
        completedDays.value = progress.completedDays || [];
        passedTests.value = progress.passedTests || [];
    }
});

// Save progress to localStorage
const saveProgress = () => {
    localStorage.setItem('vocabProgress', JSON.stringify({
        currentDay: currentDay.value,
        completedDays: completedDays.value,
        passedTests: passedTests.value
    }));
};

// Check if test is available to take
const isTestAvailable = (testNum) => {
    const requiredDay = testNum * 3;
    return completedDays.value.filter(d => d <= requiredDay).length >= 3;
};

// Check if test is required to continue
const isTestRequired = (testNum) => {
    const requiredDay = testNum * 3;
    return currentDay.value > requiredDay && !passedTests.value.includes(testNum);
};

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Start a test
const startTest = (testNum) => {
    if (!isTestAvailable(testNum)) {
        alert(`Complete Days ${(testNum - 1) * 3 + 1}-${testNum * 3} first!`);
        return;
    }

    // Find the test in vocabTests data
    if (testNum <= vocabTests.length) {
        // Clone the test and shuffle options for each question
        const originalTest = vocabTests[testNum - 1];
        currentTest.value = {
            ...originalTest,
            questions: originalTest.questions.map(question => ({
                ...question,
                options: shuffleArray(question.options)
            }))
        };
        showTest.value = true;
    } else {
        // Create a dummy test for tests not yet created in data
        currentTest.value = {
            testId: testNum,
            daysRange: `${(testNum - 1) * 3 + 1}-${testNum * 3}`,
            passingScore: 70,
            questions: [
                {
                    type: "translation",
                    hindi: "टेस्ट",
                    correctAnswer: "Test",
                    options: shuffleArray(["Test", "Exam", "Quiz", "Trial"])
                }
            ]
        };
        showTest.value = true;
    }
};

// Handle test click
const handleTestClick = (testNum) => {
    if (isTestAvailable(testNum)) {
        startTest(testNum);
    }
};

// Handle test completion
const handleTestComplete = (result) => {
    if (result.passed) {
        const testNumber = currentTest.value.testId;
        if (!passedTests.value.includes(testNumber)) {
            passedTests.value.push(testNumber);
            passedTests.value.sort((a, b) => a - b);
            saveProgress();
        }
    }
    showTest.value = false;
};
</script>

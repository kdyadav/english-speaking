<template>
    <div>
        <div class="mb-6 sm:mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">30-Day Vocabulary Challenge</h2>
            <p class="text-sm sm:text-base text-gray-600">Learn 50 new words every day. Complete tests every 3 days to
                unlock more!</p>
        </div>

        <!-- Progress Overview -->
        <div class="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg sm:text-xl font-bold text-gray-800">Your Progress</h3>
                <span class="text-sm text-gray-600">Day {{ currentDay }}/30</span>
            </div>
            <div class="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-500"
                    :style="{ width: `${(currentDay / 30) * 100}%` }"></div>
            </div>
            <p class="text-xs sm:text-sm text-gray-600 mt-2">
                {{ completedDays.length }} days completed • {{ passedTests.length }} tests passed
            </p>
        </div>

        <!-- Test Alert (if needed) -->
        <div v-if="needsTest" class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6 mb-6">
            <div class="flex items-start gap-3">
                <span class="text-2xl">⚠️</span>
                <div class="flex-1">
                    <h3 class="font-bold text-yellow-800 mb-1">Test Required!</h3>
                    <p class="text-sm text-yellow-700 mb-3">
                        You need to pass the test for Days {{ lastTestDay + 1 }}-{{ lastTestDay + 3 }} to unlock Day {{
                        lastTestDay + 4 }}.
                    </p>
                    <button @click="startTest" class="btn-primary bg-yellow-600 hover:bg-yellow-700">
                        Start Test
                    </button>
                </div>
            </div>
        </div>

        <!-- Test Component -->
        <VocabTest v-if="showTest" :test="currentTest" @close="showTest = false" @complete="handleTestComplete" />

        <!-- Day View Component -->
        <VocabDayView v-if="showDayView && selectedDay" :day-data="selectedDay" @close="showDayView = false" />

        <!-- Timeline View -->
        <div class="relative">
            <!-- Timeline Line -->
            <div
                class="absolute left-6 sm:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200">
            </div>

            <!-- Timeline Items -->
            <div class="space-y-4 sm:space-y-6">
                <div v-for="day in 30" :key="day" class="relative flex items-start gap-4 sm:gap-6">
                    <!-- Timeline Dot -->
                    <div class="relative z-10 flex-shrink-0">
                        <div @click="openDay(day)" :class="[
                            'w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 flex items-center justify-center font-bold transition-all duration-300 cursor-pointer',
                            isLocked(day)
                                ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                                : completedDays.includes(day)
                                    ? 'bg-green-500 border-green-600 text-white shadow-lg scale-110'
                                    : day === currentDay
                                        ? 'bg-blue-500 border-blue-600 text-white shadow-xl scale-125 animate-pulse'
                                        : 'bg-white border-blue-400 text-blue-600 hover:scale-110 hover:shadow-lg'
                        ]">
                            <span v-if="completedDays.includes(day)" class="text-xl sm:text-2xl">✓</span>
                            <span v-else-if="isLocked(day)" class="text-xl sm:text-2xl">🔒</span>
                            <span v-else class="text-sm sm:text-base">{{ day }}</span>
                        </div>
                    </div>

                    <!-- Content Card -->
                    <div @click="openDay(day)" :class="[
                        'flex-1 p-4 sm:p-6 rounded-xl border-2 transition-all duration-300',
                        isLocked(day)
                            ? 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
                            : completedDays.includes(day)
                                ? 'bg-green-50 border-green-300 hover:shadow-lg cursor-pointer'
                                : day === currentDay
                                    ? 'bg-blue-50 border-blue-400 shadow-md hover:shadow-xl cursor-pointer'
                                    : 'bg-white border-gray-300 hover:border-blue-300 hover:shadow-md cursor-pointer'
                    ]">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 mb-1">
                                    <h3 class="text-base sm:text-lg font-bold text-gray-800">
                                        Day {{ day }}
                                    </h3>
                                    <span v-if="day === currentDay"
                                        class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                        Current
                                    </span>
                                </div>

                                <p v-if="day <= vocabData.length" class="text-sm sm:text-base text-gray-700 mb-2">
                                    {{ vocabData[day - 1].title.replace(`Day ${day}: `, '') }}
                                </p>
                                <p v-else class="text-sm sm:text-base text-gray-500 mb-2 italic">
                                    Coming soon...
                                </p>

                                <div class="flex items-center gap-4 text-xs sm:text-sm text-gray-600">
                                    <span class="flex items-center gap-1">
                                        📚 {{ getAvailableWords(day) }} words
                                    </span>
                                    <span v-if="completedDays.includes(day)" class="text-green-600 font-medium">
                                        ✓ Completed
                                    </span>
                                    <span v-else-if="isLocked(day)" class="text-gray-400">
                                        🔒 Locked
                                    </span>
                                </div>
                            </div>

                            <!-- Test Badge -->
                            <div v-if="isTestDay(day)" class="flex-shrink-0">
                                <div :class="[
                                    'px-3 py-1 rounded-lg text-xs font-semibold',
                                    passedTests.includes(day / 3)
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                ]">
                                    {{ passedTests.includes(day / 3) ? '✓ Test Passed' : '⚠️ Test Day' }}
                                </div>
                            </div>
                        </div>

                        <!-- Progress for current day -->
                        <div v-if="day === currentDay && !completedDays.includes(day)"
                            class="mt-3 pt-3 border-t border-blue-200">
                            <div class="flex items-center gap-2 text-sm text-blue-600">
                                <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                                <span class="font-medium">Click to start learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Milestone Markers -->
            <div class="mt-8 pt-6 border-t-2 border-dashed border-gray-300">
                <h3 class="text-lg font-bold text-gray-800 mb-4">Milestones</h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                        <div class="text-3xl mb-2">🌟</div>
                        <div class="text-sm text-gray-600">Week 1</div>
                        <div class="text-lg font-bold text-gray-800">Days 1-7</div>
                        <div class="text-xs text-blue-600 mt-1">
                            {{completedDays.filter(d => d <= 7).length}}/7 completed </div>
                        </div>
                        <div
                            class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                            <div class="text-3xl mb-2">⭐</div>
                            <div class="text-sm text-gray-600">Week 2-3</div>
                            <div class="text-lg font-bold text-gray-800">Days 8-21</div>
                            <div class="text-xs text-purple-600 mt-1">
                                {{completedDays.filter(d => d > 7 && d <= 21).length}}/14 completed </div>
                            </div>
                            <div
                                class="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200">
                                <div class="text-3xl mb-2">🏆</div>
                                <div class="text-sm text-gray-600">Week 4</div>
                                <div class="text-lg font-bold text-gray-800">Days 22-30</div>
                                <div class="text-xs text-pink-600 mt-1">
                                    {{completedDays.filter(d => d > 21).length}}/9 completed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { vocabData, vocabTests } from '../data/vocabData.js';
import VocabDayView from './VocabDayView.vue';
import VocabTest from './VocabTest.vue';

// State management
const currentDay = ref(1);
const completedDays = ref([]);
const passedTests = ref([]);
const showDayView = ref(false);
const showTest = ref(false);
const selectedDay = ref(null);
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

// Computed properties
const lastTestDay = computed(() => {
    return Math.floor((currentDay.value - 1) / 3) * 3;
});

const needsTest = computed(() => {
    if (currentDay.value <= 3) return false;
    const testNumber = Math.floor((currentDay.value - 1) / 3);
    return !passedTests.value.includes(testNumber);
});

const isLocked = (day) => {
    if (day === 1) return false;
    if (day <= 3) return day > currentDay.value;

    const requiredTest = Math.floor((day - 1) / 3);
    return !passedTests.value.includes(requiredTest) || day > currentDay.value + 1;
};

const isTestDay = (day) => {
    return day % 3 === 0;
};

const getAvailableWords = (day) => {
    if (day <= vocabData.length) {
        return vocabData[day - 1].words.length;
    }
    return 50; // Default for days not yet created
};

// Methods
const openDay = (day) => {
    if (isLocked(day)) {
        alert(`Day ${day} is locked! Complete previous days and tests to unlock.`);
        return;
    }

    if (day <= vocabData.length) {
        selectedDay.value = vocabData[day - 1];
        showDayView.value = true;

        // Mark day as completed if not already
        if (!completedDays.value.includes(day)) {
            completedDays.value.push(day);
            if (day === currentDay.value && currentDay.value < 30) {
                currentDay.value++;
            }
            saveProgress();
        }
    } else {
        alert('Content for this day is coming soon!');
    }
};

const startTest = () => {
    const testNumber = Math.floor(currentDay.value / 3);
    if (testNumber > 0 && testNumber <= vocabTests.length) {
        currentTest.value = vocabTests[testNumber - 1];
        showTest.value = true;
    }
};

const handleTestComplete = (result) => {
    if (result.passed) {
        const testNumber = Math.floor(currentDay.value / 3);
        if (!passedTests.value.includes(testNumber)) {
            passedTests.value.push(testNumber);
            saveProgress();
        }
    }
    showTest.value = false;
};
</script>

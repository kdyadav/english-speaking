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
            <!-- Animated Timeline Line with Glow -->
            <div
                class="absolute left-6 sm:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30">
            </div>
            <div class="absolute left-6 sm:left-10 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000"
                :style="{ height: `${(completedDays.length / 30) * 100}%` }">
                <div
                    class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50">
                </div>
            </div>

            <!-- Timeline Items -->
            <div class="space-y-3 sm:space-y-4">
                <div v-for="day in 30" :key="day" class="relative flex items-start gap-4 sm:gap-6 group">
                    <!-- Timeline Dot with Glow Effect -->
                    <div class="relative z-10 flex-shrink-0">
                        <div @click="openDay(day)" :class="[
                            'w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-bold transition-all duration-500 cursor-pointer backdrop-blur-sm',
                            'transform hover:rotate-6 active:scale-95',
                            isLocked(day)
                                ? 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500 cursor-not-allowed shadow-sm'
                                : completedDays.includes(day)
                                    ? 'bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-xl shadow-green-500/50 hover:shadow-2xl hover:shadow-green-500/60'
                                    : day === currentDay
                                        ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/60 animate-pulse hover:shadow-purple-500/80'
                                        : 'bg-gradient-to-br from-white to-gray-50 border-2 border-purple-200 text-purple-600 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200/50'
                        ]">
                            <span v-if="completedDays.includes(day)" class="text-2xl sm:text-3xl">✓</span>
                            <span v-else-if="isLocked(day)" class="text-2xl sm:text-3xl opacity-50">🔒</span>
                            <span v-else class="text-lg sm:text-xl font-extrabold">{{ day }}</span>
                        </div>

                        <!-- Ripple Effect for Current Day -->
                        <div v-if="day === currentDay"
                            class="absolute inset-0 rounded-2xl bg-purple-500 opacity-20 animate-ping"></div>
                    </div>

                    <!-- Content Card with Glass Morphism -->
                    <div @click="openDay(day)" :class="[
                        'flex-1 p-5 sm:p-7 rounded-2xl transition-all duration-500 backdrop-blur-xl',
                        'transform hover:-translate-y-1 active:scale-[0.98]',
                        isLocked(day)
                            ? 'bg-gradient-to-br from-gray-100/80 to-gray-200/80 border border-gray-300/50 cursor-not-allowed opacity-50'
                            : completedDays.includes(day)
                                ? 'bg-gradient-to-br from-emerald-50/90 to-green-50/90 border border-emerald-200/50 hover:shadow-2xl hover:shadow-emerald-200/50 cursor-pointer hover:border-emerald-300'
                                : day === currentDay
                                    ? 'bg-gradient-to-br from-blue-50/90 via-purple-50/90 to-pink-50/90 border-2 border-purple-300/70 shadow-xl shadow-purple-200/50 hover:shadow-2xl hover:shadow-purple-300/60 cursor-pointer'
                                    : 'bg-white/90 border border-gray-200/50 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 cursor-pointer hover:bg-gradient-to-br hover:from-white/95 hover:to-purple-50/30'
                    ]">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 mb-2">
                                    <h3
                                        class="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                        Day {{ day }}
                                    </h3>
                                    <span v-if="day === currentDay"
                                        class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg shadow-purple-300/50 animate-pulse">
                                        ● Current
                                    </span>
                                </div>

                                <p v-if="day <= vocabData.length"
                                    class="text-sm sm:text-base text-gray-700 mb-3 font-medium">
                                    {{ vocabData[day - 1].title.replace(`Day ${day}: `, '') }}
                                </p>
                                <p v-else class="text-sm sm:text-base text-gray-400 mb-3 italic font-medium">
                                    Coming soon...
                                </p>

                                <div class="flex items-center gap-4 text-xs sm:text-sm">
                                    <span
                                        class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 font-semibold">
                                        📚 {{ getAvailableWords(day) }} words
                                    </span>
                                    <span v-if="completedDays.includes(day)"
                                        class="flex items-center gap-1 text-emerald-600 font-bold">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        Completed
                                    </span>
                                    <span v-else-if="isLocked(day)"
                                        class="flex items-center gap-1 text-gray-400 font-medium">
                                        🔒 Locked
                                    </span>
                                </div>
                            </div>

                            <!-- Test Badge with Modern Design -->
                            <div v-if="isTestDay(day)" class="flex-shrink-0">
                                <div :class="[
                                    'px-4 py-2 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm transition-all duration-300',
                                    passedTests.includes(day / 3)
                                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-green-500/50'
                                        : 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-yellow-500/50 animate-pulse'
                                ]">
                                    {{ passedTests.includes(day / 3) ? '✓ Passed' : '⚠️ Test' }}
                                </div>
                            </div>
                        </div>

                        <!-- Call to Action for Current Day -->
                        <div v-if="day === currentDay && !completedDays.includes(day)"
                            class="mt-4 pt-4 border-t border-purple-200/50">
                            <div
                                class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                                <span class="font-bold text-sm sm:text-base">Start Learning Today!</span>
                                <svg class="w-5 h-5 ml-auto transform group-hover:translate-x-2 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Milestone Markers with Modern Cards -->
            <div class="mt-12 pt-8 relative">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-pink-100/20 rounded-3xl -z-10">
                </div>
                <h3
                    class="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center sm:text-left">
                    🎯 Your Milestones
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div
                        class="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700">
                        </div>
                        <div class="relative z-10">
                            <div
                                class="text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                🌟</div>
                            <div class="text-sm text-blue-100 font-medium mb-1">Week 1</div>
                            <div class="text-2xl font-extrabold text-white mb-2">Days 1-7</div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div class="h-full bg-white rounded-full transition-all duration-1000"
                                        :style="{ width: `${(completedDays.filter(d => d <= 7).length / 7) * 100}%` }">
                                    </div>
                                </div>
                                <span class="text-xs font-bold text-white">{{completedDays.filter(d => d <=
                                        7).length}}/7</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700">
                        </div>
                        <div class="relative z-10">
                            <div
                                class="text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                ⭐</div>
                            <div class="text-sm text-purple-100 font-medium mb-1">Week 2-3</div>
                            <div class="text-2xl font-extrabold text-white mb-2">Days 8-21</div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div class="h-full bg-white rounded-full transition-all duration-1000"
                                        :style="{ width: `${(completedDays.filter(d => d > 7 && d <= 21).length / 14) * 100}%` }">
                                    </div>
                                </div>
                                <span class="text-xs font-bold text-white">{{completedDays.filter(d => d > 7 && d <=
                                        21).length}}/14</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="group relative overflow-hidden bg-gradient-to-br from-pink-500 to-rose-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700">
                        </div>
                        <div class="relative z-10">
                            <div
                                class="text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                🏆</div>
                            <div class="text-sm text-pink-100 font-medium mb-1">Week 4</div>
                            <div class="text-2xl font-extrabold text-white mb-2">Days 22-30</div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div class="h-full bg-white rounded-full transition-all duration-1000"
                                        :style="{ width: `${(completedDays.filter(d => d > 21).length / 9) * 100}%` }">
                                    </div>
                                </div>
                                <span class="text-xs font-bold text-white">{{completedDays.filter(d => d >
                                    21).length}}/9</span>
                            </div>
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

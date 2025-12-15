<template>
    <div class="space-y-6">
        <!-- Overall Statistics -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Total Days Completed -->
            <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border-2 border-green-200">
                <div class="flex items-center justify-between mb-4">
                    <div class="bg-green-500 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span class="text-3xl font-bold text-green-600">{{ completedDays.length }}</span>
                </div>
                <h3 class="text-gray-800 font-semibold">Days Completed</h3>
                <p class="text-sm text-gray-600 mt-1">Out of 30 days</p>
                <div class="mt-3 bg-green-200 rounded-full h-2 overflow-hidden">
                    <div class="bg-green-500 h-full transition-all duration-500"
                        :style="{ width: `${(completedDays.length / 30) * 100}%` }"></div>
                </div>
            </div>

            <!-- Words Learned -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200">
                <div class="flex items-center justify-between mb-4">
                    <div class="bg-blue-500 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <span class="text-3xl font-bold text-blue-600">{{ wordsLearned }}</span>
                </div>
                <h3 class="text-gray-800 font-semibold">Words Learned</h3>
                <p class="text-sm text-gray-600 mt-1">Total vocabulary</p>
                <div class="mt-3 bg-blue-200 rounded-full h-2 overflow-hidden">
                    <div class="bg-blue-500 h-full transition-all duration-500"
                        :style="{ width: `${(wordsLearned / 1500) * 100}%` }"></div>
                </div>
            </div>

            <!-- Tests Passed -->
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
                <div class="flex items-center justify-between mb-4">
                    <div class="bg-purple-500 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <span class="text-3xl font-bold text-purple-600">{{ passedTests.length }}</span>
                </div>
                <h3 class="text-gray-800 font-semibold">Tests Passed</h3>
                <p class="text-sm text-gray-600 mt-1">Out of 10 tests</p>
                <div class="mt-3 bg-purple-200 rounded-full h-2 overflow-hidden">
                    <div class="bg-purple-500 h-full transition-all duration-500"
                        :style="{ width: `${(passedTests.length / 10) * 100}%` }"></div>
                </div>
            </div>
        </div>

        <!-- Test Progress -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-800 mb-6">Test Performance</h3>
            <div class="space-y-4">
                <div v-for="testNum in 10" :key="testNum" :class="[
                    'p-4 rounded-xl border-2 transition-all',
                    passedTests.includes(testNum)
                        ? 'bg-green-50 border-green-300'
                        : 'bg-gray-50 border-gray-200'
                ]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div :class="[
                                'w-10 h-10 rounded-lg flex items-center justify-center font-bold',
                                passedTests.includes(testNum)
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-300 text-gray-600'
                            ]">
                                {{ testNum }}
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Test {{ testNum }}</h4>
                                <p class="text-sm text-gray-600">Days {{ (testNum - 1) * 3 + 1 }}-{{ testNum * 3 }}</p>
                            </div>
                        </div>
                        <div>
                            <span v-if="passedTests.includes(testNum)"
                                class="inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                Passed
                            </span>
                            <span v-else-if="currentDay >= testNum * 3"
                                class="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-medium">
                                ⚠️ Pending
                            </span>
                            <span v-else
                                class="inline-flex items-center gap-1 px-3 py-1 bg-gray-300 text-gray-600 rounded-full text-sm font-medium">
                                🔒 Locked
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Achievements -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-800 mb-6">Achievements</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <!-- First Day -->
                <div :class="[
                    'p-4 rounded-xl text-center transition-all',
                    completedDays.length >= 1
                        ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                ]">
                    <div class="text-4xl mb-2">🎯</div>
                    <h4 class="font-semibold text-gray-800 text-sm">First Step</h4>
                    <p class="text-xs text-gray-600 mt-1">Complete Day 1</p>
                </div>

                <!-- Week Warrior -->
                <div :class="[
                    'p-4 rounded-xl text-center transition-all',
                    completedDays.length >= 7
                        ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                ]">
                    <div class="text-4xl mb-2">🌟</div>
                    <h4 class="font-semibold text-gray-800 text-sm">Week Warrior</h4>
                    <p class="text-xs text-gray-600 mt-1">Complete 7 days</p>
                </div>

                <!-- Test Champion -->
                <div :class="[
                    'p-4 rounded-xl text-center transition-all',
                    passedTests.length >= 5
                        ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                ]">
                    <div class="text-4xl mb-2">🏅</div>
                    <h4 class="font-semibold text-gray-800 text-sm">Test Champion</h4>
                    <p class="text-xs text-gray-600 mt-1">Pass 5 tests</p>
                </div>

                <!-- Master -->
                <div :class="[
                    'p-4 rounded-xl text-center transition-all',
                    completedDays.length === 30
                        ? 'bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                ]">
                    <div class="text-4xl mb-2">🏆</div>
                    <h4 class="font-semibold text-gray-800 text-sm">Vocab Master</h4>
                    <p class="text-xs text-gray-600 mt-1">Complete all 30 days</p>
                </div>
            </div>
        </div>

        <!-- Current Streak -->
        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Current Streak</h3>
                    <p class="text-sm text-gray-600">Keep learning every day!</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl font-bold text-orange-600">{{ currentStreak }}</div>
                    <p class="text-sm text-gray-600 mt-1">days</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const currentDay = ref(1);
const completedDays = ref([]);
const passedTests = ref([]);

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

// Computed properties
const wordsLearned = computed(() => {
    return completedDays.value.length * 50;
});

const currentStreak = computed(() => {
    if (completedDays.value.length === 0) return 0;

    let streak = 0;
    const sorted = [...completedDays.value].sort((a, b) => b - a);

    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            streak = 1;
        } else if (sorted[i] === sorted[i - 1] - 1) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
});
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="card">
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Practice Mode</h2>
        <p class="text-gray-600">Translate Hindi sentences to English</p>
      </div>

      <div v-if="!isComplete" class="space-y-6">
        <!-- Progress Bar -->
        <div class="bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            class="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-500"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
        <p class="text-center text-sm text-gray-600">
          Question {{ currentQuestionIndex + 1 }} of {{ allExercises.length }}
        </p>

        <!-- Current Question -->
        <div v-if="currentExercise" class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-xl">
          <div class="mb-3 sm:mb-2">
            <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {{ currentTenseName }}
            </span>
          </div>
          <p class="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium mb-4 sm:mb-6">
            {{ currentExercise.hindi }}
          </p>
          
          <!-- Options -->
          <div class="space-y-2 sm:space-y-3">
            <button
              v-for="(option, index) in currentExercise.options"
              :key="index"
              @click="checkAnswer(option)"
              :disabled="answered"
              :class="[
                'w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200',
                answered && option === currentExercise.correctAnswer
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : answered && option === selectedAnswer && option !== currentExercise.correctAnswer
                  ? 'bg-red-100 border-red-500 text-red-800'
                  : !answered
                  ? 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                  : 'bg-white border-gray-300 text-gray-400'
              ]"
            >
              <div class="flex items-center gap-2 sm:gap-3">
                <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                  {{ String.fromCharCode(65 + index) }}
                </span>
                <span class="font-medium text-sm sm:text-base flex-1 min-w-0">{{ option }}</span>
                <span v-if="answered && option === currentExercise.correctAnswer" class="ml-auto">
                  ✓
                </span>
                <span v-if="answered && option === selectedAnswer && option !== currentExercise.correctAnswer" class="ml-auto">
                  ✗
                </span>
              </div>
            </button>
          </div>

          <!-- Feedback -->
          <div v-if="answered" class="mt-6 p-4 rounded-lg" :class="isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
            <p class="font-bold" :class="isCorrect ? 'text-green-800' : 'text-red-800'">
              {{ isCorrect ? '🎉 Correct!' : '❌ Incorrect' }}
            </p>
            <p v-if="!isCorrect" class="text-sm mt-2 text-gray-700">
              Correct answer: <strong>{{ currentExercise.correctAnswer }}</strong>
            </p>
          </div>

          <!-- Next Button -->
          <button
            v-if="answered"
            @click="nextQuestion"
            class="btn-primary w-full mt-6"
          >
            {{ currentQuestionIndex < allExercises.length - 1 ? 'Next Question →' : 'See Results' }}
          </button>
        </div>
      </div>

      <!-- Results -->
      <div v-else class="text-center py-8 sm:py-12">
        <div class="text-5xl sm:text-6xl mb-4">
          {{ score / allExercises.length >= 0.7 ? '🎉' : '📚' }}
        </div>
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Practice Complete!</h3>
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-xl inline-block mb-6">
          <p class="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{{ score }}/{{ allExercises.length }}</p>
          <p class="text-gray-600">Correct Answers</p>
        </div>
        <div class="space-y-3">
          <button @click="restartPractice" class="btn-primary w-full max-w-md mx-auto block">
            Practice Again
          </button>
          <p class="text-gray-600 text-sm mt-4">
            {{ score / allExercises.length >= 0.7 ? 'Great job! Keep practicing!' : 'Keep learning and try again!' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  tenses: {
    type: Array,
    required: true
  }
});

const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const answered = ref(false);
const score = ref(0);
const isComplete = ref(false);
const allExercises = ref([]);

const currentExercise = computed(() => allExercises.value[currentQuestionIndex.value]);
const currentTenseName = computed(() => currentExercise.value?.tenseName || '');
const isCorrect = computed(() => selectedAnswer.value === currentExercise.value?.correctAnswer);
const progress = computed(() => ((currentQuestionIndex.value + 1) / allExercises.value.length) * 100);

const loadExercises = () => {
  allExercises.value = [];
  props.tenses.forEach(tense => {
    tense.exercises.forEach(exercise => {
      allExercises.value.push({
        ...exercise,
        tenseName: tense.name
      });
    });
  });
  // Shuffle exercises
  allExercises.value.sort(() => Math.random() - 0.5);
};

const checkAnswer = (answer) => {
  if (answered.value) return;
  
  selectedAnswer.value = answer;
  answered.value = true;
  
  if (answer === currentExercise.value.correctAnswer) {
    score.value++;
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < allExercises.value.length - 1) {
    currentQuestionIndex.value++;
    selectedAnswer.value = null;
    answered.value = false;
  } else {
    isComplete.value = true;
  }
};

const restartPractice = () => {
  currentQuestionIndex.value = 0;
  selectedAnswer.value = null;
  answered.value = false;
  score.value = 0;
  isComplete.value = false;
  loadExercises();
};

onMounted(() => {
  loadExercises();
});
</script>

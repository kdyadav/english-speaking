<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
    <div class="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 border-b border-yellow-200">
        <div class="text-center">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Vocabulary Test</h2>
          <p class="text-sm sm:text-base text-gray-600">Days {{ test.daysRange }}</p>
          <p class="text-xs sm:text-sm text-gray-500 mt-1">
            Pass with {{ test.passingScore }}% or higher to unlock next days
          </p>
        </div>
      </div>

      <!-- Test Content -->
      <div v-if="!showResults" class="p-4 sm:p-6">
        <!-- Progress -->
        <div class="mb-6">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-600">Question {{ currentQuestion + 1 }} of {{ test.questions.length }}</span>
            <span class="text-sm font-medium text-blue-600">{{ Math.round((currentQuestion / test.questions.length) * 100) }}%</span>
          </div>
          <div class="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              class="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300"
              :style="{ width: `${(currentQuestion / test.questions.length) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- Question -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-xl mb-6">
          <p class="text-xs text-gray-500 mb-2">Translate to English:</p>
          <p class="text-xl sm:text-2xl text-gray-800 font-medium">
            {{ test.questions[currentQuestion].hindi }}
          </p>
        </div>

        <!-- Options -->
        <div class="space-y-3">
          <button
            v-for="(option, index) in test.questions[currentQuestion].options"
            :key="index"
            @click="selectAnswer(option)"
            :disabled="answered"
            :class="[
              'w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200',
              answered && option === test.questions[currentQuestion].correctAnswer
                ? 'bg-green-100 border-green-500 text-green-800'
                : answered && option === selectedAnswer && option !== test.questions[currentQuestion].correctAnswer
                ? 'bg-red-100 border-red-500 text-red-800'
                : !answered
                ? 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                : 'bg-white border-gray-300 text-gray-400'
            ]"
          >
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-sm flex-shrink-0">
                {{ String.fromCharCode(65 + index) }}
              </span>
              <span class="font-medium text-sm sm:text-base">{{ option }}</span>
              <span v-if="answered && option === test.questions[currentQuestion].correctAnswer" class="ml-auto text-xl">
                ✓
              </span>
              <span v-if="answered && option === selectedAnswer && option !== test.questions[currentQuestion].correctAnswer" class="ml-auto text-xl">
                ✗
              </span>
            </div>
          </button>
        </div>

        <!-- Feedback -->
        <div v-if="answered" class="mt-6 p-4 rounded-lg" :class="isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-bold" :class="isCorrect ? 'text-green-800' : 'text-red-800'">
            {{ isCorrect ? '✓ Correct!' : '✗ Incorrect' }}
          </p>
          <p v-if="!isCorrect" class="text-sm mt-2 text-gray-700">
            Correct answer: <strong>{{ test.questions[currentQuestion].correctAnswer }}</strong>
          </p>
        </div>

        <!-- Next Button -->
        <button
          v-if="answered"
          @click="nextQuestion"
          class="btn-primary w-full mt-6"
        >
          {{ currentQuestion < test.questions.length - 1 ? 'Next Question →' : 'See Results' }}
        </button>
      </div>

      <!-- Results -->
      <div v-else class="p-6 sm:p-8">
        <div class="text-center">
          <div class="text-6xl sm:text-7xl mb-4">
            {{ passed ? '🎉' : '😔' }}
          </div>
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            {{ passed ? 'Congratulations!' : 'Keep Learning!' }}
          </h3>
          
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-xl inline-block mb-6">
            <p class="text-5xl sm:text-6xl font-bold mb-2" :class="passed ? 'text-green-600' : 'text-red-600'">
              {{ scorePercentage }}%
            </p>
            <p class="text-gray-600">{{ score }} out of {{ test.questions.length }} correct</p>
          </div>

          <div class="space-y-3">
            <p class="text-sm sm:text-base text-gray-700 mb-4">
              {{ passed 
                ? `Great job! You've unlocked the next set of days.` 
                : `You need ${test.passingScore}% to pass. Review the words and try again!` 
              }}
            </p>
            
            <button 
              v-if="passed"
              @click="complete"
              class="btn-primary w-full max-w-sm mx-auto block"
            >
              Continue Learning
            </button>
            <button 
              v-else
              @click="retryTest"
              class="btn-primary w-full max-w-sm mx-auto block"
            >
              Try Again
            </button>
            <button 
              @click="$emit('close')"
              class="btn-secondary w-full max-w-sm mx-auto block"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  test: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'complete']);

const currentQuestion = ref(0);
const selectedAnswer = ref(null);
const answered = ref(false);
const answers = ref([]);
const showResults = ref(false);

const score = computed(() => {
  return answers.value.filter(a => a.correct).length;
});

const scorePercentage = computed(() => {
  return Math.round((score.value / props.test.questions.length) * 100);
});

const passed = computed(() => {
  return scorePercentage.value >= props.test.passingScore;
});

const isCorrect = computed(() => {
  return selectedAnswer.value === props.test.questions[currentQuestion.value].correctAnswer;
});

const selectAnswer = (answer) => {
  if (answered.value) return;
  
  selectedAnswer.value = answer;
  answered.value = true;
  
  answers.value.push({
    question: currentQuestion.value,
    answer: answer,
    correct: answer === props.test.questions[currentQuestion.value].correctAnswer
  });
};

const nextQuestion = () => {
  if (currentQuestion.value < props.test.questions.length - 1) {
    currentQuestion.value++;
    selectedAnswer.value = null;
    answered.value = false;
  } else {
    showResults.value = true;
  }
};

const retryTest = () => {
  currentQuestion.value = 0;
  selectedAnswer.value = null;
  answered.value = false;
  answers.value = [];
  showResults.value = false;
};

const complete = () => {
  emit('complete', {
    passed: passed.value,
    score: score.value,
    total: props.test.questions.length,
    percentage: scorePercentage.value
  });
};
</script>

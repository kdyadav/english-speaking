<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-start z-10">
        <div class="flex-1 min-w-0 pr-2">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{{ dayData.title }}</h2>
          <p class="text-sm sm:text-base text-blue-600 mt-1">{{ dayData.words.length }} words to learn</p>
        </div>
        <button 
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-600 transition p-1 -mr-1 flex-shrink-0"
        >
          <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Search Bar -->
      <div class="p-4 sm:p-6 border-b border-gray-200">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search words..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Words List -->
      <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div
          v-for="(word, index) in filteredWords"
          :key="index"
          class="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start gap-3 sm:gap-4">
            <!-- Number Badge -->
            <span class="bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
              {{ index + 1 }}
            </span>
            
            <!-- Word Content -->
            <div class="flex-1 min-w-0">
              <!-- English and Hindi -->
              <div class="mb-2 sm:mb-3">
                <h3 class="text-lg sm:text-xl font-bold text-gray-800">{{ word.english }}</h3>
                <p class="text-base sm:text-lg text-blue-600 font-medium">{{ word.hindi }}</p>
              </div>

              <!-- Examples -->
              <div class="space-y-2">
                <div class="bg-white p-2.5 sm:p-3 rounded-lg">
                  <p class="text-xs text-gray-500 mb-1">English Example:</p>
                  <p class="text-sm sm:text-base text-gray-800">{{ word.example }}</p>
                </div>
                <div class="bg-white p-2.5 sm:p-3 rounded-lg">
                  <p class="text-xs text-gray-500 mb-1">Hindi Example:</p>
                  <p class="text-sm sm:text-base text-gray-700">{{ word.hindiExample }}</p>
                </div>
              </div>

              <!-- Audio Button (placeholder for future feature) -->
              <button 
                @click="speakWord(word.english)"
                class="mt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                </svg>
                Listen
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-6">
        <div class="flex gap-3">
          <button @click="$emit('close')" class="btn-secondary flex-1">
            Close
          </button>
          <button class="btn-primary flex-1">
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  dayData: {
    type: Object,
    required: true
  }
});

defineEmits(['close']);

const searchQuery = ref('');

const filteredWords = computed(() => {
  if (!searchQuery.value) return props.dayData.words;
  
  const query = searchQuery.value.toLowerCase();
  return props.dayData.words.filter(word => 
    word.english.toLowerCase().includes(query) ||
    word.hindi.includes(query) ||
    word.example.toLowerCase().includes(query)
  );
});

const speakWord = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  } else {
    alert('Text-to-speech is not supported in your browser.');
  }
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-start">
        <div class="flex-1 min-w-0 pr-2">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{{ tense.name }}</h2>
          <p class="text-sm sm:text-base md:text-lg text-blue-600 font-medium mt-1">{{ tense.hindiName }}</p>
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

      <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <!-- Formula Section -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-xl">
          <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-3">📝 Formula</h3>
          <div class="bg-white p-3 sm:p-4 rounded-lg">
            <p class="font-mono text-sm sm:text-base md:text-lg text-gray-800 break-words">{{ tense.formula }}</p>
            <p class="text-gray-600 mt-2">{{ tense.hindiFormula }}</p>
          </div>
        </div>

        <!-- Usage Section -->
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl">
          <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-3">💡 When to Use</h3>
          <p class="text-sm sm:text-base text-gray-800">{{ tense.usage }}</p>
          <p class="text-gray-600 mt-2">{{ tense.hindiUsage }}</p>
        </div>

        <!-- Examples Section -->
        <div>
          <h3 class="text-lg font-bold text-gray-800 mb-4">📚 Examples</h3>
          <div class="space-y-4">
            <div 
              v-for="(example, index) in tense.examples" 
              :key="index"
              class="bg-gray-50 p-5 rounded-xl border border-gray-200"
            >
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {{ index + 1 }}
                </span>
                <div class="flex-1 min-w-0">
                  <p class="text-sm sm:text-base md:text-lg text-gray-800 font-medium">{{ example.english }}</p>
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

        <!-- Quick Practice -->
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl">
          <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-3">✍️ Quick Practice</h3>
          <p class="text-gray-600 text-sm mb-4">Switch to Practice mode to test your knowledge!</p>
          <button 
            @click="$emit('close')" 
            class="btn-primary w-full"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tense: {
    type: Object,
    required: true
  }
});

defineEmits(['close']);
</script>

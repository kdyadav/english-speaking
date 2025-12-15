# 🇮🇳 English Tenses Learning App

A modern, interactive Vue 3 application with Tailwind CSS designed to help Hindi speakers learn English tenses through translation exercises and comprehensive examples.

## Features

### 📚 Learn Mode

- **6 Major Tenses** covered:

  - Simple Present (सामान्य वर्तमान काल)
  - Present Continuous (अपूर्ण वर्तमान काल)
  - Simple Past (सामान्य भूतकाल)
  - Past Continuous (अपूर्ण भूतकाल)
  - Simple Future (सामान्य भविष्य काल)
  - Present Perfect (पूर्ण वर्तमान काल)

- **Detailed Information** for each tense:
  - Formula in English and Hindi
  - Usage guidelines
  - Multiple examples with Hindi translations
  - Word-by-word breakdown

### ✍️ Practice Mode

- Interactive quiz with multiple-choice questions
- Hindi to English translation exercises
- Instant feedback on answers
- Progress tracking
- Score summary

## Tech Stack

- **Vue 3** - Composition API with `<script setup>`
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **JavaScript** - Logic

## Getting Started

### Prerequisites

- Node.js (v20.19+ recommended)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── TensesList.vue      # Grid view of all tenses
│   ├── TenseDetail.vue     # Detailed view of a single tense
│   └── PracticeMode.vue    # Interactive quiz component
├── data/
│   └── tensesData.js       # Tense data with examples
├── App.vue                  # Main application component
├── main.js                  # Application entry point
└── style.css               # Global styles with Tailwind
```

## Usage

1. **Learn Mode**: Browse through different tenses, click on any tense card to see detailed examples and explanations
2. **Practice Mode**: Test your knowledge by translating Hindi sentences to English
3. Switch between modes using the navigation buttons

## Color Scheme

The app uses a modern gradient color scheme:

- Primary: Blue to Purple gradient
- Backgrounds: Soft blue, indigo, and purple tones
- Accents: Green for correct answers, Red for incorrect

## Future Enhancements

- More tenses (Present Perfect Continuous, Past Perfect, etc.)
- Audio pronunciation
- Spaced repetition system
- User progress tracking
- Custom practice sets
- Offline support

## License

MIT

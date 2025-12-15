export const grammarData = [
    // PARTS OF SPEECH
    {
        id: 'nouns',
        category: 'Parts of Speech',
        name: 'Nouns',
        hindiName: 'संज्ञा',
        icon: '📝',
        description: 'Words that name people, places, things, or ideas',
        hindiDescription: 'व्यक्ति, स्थान, वस्तु या विचार का नाम',
        rules: [
            {
                title: 'Proper Nouns',
                hindi: 'व्यक्तिवाचक संज्ञा',
                explanation: 'Specific names of people, places, or organizations (always capitalized)',
                hindiExplanation: 'व्यक्ति, स्थान या संगठन के विशिष्ट नाम (हमेशा बड़े अक्षर से)',
                examples: ['Ram', 'Delhi', 'Microsoft', 'Taj Mahal']
            },
            {
                title: 'Common Nouns',
                hindi: 'जातिवाचक संज्ञा',
                explanation: 'General names for things, people, or places',
                hindiExplanation: 'वस्तुओं, लोगों या स्थानों के सामान्य नाम',
                examples: ['boy', 'city', 'company', 'monument']
            },
            {
                title: 'Collective Nouns',
                hindi: 'समूहवाचक संज्ञा',
                explanation: 'Names for groups or collections',
                hindiExplanation: 'समूह या संग्रह के नाम',
                examples: ['team', 'family', 'crowd', 'flock', 'bunch']
            },
            {
                title: 'Abstract Nouns',
                hindi: 'भाववाचक संज्ञा',
                explanation: 'Names for ideas, qualities, or states',
                hindiExplanation: 'विचारों, गुणों या अवस्थाओं के नाम',
                examples: ['happiness', 'freedom', 'love', 'courage']
            }
        ],
        examples: [
            {
                english: 'The teacher gave us homework.',
                hindi: 'शिक्षक ने हमें होमवर्क दिया।',
                breakdown: 'teacher (common noun), homework (abstract noun)'
            },
            {
                english: 'My family lives in Mumbai.',
                hindi: 'मेरा परिवार मुंबई में रहता है।',
                breakdown: 'family (collective noun), Mumbai (proper noun)'
            }
        ],
        exercises: [
            {
                question: 'Identify the type of noun: "Honesty is the best policy."',
                hindi: 'संज्ञा का प्रकार पहचानें: "ईमानदारी सबसे अच्छी नीति है।"',
                correctAnswer: 'Abstract Noun',
                options: ['Proper Noun', 'Common Noun', 'Abstract Noun', 'Collective Noun']
            },
            {
                question: 'Which is a collective noun?',
                hindi: 'समूहवाचक संज्ञा कौन सी है?',
                correctAnswer: 'A flock of birds',
                options: ['A big bird', 'A flock of birds', 'A beautiful bird', 'A flying bird']
            }
        ]
    },
    {
        id: 'pronouns',
        category: 'Parts of Speech',
        name: 'Pronouns',
        hindiName: 'सर्वनाम',
        icon: '👤',
        description: 'Words that replace nouns',
        hindiDescription: 'संज्ञा के स्थान पर प्रयुक्त शब्द',
        rules: [
            {
                title: 'Personal Pronouns',
                hindi: 'पुरुषवाचक सर्वनाम',
                explanation: 'I, you, he, she, it, we, they',
                hindiExplanation: 'मैं, तुम, वह, हम, वे',
                examples: ['I am going.', 'She loves music.', 'They are students.']
            },
            {
                title: 'Possessive Pronouns',
                hindi: 'स्वामित्व सर्वनाम',
                explanation: 'mine, yours, his, hers, ours, theirs',
                hindiExplanation: 'मेरा, तुम्हारा, उसका, हमारा',
                examples: ['This book is mine.', 'That car is theirs.']
            },
            {
                title: 'Reflexive Pronouns',
                hindi: 'निजवाचक सर्वनाम',
                explanation: 'myself, yourself, himself, herself, itself, ourselves, themselves',
                hindiExplanation: 'स्वयं, खुद',
                examples: ['I did it myself.', 'She hurt herself.']
            },
            {
                title: 'Demonstrative Pronouns',
                hindi: 'संकेतवाचक सर्वनाम',
                explanation: 'this, that, these, those',
                hindiExplanation: 'यह, वह, ये, वे',
                examples: ['This is my house.', 'Those are beautiful flowers.']
            }
        ],
        examples: [
            {
                english: 'She completed the work herself.',
                hindi: 'उसने काम खुद पूरा किया।',
                breakdown: 'She (personal pronoun), herself (reflexive pronoun)'
            },
            {
                english: 'This is mine, not yours.',
                hindi: 'यह मेरा है, तुम्हारा नहीं।',
                breakdown: 'This (demonstrative), mine/yours (possessive)'
            }
        ],
        exercises: [
            {
                question: 'Choose the correct pronoun: "The book is ___."',
                hindi: 'सही सर्वनाम चुनें',
                correctAnswer: 'mine',
                options: ['my', 'mine', 'me', 'I']
            }
        ]
    },
    {
        id: 'adjectives',
        category: 'Parts of Speech',
        name: 'Adjectives',
        hindiName: 'विशेषण',
        icon: '🎨',
        description: 'Words that describe nouns',
        hindiDescription: 'संज्ञा की विशेषता बताने वाले शब्द',
        rules: [
            {
                title: 'Positive Degree',
                hindi: 'मूल अवस्था',
                explanation: 'Basic form of adjective',
                hindiExplanation: 'विशेषण का मूल रूप',
                examples: ['tall', 'beautiful', 'good', 'fast']
            },
            {
                title: 'Comparative Degree',
                hindi: 'तुलनात्मक अवस्था',
                explanation: 'Used to compare two things (add -er or use "more")',
                hindiExplanation: 'दो चीजों की तुलना के लिए',
                examples: ['taller', 'more beautiful', 'better', 'faster']
            },
            {
                title: 'Superlative Degree',
                hindi: 'उत्तम अवस्था',
                explanation: 'Used for highest degree (add -est or use "most")',
                hindiExplanation: 'सबसे उच्च स्तर के लिए',
                examples: ['tallest', 'most beautiful', 'best', 'fastest']
            }
        ],
        examples: [
            {
                english: 'This is the tallest building in the city.',
                hindi: 'यह शहर की सबसे ऊंची इमारत है।',
                breakdown: 'tallest (superlative adjective)'
            },
            {
                english: 'She is more intelligent than her brother.',
                hindi: 'वह अपने भाई से अधिक बुद्धिमान है।',
                breakdown: 'more intelligent (comparative adjective)'
            }
        ],
        exercises: [
            {
                question: 'Choose the correct form: "This is the ___ movie I have ever seen."',
                hindi: 'सही रूप चुनें',
                correctAnswer: 'best',
                options: ['good', 'better', 'best', 'more good']
            }
        ]
    },
    {
        id: 'adverbs',
        category: 'Parts of Speech',
        name: 'Adverbs',
        hindiName: 'क्रियाविशेषण',
        icon: '⚡',
        description: 'Words that describe verbs, adjectives, or other adverbs',
        hindiDescription: 'क्रिया, विशेषण या अन्य क्रियाविशेषण की विशेषता बताने वाले शब्द',
        rules: [
            {
                title: 'Adverbs of Manner',
                hindi: 'रीतिवाचक क्रियाविशेषण',
                explanation: 'How something happens (usually end in -ly)',
                hindiExplanation: 'कैसे होता है',
                examples: ['quickly', 'slowly', 'carefully', 'beautifully']
            },
            {
                title: 'Adverbs of Time',
                hindi: 'कालवाचक क्रियाविशेषण',
                explanation: 'When something happens',
                hindiExplanation: 'कब होता है',
                examples: ['now', 'yesterday', 'soon', 'always', 'never']
            },
            {
                title: 'Adverbs of Place',
                hindi: 'स्थानवाचक क्रियाविशेषण',
                explanation: 'Where something happens',
                hindiExplanation: 'कहाँ होता है',
                examples: ['here', 'there', 'everywhere', 'outside']
            },
            {
                title: 'Adverbs of Frequency',
                hindi: 'आवृत्तिवाचक क्रियाविशेषण',
                explanation: 'How often something happens',
                hindiExplanation: 'कितनी बार होता है',
                examples: ['always', 'usually', 'sometimes', 'rarely', 'never']
            }
        ],
        examples: [
            {
                english: 'She sings beautifully.',
                hindi: 'वह सुंदर तरीके से गाती है।',
                breakdown: 'beautifully (adverb of manner)'
            },
            {
                english: 'I always wake up early.',
                hindi: 'मैं हमेशा जल्दी उठता हूँ।',
                breakdown: 'always (adverb of frequency), early (adverb of time)'
            }
        ],
        exercises: [
            {
                question: 'Identify the adverb: "He runs very fast."',
                hindi: 'क्रियाविशेषण पहचानें',
                correctAnswer: 'fast',
                options: ['He', 'runs', 'very', 'fast']
            }
        ]
    },
    {
        id: 'prepositions',
        category: 'Parts of Speech',
        name: 'Prepositions',
        hindiName: 'संबंधसूचक अव्यय',
        icon: '🔗',
        description: 'Words that show relationship between nouns/pronouns and other words',
        hindiDescription: 'संज्ञा/सर्वनाम और अन्य शब्दों के बीच संबंध दिखाने वाले शब्द',
        rules: [
            {
                title: 'Prepositions of Time',
                hindi: 'समय के संबंधसूचक',
                explanation: 'at, on, in, by, for, since, during',
                hindiExplanation: 'समय दर्शाने के लिए',
                examples: ['at 5 PM', 'on Monday', 'in January', 'since 2020']
            },
            {
                title: 'Prepositions of Place',
                hindi: 'स्थान के संबंधसूचक',
                explanation: 'at, on, in, above, below, beside, between',
                hindiExplanation: 'स्थान दर्शाने के लिए',
                examples: ['at home', 'on the table', 'in the room', 'beside me']
            },
            {
                title: 'Prepositions of Direction',
                hindi: 'दिशा के संबंधसूचक',
                explanation: 'to, from, into, towards, through',
                hindiExplanation: 'दिशा दर्शाने के लिए',
                examples: ['go to school', 'come from Delhi', 'jump into water']
            }
        ],
        examples: [
            {
                english: 'The book is on the table.',
                hindi: 'किताब मेज पर है।',
                breakdown: 'on (preposition of place)'
            },
            {
                english: 'I will meet you at 5 PM.',
                hindi: 'मैं आपसे 5 बजे मिलूंगा।',
                breakdown: 'at (preposition of time)'
            }
        ],
        exercises: [
            {
                question: 'Choose the correct preposition: "I have been waiting ___ two hours."',
                hindi: 'सही संबंधसूचक चुनें',
                correctAnswer: 'for',
                options: ['since', 'for', 'from', 'at']
            }
        ]
    },
    {
        id: 'articles',
        category: 'Parts of Speech',
        name: 'Articles',
        hindiName: 'उपपद (आर्टिकल)',
        icon: '📰',
        description: 'A, An, The',
        hindiDescription: 'एक, यह/वह (विशिष्ट)',
        rules: [
            {
                title: 'Indefinite Articles (A, An)',
                hindi: 'अनिश्चित उपपद',
                explanation: 'Used for non-specific items. "A" before consonants, "An" before vowels',
                hindiExplanation: 'अनिश्चित वस्तुओं के लिए',
                examples: ['a book', 'an apple', 'a university', 'an hour']
            },
            {
                title: 'Definite Article (The)',
                hindi: 'निश्चित उपपद',
                explanation: 'Used for specific items known to both speaker and listener',
                hindiExplanation: 'निश्चित/विशिष्ट वस्तुओं के लिए',
                examples: ['the book I bought', 'the sun', 'the Taj Mahal']
            }
        ],
        examples: [
            {
                english: 'I saw a dog. The dog was black.',
                hindi: 'मैंने एक कुत्ता देखा। वह कुत्ता काला था।',
                breakdown: 'a (first mention), the (specific dog mentioned before)'
            },
            {
                english: 'She is an honest person.',
                hindi: 'वह एक ईमानदार व्यक्ति है।',
                breakdown: 'an (before vowel sound "o")'
            }
        ],
        exercises: [
            {
                question: 'Choose the correct article: "___ European country"',
                hindi: 'सही आर्टिकल चुनें',
                correctAnswer: 'A',
                options: ['A', 'An', 'The', 'No article']
            }
        ]
    },

    // SENTENCE STRUCTURE
    {
        id: 'subject-verb-agreement',
        category: 'Sentence Structure',
        name: 'Subject-Verb Agreement',
        hindiName: 'कर्ता-क्रिया सहमति',
        icon: '🤝',
        description: 'Subject and verb must agree in number',
        hindiDescription: 'कर्ता और क्रिया में संख्या की सहमति होनी चाहिए',
        rules: [
            {
                title: 'Singular Subject = Singular Verb',
                hindi: 'एकवचन कर्ता = एकवचन क्रिया',
                explanation: 'He/She/It + verb with s/es',
                hindiExplanation: 'वह + s/es वाली क्रिया',
                examples: ['He runs.', 'She goes.', 'It works.']
            },
            {
                title: 'Plural Subject = Plural Verb',
                hindi: 'बहुवचन कर्ता = बहुवचन क्रिया',
                explanation: 'I/You/We/They + base verb',
                hindiExplanation: 'मैं/तुम/हम/वे + मूल क्रिया',
                examples: ['They run.', 'We go.', 'You work.']
            }
        ],
        examples: [
            {
                english: 'The boy plays cricket. The boys play cricket.',
                hindi: 'लड़का क्रिकेट खेलता है। लड़के क्रिकेट खेलते हैं।',
                breakdown: 'Singular vs Plural agreement'
            }
        ],
        exercises: [
            {
                question: 'Choose correct: "The children ___ in the park."',
                hindi: 'सही क्रिया चुनें',
                correctAnswer: 'are playing',
                options: ['is playing', 'are playing', 'plays', 'play']
            }
        ]
    },
    {
        id: 'active-passive-voice',
        category: 'Sentence Structure',
        name: 'Active & Passive Voice',
        hindiName: 'कर्तृवाच्य और कर्मवाच्य',
        icon: '🔄',
        description: 'Two ways to construct sentences',
        hindiDescription: 'वाक्य बनाने के दो तरीके',
        rules: [
            {
                title: 'Active Voice',
                hindi: 'कर्तृवाच्य',
                explanation: 'Subject performs the action: Subject + Verb + Object',
                hindiExplanation: 'कर्ता क्रिया करता है',
                examples: ['Ram writes a letter.', 'She is reading a book.']
            },
            {
                title: 'Passive Voice',
                hindi: 'कर्मवाच्य',
                explanation: 'Object receives the action: Object + is/am/are + V3 + by Subject',
                hindiExplanation: 'कर्म पर क्रिया का प्रभाव पड़ता है',
                examples: ['A letter is written by Ram.', 'A book is being read by her.']
            }
        ],
        examples: [
            {
                english: 'Active: I eat an apple. Passive: An apple is eaten by me.',
                hindi: 'कर्तृवाच्य: मैं सेब खाता हूँ। कर्मवाच्य: सेब मेरे द्वारा खाया जाता है।',
                breakdown: 'Object becomes subject in passive'
            }
        ],
        exercises: [
            {
                question: 'Convert to passive: "She sings a song."',
                hindi: 'कर्मवाच्य में बदलें',
                correctAnswer: 'A song is sung by her.',
                options: ['A song is sung by her.', 'A song was sung by her.', 'She is singing a song.', 'A song sings by her.']
            }
        ]
    },
    {
        id: 'direct-indirect-speech',
        category: 'Sentence Structure',
        name: 'Direct & Indirect Speech',
        hindiName: 'प्रत्यक्ष और अप्रत्यक्ष कथन',
        icon: '💬',
        description: 'Reporting what someone said',
        hindiDescription: 'किसी के कहे को रिपोर्ट करना',
        rules: [
            {
                title: 'Direct Speech',
                hindi: 'प्रत्यक्ष कथन',
                explanation: 'Exact words in quotation marks',
                hindiExplanation: 'बिल्कुल वही शब्द उद्धरण चिह्नों में',
                examples: ['He said, "I am busy."', 'She said, "I will come tomorrow."']
            },
            {
                title: 'Indirect Speech',
                hindi: 'अप्रत्यक्ष कथन',
                explanation: 'Reported without quotation marks (tense changes)',
                hindiExplanation: 'बिना उद्धरण के रिपोर्ट करना (काल बदलता है)',
                examples: ['He said that he was busy.', 'She said that she would come the next day.']
            }
        ],
        examples: [
            {
                english: 'Direct: Ram said, "I am going." Indirect: Ram said that he was going.',
                hindi: 'प्रत्यक्ष: राम ने कहा, "मैं जा रहा हूँ।" अप्रत्यक्ष: राम ने कहा कि वह जा रहा था।',
                breakdown: 'I → he, am → was'
            }
        ],
        exercises: [
            {
                question: 'Convert to indirect: She said, "I love music."',
                hindi: 'अप्रत्यक्ष में बदलें',
                correctAnswer: 'She said that she loved music.',
                options: ['She said that she loved music.', 'She said that I love music.', 'She said she loves music.', 'She said that she love music.']
            }
        ]
    },
    {
        id: 'conditionals',
        category: 'Sentence Structure',
        name: 'Conditionals (If Clauses)',
        hindiName: 'शर्त वाले वाक्य',
        icon: '❓',
        description: 'Sentences with conditions and results',
        hindiDescription: 'शर्त और परिणाम वाले वाक्य',
        rules: [
            {
                title: 'Zero Conditional',
                hindi: 'शून्य शर्त',
                explanation: 'General truths: If + present, present',
                hindiExplanation: 'सामान्य सत्य',
                examples: ['If you heat water, it boils.', 'If it rains, the ground gets wet.']
            },
            {
                title: 'First Conditional',
                hindi: 'प्रथम शर्त',
                explanation: 'Real future possibility: If + present, will + base verb',
                hindiExplanation: 'भविष्य की वास्तविक संभावना',
                examples: ['If it rains tomorrow, I will stay home.', 'If you study hard, you will pass.']
            },
            {
                title: 'Second Conditional',
                hindi: 'द्वितीय शर्त',
                explanation: 'Unreal present: If + past, would + base verb',
                hindiExplanation: 'वर्तमान की काल्पनिक स्थिति',
                examples: ['If I were rich, I would buy a car.', 'If I had time, I would help you.']
            },
            {
                title: 'Third Conditional',
                hindi: 'तृतीय शर्त',
                explanation: 'Unreal past: If + had + V3, would have + V3',
                hindiExplanation: 'भूतकाल की काल्पनिक स्थिति',
                examples: ['If I had studied, I would have passed.', 'If she had come, we would have met.']
            }
        ],
        examples: [
            {
                english: 'If I see him, I will tell him.',
                hindi: 'अगर मैं उसे देखूंगा, तो मैं उसे बताऊंगा।',
                breakdown: 'First conditional (real future possibility)'
            }
        ],
        exercises: [
            {
                question: 'Choose correct: "If I ___ rich, I would travel the world."',
                hindi: 'सही शब्द चुनें',
                correctAnswer: 'were',
                options: ['am', 'was', 'were', 'will be']
            }
        ]
    },

    // ADVANCED GRAMMAR
    {
        id: 'modal-verbs',
        category: 'Advanced Grammar',
        name: 'Modal Verbs',
        hindiName: 'सहायक क्रिया',
        icon: '🎯',
        description: 'Can, Could, May, Might, Must, Should, Will, Would',
        hindiDescription: 'सकना, चाहिए, होगा आदि',
        rules: [
            {
                title: 'Can / Could',
                hindi: 'सकना / सकता था',
                explanation: 'Ability, possibility, permission',
                hindiExplanation: 'योग्यता, संभावना, अनुमति',
                examples: ['I can swim.', 'Could you help me?', 'Can I go now?']
            },
            {
                title: 'May / Might',
                hindi: 'शायद / हो सकता है',
                explanation: 'Permission, possibility',
                hindiExplanation: 'अनुमति, संभावना',
                examples: ['May I come in?', 'It might rain today.']
            },
            {
                title: 'Must / Should',
                hindi: 'ज़रूरी है / चाहिए',
                explanation: 'Obligation, advice, recommendation',
                hindiExplanation: 'अनिवार्यता, सलाह',
                examples: ['You must follow rules.', 'You should exercise daily.']
            },
            {
                title: 'Will / Would',
                hindi: 'होगा / होता',
                explanation: 'Future, promises, polite requests',
                hindiExplanation: 'भविष्य, वादे, विनम्र निवेदन',
                examples: ['I will help you.', 'Would you like tea?']
            }
        ],
        examples: [
            {
                english: 'You should study regularly.',
                hindi: 'आपको नियमित रूप से अध्ययन करना चाहिए।',
                breakdown: 'should (advice/recommendation)'
            }
        ],
        exercises: [
            {
                question: 'Choose correct: "You ___ wear a seatbelt while driving."',
                hindi: 'सही शब्द चुनें',
                correctAnswer: 'must',
                options: ['can', 'may', 'must', 'might']
            }
        ]
    },
    {
        id: 'phrasal-verbs',
        category: 'Advanced Grammar',
        name: 'Phrasal Verbs',
        hindiName: 'मुहावरेदार क्रियाएँ',
        icon: '🔤',
        description: 'Verb + Preposition/Adverb combinations',
        hindiDescription: 'क्रिया + पूर्वसर्ग संयोजन',
        rules: [
            {
                title: 'Common Phrasal Verbs',
                hindi: 'आम मुहावरेदार क्रियाएँ',
                explanation: 'Verbs that change meaning when combined with prepositions',
                hindiExplanation: 'जब क्रिया पूर्वसर्ग के साथ जुड़ती है तो अर्थ बदल जाता है',
                examples: [
                    'look up = search (खोजना)',
                    'give up = quit (छोड़ देना)',
                    'put off = postpone (स्थगित करना)',
                    'turn on/off = switch on/off (चालू/बंद करना)',
                    'get up = wake up (उठना)',
                    'take off = remove (उतारना)',
                    'break down = stop working (खराब होना)',
                    'run into = meet by chance (अचानक मिलना)',
                    'come across = find by chance (अचानक मिलना)',
                    'carry on = continue (जारी रखना)'
                ]
            }
        ],
        examples: [
            {
                english: 'I ran into my old friend yesterday.',
                hindi: 'मैं कल अपने पुराने दोस्त से अचानक मिला।',
                breakdown: 'ran into = met by chance'
            },
            {
                english: 'Don\'t give up on your dreams.',
                hindi: 'अपने सपनों को मत छोड़ो।',
                breakdown: 'give up = quit, abandon'
            }
        ],
        exercises: [
            {
                question: 'What does "look after" mean?',
                hindi: '"look after" का अर्थ क्या है?',
                correctAnswer: 'Take care of',
                options: ['Search for', 'Take care of', 'Look at', 'Find']
            }
        ]
    },
    {
        id: 'gerunds-infinitives',
        category: 'Advanced Grammar',
        name: 'Gerunds & Infinitives',
        hindiName: 'क्रियावाचक संज्ञा',
        icon: '⚙️',
        description: 'Verb forms used as nouns',
        hindiDescription: 'संज्ञा के रूप में प्रयुक्त क्रिया रूप',
        rules: [
            {
                title: 'Gerund (Verb + ing)',
                hindi: 'क्रियावाचक संज्ञा (-ing)',
                explanation: 'Used after: enjoy, finish, avoid, mind, practice, suggest',
                hindiExplanation: 'इन क्रियाओं के बाद: आनंद लेना, समाप्त करना, टालना',
                examples: ['I enjoy reading.', 'She finished cooking.', 'Avoid smoking.']
            },
            {
                title: 'Infinitive (to + Verb)',
                hindi: 'क्रिया का मूल रूप (to +)',
                explanation: 'Used after: want, decide, plan, hope, promise, need',
                hindiExplanation: 'इन क्रियाओं के बाद: चाहना, निर्णय लेना, योजना',
                examples: ['I want to learn.', 'She decided to go.', 'We plan to travel.']
            },
            {
                title: 'Both Gerund & Infinitive',
                hindi: 'दोनों के साथ',
                explanation: 'Some verbs accept both: start, begin, like, love, hate',
                hindiExplanation: 'कुछ क्रियाएँ दोनों स्वीकार करती हैं',
                examples: ['I like reading/to read.', 'She started singing/to sing.']
            }
        ],
        examples: [
            {
                english: 'I enjoy swimming but I want to learn dancing.',
                hindi: 'मुझे तैरना पसंद है लेकिन मैं नृत्य सीखना चाहता हूँ।',
                breakdown: 'enjoy + gerund, want + infinitive'
            }
        ],
        exercises: [
            {
                question: 'Choose correct: "I decided ___ English."',
                hindi: 'सही रूप चुनें',
                correctAnswer: 'to learn',
                options: ['learning', 'to learn', 'learn', 'learned']
            }
        ]
    },
    {
        id: 'question-tags',
        category: 'Advanced Grammar',
        name: 'Question Tags',
        hindiName: 'प्रश्नसूचक पूँछ',
        icon: '🏷️',
        description: 'Short questions at the end of statements',
        hindiDescription: 'वाक्य के अंत में छोटे प्रश्न',
        rules: [
            {
                title: 'Positive Statement → Negative Tag',
                hindi: 'सकारात्मक वाक्य → नकारात्मक पूँछ',
                explanation: 'If statement is positive, tag is negative',
                hindiExplanation: 'यदि वाक्य सकारात्मक है, तो पूँछ नकारात्मक होगी',
                examples: ['You are coming, aren\'t you?', 'He can swim, can\'t he?']
            },
            {
                title: 'Negative Statement → Positive Tag',
                hindi: 'नकारात्मक वाक्य → सकारात्मक पूँछ',
                explanation: 'If statement is negative, tag is positive',
                hindiExplanation: 'यदि वाक्य नकारात्मक है, तो पूँछ सकारात्मक होगी',
                examples: ['You aren\'t coming, are you?', 'He can\'t swim, can he?']
            }
        ],
        examples: [
            {
                english: 'She is a teacher, isn\'t she?',
                hindi: 'वह एक शिक्षिका है, है ना?',
                breakdown: 'Positive statement + negative tag'
            },
            {
                english: 'They don\'t like coffee, do they?',
                hindi: 'उन्हें कॉफी पसंद नहीं है, है क्या?',
                breakdown: 'Negative statement + positive tag'
            }
        ],
        exercises: [
            {
                question: 'Add question tag: "You will help me, ___?"',
                hindi: 'प्रश्नसूचक पूँछ जोड़ें',
                correctAnswer: 'won\'t you',
                options: ['will you', 'won\'t you', 'don\'t you', 'aren\'t you']
            }
        ]
    },

    // COMMON MISTAKES & RULES
    {
        id: 'common-confusions',
        category: 'Common Mistakes',
        name: 'Common Confusions',
        hindiName: 'आम गलतियाँ',
        icon: '⚠️',
        description: 'Words that are often confused',
        hindiDescription: 'अक्सर भ्रमित होने वाले शब्द',
        rules: [
            {
                title: 'Its vs It\'s',
                hindi: 'Its बनाम It\'s',
                explanation: 'Its = possessive (इसका) | It\'s = it is (यह है)',
                hindiExplanation: 'Its = स्वामित्व | It\'s = यह है',
                examples: ['The dog wagged its tail.', 'It\'s a beautiful day.']
            },
            {
                title: 'Their vs There vs They\'re',
                hindi: 'Their बनाम There बनाम They\'re',
                explanation: 'Their = possessive | There = place | They\'re = they are',
                hindiExplanation: 'Their = उनका | There = वहाँ | They\'re = वे हैं',
                examples: ['Their house is big.', 'Go there.', 'They\'re coming.']
            },
            {
                title: 'Your vs You\'re',
                hindi: 'Your बनाम You\'re',
                explanation: 'Your = possessive (तुम्हारा) | You\'re = you are (तुम हो)',
                hindiExplanation: 'Your = तुम्हारा | You\'re = तुम हो',
                examples: ['Your book is here.', 'You\'re very kind.']
            },
            {
                title: 'Then vs Than',
                hindi: 'Then बनाम Than',
                explanation: 'Then = time (तब/फिर) | Than = comparison (से)',
                hindiExplanation: 'Then = समय | Than = तुलना',
                examples: ['First eat, then sleep.', 'He is taller than me.']
            }
        ],
        examples: [
            {
                english: 'They\'re going to their house over there.',
                hindi: 'वे वहाँ अपने घर जा रहे हैं।',
                breakdown: 'They\'re (they are), their (possessive), there (place)'
            }
        ],
        exercises: [
            {
                question: 'Choose correct: "___ a beautiful day today."',
                hindi: 'सही शब्द चुनें',
                correctAnswer: 'It\'s',
                options: ['Its', 'It\'s', 'Its\'', 'It']
            }
        ]
    },
    {
        id: 'countable-uncountable',
        category: 'Common Mistakes',
        name: 'Countable & Uncountable Nouns',
        hindiName: 'गणनीय और अगणनीय संज्ञा',
        icon: '🔢',
        description: 'Nouns you can count vs cannot count',
        hindiDescription: 'जो गिन सकते हैं बनाम नहीं गिन सकते',
        rules: [
            {
                title: 'Countable Nouns',
                hindi: 'गणनीय संज्ञा',
                explanation: 'Can be counted, have plural forms',
                hindiExplanation: 'गिने जा सकते हैं, बहुवचन रूप होते हैं',
                examples: ['one book, two books', 'an apple, three apples', 'a chair, many chairs']
            },
            {
                title: 'Uncountable Nouns',
                hindi: 'अगणनीय संज्ञा',
                explanation: 'Cannot be counted, no plural form',
                hindiExplanation: 'गिने नहीं जा सकते, बहुवचन नहीं',
                examples: ['water (not waters)', 'rice', 'information', 'advice', 'furniture']
            },
            {
                title: 'Use "much" with uncountable',
                hindi: 'अगणनीय के साथ "much"',
                explanation: 'much water, much time, much money',
                hindiExplanation: 'बहुत पानी, बहुत समय, बहुत पैसा',
                examples: ['How much water?', 'Not much time.']
            },
            {
                title: 'Use "many" with countable',
                hindi: 'गणनीय के साथ "many"',
                explanation: 'many books, many people, many chairs',
                hindiExplanation: 'कई किताबें, कई लोग, कई कुर्सियाँ',
                examples: ['How many books?', 'So many people.']
            }
        ],
        examples: [
            {
                english: 'I need some information and many books.',
                hindi: 'मुझे कुछ जानकारी और कई किताबें चाहिए।',
                breakdown: 'information (uncountable), books (countable)'
            }
        ],
        exercises: [
            {
                question: 'Choose correct: "How ___ money do you need?"',
                hindi: 'सही शब्द चुनें',
                correctAnswer: 'much',
                options: ['many', 'much', 'few', 'lot']
            }
        ]
    },
    {
        id: 'some-any',
        category: 'Common Mistakes',
        name: 'Some vs Any',
        hindiName: 'Some बनाम Any',
        icon: '🎲',
        description: 'When to use Some and when to use Any',
        hindiDescription: 'Some और Any का प्रयोग कब करें',
        rules: [
            {
                title: 'Some',
                hindi: 'कुछ (सकारात्मक)',
                explanation: 'Used in positive sentences and offers/requests',
                hindiExplanation: 'सकारात्मक वाक्यों और प्रस्ताव/निवेदन में',
                examples: ['I have some money.', 'Would you like some tea?', 'Can I have some water?']
            },
            {
                title: 'Any',
                hindi: 'कोई (नकारात्मक/प्रश्नवाचक)',
                explanation: 'Used in negative sentences and questions',
                hindiExplanation: 'नकारात्मक वाक्यों और प्रश्नों में',
                examples: ['I don\'t have any money.', 'Do you have any questions?', 'Is there any milk?']
            }
        ],
        examples: [
            {
                english: 'I have some friends, but I don\'t have any enemies.',
                hindi: 'मेरे कुछ दोस्त हैं, लेकिन मेरा कोई दुश्मन नहीं है।',
                breakdown: 'some (positive), any (negative)'
            }
        ],
        exercises: [
            {
                question: 'Choose correct: "Do you have ___ questions?"',
                hindi: 'सही शब्द चुनें',
                correctAnswer: 'any',
                options: ['some', 'any', 'much', 'many']
            }
        ]
    }
];

// Helper function to get categories
export const getCategories = () => {
    const categories = [...new Set(grammarData.map(item => item.category))];
    return categories;
};

// Helper function to get topics by category
export const getTopicsByCategory = (category) => {
    return grammarData.filter(item => item.category === category);
};

// Helper function to get topic by id
export const getTopicById = (id) => {
    return grammarData.find(item => item.id === id);
};

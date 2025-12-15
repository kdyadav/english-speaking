export const tensesData = [
    {
        id: 1,
        name: 'Simple Present',
        hindiName: 'सामान्य वर्तमान काल',
        formula: 'Subject + V1 (s/es)',
        hindiFormula: 'कर्ता + क्रिया का पहला रूप',
        usage: 'For habitual actions, general truths, and facts',
        hindiUsage: 'आदतन कार्यों, सामान्य सत्य और तथ्यों के लिए',
        examples: [
            {
                english: 'I go to school every day.',
                hindi: 'मैं हर दिन स्कूल जाता हूँ।',
                breakdown: 'I (मैं) + go (जाता हूँ) + to school (स्कूल) + every day (हर दिन)'
            },
            {
                english: 'She reads books.',
                hindi: 'वह किताबें पढ़ती है।',
                breakdown: 'She (वह) + reads (पढ़ती है) + books (किताबें)'
            },
            {
                english: 'The sun rises in the east.',
                hindi: 'सूरज पूर्व में उगता है।',
                breakdown: 'The sun (सूरज) + rises (उगता है) + in the east (पूर्व में)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं रोज़ व्यायाम करता हूँ।',
                correctAnswer: 'I exercise every day.',
                options: [
                    'I exercise every day.',
                    'I am exercising every day.',
                    'I exercised every day.',
                    'I will exercise every day.'
                ]
            },
            {
                hindi: 'वह अंग्रेजी बोलता है।',
                correctAnswer: 'He speaks English.',
                options: [
                    'He speaks English.',
                    'He is speaking English.',
                    'He spoke English.',
                    'He will speak English.'
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Present Continuous',
        hindiName: 'अपूर्ण वर्तमान काल',
        formula: 'Subject + is/am/are + V1 + ing',
        hindiFormula: 'कर्ता + is/am/are + क्रिया + रहा/रही/रहे हूँ/है/हैं',
        usage: 'For actions happening right now',
        hindiUsage: 'अभी हो रहे कार्यों के लिए',
        examples: [
            {
                english: 'I am studying now.',
                hindi: 'मैं अभी पढ़ रहा हूँ।',
                breakdown: 'I (मैं) + am studying (पढ़ रहा हूँ) + now (अभी)'
            },
            {
                english: 'She is cooking food.',
                hindi: 'वह खाना बना रही है।',
                breakdown: 'She (वह) + is cooking (बना रही है) + food (खाना)'
            },
            {
                english: 'They are playing cricket.',
                hindi: 'वे क्रिकेट खेल रहे हैं।',
                breakdown: 'They (वे) + are playing (खेल रहे हैं) + cricket (क्रिकेट)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं अभी टीवी देख रहा हूँ।',
                correctAnswer: 'I am watching TV now.',
                options: [
                    'I am watching TV now.',
                    'I watch TV now.',
                    'I watched TV now.',
                    'I will watch TV now.'
                ]
            },
            {
                hindi: 'वे गाना गा रहे हैं।',
                correctAnswer: 'They are singing a song.',
                options: [
                    'They are singing a song.',
                    'They sing a song.',
                    'They sang a song.',
                    'They will sing a song.'
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Simple Past',
        hindiName: 'सामान्य भूतकाल',
        formula: 'Subject + V2',
        hindiFormula: 'कर्ता + क्रिया का दूसरा रूप',
        usage: 'For completed actions in the past',
        hindiUsage: 'भूतकाल में पूर्ण हुए कार्यों के लिए',
        examples: [
            {
                english: 'I went to the market yesterday.',
                hindi: 'मैं कल बाजार गया था।',
                breakdown: 'I (मैं) + went (गया था) + to the market (बाजार) + yesterday (कल)'
            },
            {
                english: 'She wrote a letter.',
                hindi: 'उसने एक पत्र लिखा।',
                breakdown: 'She (उसने) + wrote (लिखा) + a letter (एक पत्र)'
            },
            {
                english: 'They played football.',
                hindi: 'उन्होंने फुटबॉल खेला।',
                breakdown: 'They (उन्होंने) + played (खेला) + football (फुटबॉल)'
            }
        ],
        exercises: [
            {
                hindi: 'मैंने कल एक फिल्म देखी।',
                correctAnswer: 'I watched a movie yesterday.',
                options: [
                    'I watched a movie yesterday.',
                    'I watch a movie yesterday.',
                    'I am watching a movie yesterday.',
                    'I will watch a movie yesterday.'
                ]
            },
            {
                hindi: 'वह स्कूल गई थी।',
                correctAnswer: 'She went to school.',
                options: [
                    'She went to school.',
                    'She goes to school.',
                    'She is going to school.',
                    'She will go to school.'
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Past Continuous',
        hindiName: 'अपूर्ण भूतकाल',
        formula: 'Subject + was/were + V1 + ing',
        hindiFormula: 'कर्ता + was/were + क्रिया + रहा/रही/रहे था/थी/थे',
        usage: 'For actions that were ongoing in the past',
        hindiUsage: 'भूतकाल में चल रहे कार्यों के लिए',
        examples: [
            {
                english: 'I was reading a book.',
                hindi: 'मैं एक किताब पढ़ रहा था।',
                breakdown: 'I (मैं) + was reading (पढ़ रहा था) + a book (एक किताब)'
            },
            {
                english: 'She was dancing.',
                hindi: 'वह नाच रही थी।',
                breakdown: 'She (वह) + was dancing (नाच रही थी)'
            },
            {
                english: 'They were playing cards.',
                hindi: 'वे ताश खेल रहे थे।',
                breakdown: 'They (वे) + were playing (खेल रहे थे) + cards (ताश)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं सुबह दौड़ रहा था।',
                correctAnswer: 'I was running in the morning.',
                options: [
                    'I was running in the morning.',
                    'I ran in the morning.',
                    'I am running in the morning.',
                    'I run in the morning.'
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Simple Future',
        hindiName: 'सामान्य भविष्य काल',
        formula: 'Subject + will + V1',
        hindiFormula: 'कर्ता + will + क्रिया का पहला रूप',
        usage: 'For actions that will happen in the future',
        hindiUsage: 'भविष्य में होने वाले कार्यों के लिए',
        examples: [
            {
                english: 'I will go to Delhi tomorrow.',
                hindi: 'मैं कल दिल्ली जाऊंगा।',
                breakdown: 'I (मैं) + will go (जाऊंगा) + to Delhi (दिल्ली) + tomorrow (कल)'
            },
            {
                english: 'She will cook dinner.',
                hindi: 'वह रात का खाना बनाएगी।',
                breakdown: 'She (वह) + will cook (बनाएगी) + dinner (रात का खाना)'
            },
            {
                english: 'They will visit us.',
                hindi: 'वे हमसे मिलने आएंगे।',
                breakdown: 'They (वे) + will visit (मिलने आएंगे) + us (हमसे)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं कल तुम्हें कॉल करूंगा।',
                correctAnswer: 'I will call you tomorrow.',
                options: [
                    'I will call you tomorrow.',
                    'I called you tomorrow.',
                    'I am calling you tomorrow.',
                    'I call you tomorrow.'
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Present Perfect',
        hindiName: 'पूर्ण वर्तमान काल',
        formula: 'Subject + has/have + V3',
        hindiFormula: 'कर्ता + has/have + क्रिया का तीसरा रूप',
        usage: 'For actions completed recently or with present relevance',
        hindiUsage: 'हाल ही में पूर्ण हुए कार्यों के लिए',
        examples: [
            {
                english: 'I have finished my homework.',
                hindi: 'मैंने अपना होमवर्क पूरा कर लिया है।',
                breakdown: 'I (मैंने) + have finished (पूरा कर लिया है) + my homework (अपना होमवर्क)'
            },
            {
                english: 'She has eaten breakfast.',
                hindi: 'उसने नाश्ता कर लिया है।',
                breakdown: 'She (उसने) + has eaten (कर लिया है) + breakfast (नाश्ता)'
            },
            {
                english: 'They have arrived.',
                hindi: 'वे आ गए हैं।',
                breakdown: 'They (वे) + have arrived (आ गए हैं)'
            }
        ],
        exercises: [
            {
                hindi: 'मैंने अपना काम खत्म कर दिया है।',
                correctAnswer: 'I have completed my work.',
                options: [
                    'I have completed my work.',
                    'I completed my work.',
                    'I am completing my work.',
                    'I will complete my work.'
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'Present Perfect Continuous',
        hindiName: 'पूर्ण निरंतर वर्तमान काल',
        formula: 'Subject + has/have + been + V1 + ing',
        hindiFormula: 'कर्ता + has/have + been + क्रिया + रहा/रही/रहे हूँ/है/हैं',
        usage: 'For actions that started in the past and are still continuing',
        hindiUsage: 'भूतकाल में शुरू हुए और अभी भी जारी कार्यों के लिए',
        examples: [
            {
                english: 'I have been studying for two hours.',
                hindi: 'मैं दो घंटे से पढ़ रहा हूँ।',
                breakdown: 'I (मैं) + have been studying (पढ़ रहा हूँ) + for two hours (दो घंटे से)'
            },
            {
                english: 'She has been working here since 2020.',
                hindi: 'वह 2020 से यहाँ काम कर रही है।',
                breakdown: 'She (वह) + has been working (काम कर रही है) + here (यहाँ) + since 2020 (2020 से)'
            },
            {
                english: 'They have been playing cricket for an hour.',
                hindi: 'वे एक घंटे से क्रिकेट खेल रहे हैं।',
                breakdown: 'They (वे) + have been playing (खेल रहे हैं) + cricket (क्रिकेट) + for an hour (एक घंटे से)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं सुबह से इंतज़ार कर रहा हूँ।',
                correctAnswer: 'I have been waiting since morning.',
                options: [
                    'I have been waiting since morning.',
                    'I am waiting since morning.',
                    'I was waiting since morning.',
                    'I wait since morning.'
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'Past Perfect',
        hindiName: 'पूर्ण भूतकाल',
        formula: 'Subject + had + V3',
        hindiFormula: 'कर्ता + had + क्रिया का तीसरा रूप',
        usage: 'For actions completed before another past action',
        hindiUsage: 'किसी अन्य भूतकाल की क्रिया से पहले पूर्ण हुई क्रिया के लिए',
        examples: [
            {
                english: 'I had finished my work before he came.',
                hindi: 'मैंने उसके आने से पहले अपना काम पूरा कर लिया था।',
                breakdown: 'I (मैंने) + had finished (पूरा कर लिया था) + my work (अपना काम) + before he came (उसके आने से पहले)'
            },
            {
                english: 'She had already left when I arrived.',
                hindi: 'जब मैं पहुँचा तो वह पहले ही जा चुकी थी।',
                breakdown: 'She (वह) + had already left (पहले ही जा चुकी थी) + when I arrived (जब मैं पहुँचा)'
            },
            {
                english: 'They had eaten dinner before the movie started.',
                hindi: 'फिल्म शुरू होने से पहले उन्होंने रात का खाना खा लिया था।',
                breakdown: 'They (उन्होंने) + had eaten (खा लिया था) + dinner (रात का खाना) + before the movie started (फिल्म शुरू होने से पहले)'
            }
        ],
        exercises: [
            {
                hindi: 'मैंने पहले ही यह किताब पढ़ ली थी।',
                correctAnswer: 'I had already read this book.',
                options: [
                    'I had already read this book.',
                    'I have already read this book.',
                    'I already read this book.',
                    'I am already reading this book.'
                ]
            }
        ]
    },
    {
        id: 9,
        name: 'Past Perfect Continuous',
        hindiName: 'पूर्ण निरंतर भूतकाल',
        formula: 'Subject + had + been + V1 + ing',
        hindiFormula: 'कर्ता + had + been + क्रिया + रहा/रही/रहे था/थी/थे',
        usage: 'For actions that were ongoing before another past action',
        hindiUsage: 'किसी अन्य भूतकाल की क्रिया से पहले चल रहे कार्यों के लिए',
        examples: [
            {
                english: 'I had been studying for three hours when she called.',
                hindi: 'जब उसने फोन किया तो मैं तीन घंटे से पढ़ रहा था।',
                breakdown: 'I (मैं) + had been studying (पढ़ रहा था) + for three hours (तीन घंटे से) + when she called (जब उसने फोन किया)'
            },
            {
                english: 'They had been waiting for an hour before the train arrived.',
                hindi: 'ट्रेन आने से पहले वे एक घंटे से इंतज़ार कर रहे थे।',
                breakdown: 'They (वे) + had been waiting (इंतज़ार कर रहे थे) + for an hour (एक घंटे से) + before the train arrived (ट्रेन आने से पहले)'
            },
            {
                english: 'She had been working there for five years.',
                hindi: 'वह वहाँ पाँच साल से काम कर रही थी।',
                breakdown: 'She (वह) + had been working (काम कर रही थी) + there (वहाँ) + for five years (पाँच साल से)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं दो घंटे से टीवी देख रहा था जब बिजली चली गई।',
                correctAnswer: 'I had been watching TV for two hours when the power went out.',
                options: [
                    'I had been watching TV for two hours when the power went out.',
                    'I was watching TV for two hours when the power went out.',
                    'I have been watching TV for two hours when the power went out.',
                    'I watched TV for two hours when the power went out.'
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'Future Continuous',
        hindiName: 'अपूर्ण भविष्य काल',
        formula: 'Subject + will + be + V1 + ing',
        hindiFormula: 'कर्ता + will + be + क्रिया + रहा/रही/रहे होंगे',
        usage: 'For actions that will be in progress at a specific time in the future',
        hindiUsage: 'भविष्य में किसी विशेष समय पर चल रहे कार्यों के लिए',
        examples: [
            {
                english: 'I will be studying at 8 PM tonight.',
                hindi: 'मैं आज रात 8 बजे पढ़ रहा होऊंगा।',
                breakdown: 'I (मैं) + will be studying (पढ़ रहा होऊंगा) + at 8 PM (8 बजे) + tonight (आज रात)'
            },
            {
                english: 'She will be working tomorrow at this time.',
                hindi: 'वह कल इस समय काम कर रही होगी।',
                breakdown: 'She (वह) + will be working (काम कर रही होगी) + tomorrow (कल) + at this time (इस समय)'
            },
            {
                english: 'They will be playing cricket next Sunday.',
                hindi: 'वे अगले रविवार को क्रिकेट खेल रहे होंगे।',
                breakdown: 'They (वे) + will be playing (खेल रहे होंगे) + cricket (क्रिकेट) + next Sunday (अगले रविवार को)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं कल सुबह दौड़ रहा होऊंगा।',
                correctAnswer: 'I will be running tomorrow morning.',
                options: [
                    'I will be running tomorrow morning.',
                    'I will run tomorrow morning.',
                    'I am running tomorrow morning.',
                    'I was running tomorrow morning.'
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'Future Perfect',
        hindiName: 'पूर्ण भविष्य काल',
        formula: 'Subject + will + have + V3',
        hindiFormula: 'कर्ता + will + have + क्रिया का तीसरा रूप',
        usage: 'For actions that will be completed before a specific time in the future',
        hindiUsage: 'भविष्य में किसी निश्चित समय से पहले पूर्ण होने वाले कार्यों के लिए',
        examples: [
            {
                english: 'I will have finished my work by 6 PM.',
                hindi: 'मैं शाम 6 बजे तक अपना काम पूरा कर चुका होऊंगा।',
                breakdown: 'I (मैं) + will have finished (पूरा कर चुका होऊंगा) + my work (अपना काम) + by 6 PM (शाम 6 बजे तक)'
            },
            {
                english: 'She will have completed the project by next week.',
                hindi: 'वह अगले सप्ताह तक परियोजना पूरी कर चुकी होगी।',
                breakdown: 'She (वह) + will have completed (पूरी कर चुकी होगी) + the project (परियोजना) + by next week (अगले सप्ताह तक)'
            },
            {
                english: 'They will have left before you arrive.',
                hindi: 'तुम्हारे पहुँचने से पहले वे जा चुके होंगे।',
                breakdown: 'They (वे) + will have left (जा चुके होंगे) + before you arrive (तुम्हारे पहुँचने से पहले)'
            }
        ],
        exercises: [
            {
                hindi: 'मैं कल तक यह किताब पढ़ चुका होऊंगा।',
                correctAnswer: 'I will have read this book by tomorrow.',
                options: [
                    'I will have read this book by tomorrow.',
                    'I will read this book by tomorrow.',
                    'I have read this book by tomorrow.',
                    'I read this book by tomorrow.'
                ]
            }
        ]
    },
    {
        id: 12,
        name: 'Future Perfect Continuous',
        hindiName: 'पूर्ण निरंतर भविष्य काल',
        formula: 'Subject + will + have + been + V1 + ing',
        hindiFormula: 'कर्ता + will + have + been + क्रिया + रहा/रही/रहे होंगे',
        usage: 'For actions that will have been ongoing for a duration before a future time',
        hindiUsage: 'भविष्य के किसी समय से पहले एक अवधि तक जारी रहने वाले कार्यों के लिए',
        examples: [
            {
                english: 'I will have been working here for 10 years next month.',
                hindi: 'अगले महीने मैं यहाँ 10 साल से काम कर रहा होऊंगा।',
                breakdown: 'I (मैं) + will have been working (काम कर रहा होऊंगा) + here (यहाँ) + for 10 years (10 साल से) + next month (अगले महीने)'
            },
            {
                english: 'She will have been studying for three hours by 9 PM.',
                hindi: 'रात 9 बजे तक वह तीन घंटे से पढ़ रही होगी।',
                breakdown: 'She (वह) + will have been studying (पढ़ रही होगी) + for three hours (तीन घंटे से) + by 9 PM (रात 9 बजे तक)'
            },
            {
                english: 'They will have been living in Delhi for 5 years.',
                hindi: 'वे दिल्ली में 5 साल से रह रहे होंगे।',
                breakdown: 'They (वे) + will have been living (रह रहे होंगे) + in Delhi (दिल्ली में) + for 5 years (5 साल से)'
            }
        ],
        exercises: [
            {
                hindi: 'अगले साल मैं यह काम 2 साल से कर रहा होऊंगा।',
                correctAnswer: 'I will have been doing this work for 2 years next year.',
                options: [
                    'I will have been doing this work for 2 years next year.',
                    'I will be doing this work for 2 years next year.',
                    'I will do this work for 2 years next year.',
                    'I have been doing this work for 2 years next year.'
                ]
            }
        ]
    }
];

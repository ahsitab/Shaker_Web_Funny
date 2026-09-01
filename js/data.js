// ============================================================
// FAMILY DATA - পরিবারের সমস্ত তথ্য এখানে আছে
// এই ফাইলে শুধু data পরিবর্তন করলেই website আপডেট হবে
// ============================================================

// মূল চরিত্র - শাকের ভাই
const mainCharacter = {
  id: "shaker",
  name: "মইনুল হোসেন শাকের",
  nickname: "শাকের",
  image: "images/family/shaker.jpg",
  heroImage: "images/family/shaker.jpg",
  title: "কি হবে",
  funnyTitle: "বিবাহযোগ্য যুবক 💍",
  tagline: "সুদর্শন, শান্তশিষ্ট এবং দায়িত্বশীল একজন মানুষ।",
  intro: "জগন্নাথ বিশ্ববিদ্যালয় থেকে M.Sc. (উদ্ভিদবিজ্ঞান) সম্পন্ন করে বর্তমানে আইএফআইসি ব্যাংকে কর্মরত।",
  description: "মোঃ ময়নুল হোসেন শাকের — আইএফআইসি ব্যাংক পিএলসি-তে অ্যাসোসিয়েট অফিসার ও সাব-ব্রাঞ্চ ইন-চার্জ। উচ্চশিক্ষিত, স্বাবলম্বী এবং পরিবারপ্রিয় একজন মানুষ।",
  personality: ["শান্ত", "হাস্যরসিক", "পরিবারপ্রিয়", "নিজের মতো চলেন"],
  hobbies: ["পরিবারের সাথে সময় কাটানো", "নিজের পথে চলা", "খালারদের চিন্তার বিষয় হওয়া 😂"],
  funnyHabits: ["খালা-১ কে চিন্তায় ফেলে রাখা", "খালু-র সিদ্ধান্তের অপেক্ষায় থাকা 😂"],
  specialDialogue: "আমি ঠিকই বিয়ে করব, সবার মতামত ছাড়াও। 😄",
  familyRole: "পরিবারের সবচেয়ে আলোচিত ব্যক্তি",
  ratings: {
    calm: 4,
    anger: 1,
    love: 5,
    wedding_thought: 0,
    facebook: 2,
    talk: 3,
    sleep: 3,
    food: 4
  }
};

// পরিবারের সদস্যরা
const familyMembers = [
  {
    id: "abba",
    name: "আব্বা",
    relation: "আব্বা",
    image: "images/family/abba.jpg",
    title: "পরিবারের শান্ত মানুষ",
    funnyTitle: "পরিবারের শান্ত মানুষ 😌",
    emoji: "👨",
    dialogue: "যাই হোক, ঠান্ডা থাক।",
    description: "পরিবারের সব ঝড় শান্তভাবে সামলান। যত বড় সমস্যাই আসুক, আব্বা ঠান্ডা।",
    specialAbility: "যত বড় সমস্যাই হোক, আব্বা ঠান্ডা।",
    personality: ["ঠান্ডা", "ধৈর্যশীল", "জ্ঞানী"],
    funnyFact: "তাঁকে রাগাতে গেলে আগে নিজে পরিশ্রান্ত হয়ে পড়বেন।",
    ratings: {
      calm: 5,
      anger: 1,
      love: 5,
      wedding_thought: 2,
      facebook: 1,
      talk: 2,
      sleep: 3,
      food: 3
    },
    award: "পরিবারের সবচেয়ে ঠান্ডা ব্যক্তি 🏆"
  },
  {
    id: "amma",
    name: "কানিজ ফাতেমা শেমা",
    relation: "আম্মা",
    image: "images/family/amma.jpg",
    title: "পরিবারের আসল Boss",
    funnyTitle: "পরিবারের আসল Boss 👑",
    emoji: "👩",
    dialogue: " সাকের কি নিজের জন্য একটা মেয়ে দেখতে পারে না 👀",
    description: "পরিবারের কেন্দ্রবিন্দু। সরকারি চাকরিজীবী এবং পরিবারের সকল বিষয়ে সদা সতর্ক। শাকেরের বিয়ে নিয়ে সবচেয়ে চিন্তিত মানুষ।",
    specialAbility: "পুরো পরিবারকে একসূত্রে ধরে রাখা।",
    personality: ["শক্তিশালী", "ভালোবাসাময়", "পরিবারপ্রিয়"],
    funnyFact: "ছেলের বিয়ের চিন্তায় ঘুম কম হচ্ছে। 😄",
    ratings: {
      calm: 4,
      anger: 3,
      love: 5,
      wedding_thought: 4,
      facebook: 2,
      talk: 4,
      sleep: 3,
      food: 3
    },
    award: "পরিবারের আসল Boss 👑"
  },
  {
    id: "bhai1",
    name: "সদরুলা হোসাইন জাবের",
    relation: "বড় ভাই",
    image: "images/family/bhai1.jpg",
    title: "বড় ভাই",
    funnyTitle: "বড় ভাই ❤️",
    emoji: "👦",
    dialogue: " আমার নতুন একটা সিম দরকার👀",
    description: "শাকেরের বড় ভাই। ব্যবসায়ী হিসেবে নিজেকে প্রতিষ্ঠিত করেছেন। পরিবারের প্রতি দায়িত্বশীল ও যত্নশীল।",
    specialAbility: "যেকোনো পরিস্থিতিতে পরিবারের পাশে থাকা।",
    personality: ["দায়িত্বশীল", "পরিবারপ্রিয়"],
    funnyFact: "সিম কার্ড সংগ্রহে বিশেষ আগ্রহ আছে। 😄",
    ratings: {
      calm: 3,
      anger: 3,
      love: 5,
      wedding_thought: 2,
      facebook: 3,
      talk: 3,
      sleep: 3,
      food: 3
    }
  },
  {
    id: "bhai2",
    name: "আসফার হোসাইন সিতাব",
    relation: "ছোট ভাই",
    image: "images/family/bhai2.jpg",
    title: "ছোট ভাই",
    funnyTitle: "ছোট কিন্তু দুর্দান্ত 😎",
    emoji: "👦",
    dialogue: " হেহে বিয়ে করলে দাওয়াত দিস 👀",
    description: "শাকেরের ছোট ভাই। East West University তে M.Sc. in CSE পড়ছেন। মেধাবী ও উদ্যমী তরুণ।",
    specialAbility: "প্রযুক্তি ও পড়াশুনায় পারদর্শী।",
    personality: ["মেধাবী", "উদ্যমী", "প্রযুক্তিপ্রেমী"],
    funnyFact: "ভাইয়ের বিয়ের দাওয়াতের অপেক্ষায় দিন গুনছেন। 😄",
    ratings: {
      calm: 3,
      anger: 3,
      love: 5,
      wedding_thought: 1,
      facebook: 3,
      talk: 3,
      sleep: 4,
      food: 3
    }
  },
  {
    id: "bhabi",
    name: "কুলসুম খুশী",
    relation: "ভাবী",
    image: "images/family/bhabi.jpg",
    title: "ভাবী",
    funnyTitle: "পরিবারের নতুন সদস্য 💐",
    emoji: "👩",
    dialogue: " আমি কিছু জানি না👀",
    description: "পরিবারে নতুন আসা একজন মিষ্টি মানুষ। পরিবারের সবার সাথে মিলেমিশে থাকেন।",
    specialAbility: "পরিবারের সবার মন জয় করা।",
    personality: ["মিষ্টি", "মিলনশীল", "পরিবারপ্রিয়"],
    funnyFact: "সব বিষয়ে 'আমি কিছু জানি না' বলাই তাঁর কৌশল। 😄",
    ratings: {
      calm: 4,
      anger: 2,
      love: 5,
      wedding_thought: 2,
      facebook: 3,
      talk: 3,
      sleep: 3,
      food: 3
    }
  },
  {
    id: "bhaisti",
    name: "আনুসা",
    relation: "ভাইস্তি",
    image: "images/family/bhaisti.jpg",
    title: "পরিবারের ছোট্ট সোনামণি",
    funnyTitle: "পরিবারের ছোট্ট সোনামণি 🌟",
    emoji: "👧",
    dialogue: "আই বপ 👀",
    description: "পরিবারের সবচেয়ে ছোট এবং সবচেয়ে আদরের সদস্য। সবার মনে আনন্দ এনে দেন।",
    specialAbility: "একটু কান্না করলেই সবাই ছুটে আসে। 😄",
    personality: ["মিষ্টি", "দুষ্টু", "আদুরে"],
    funnyFact: "এই ছোট্ট মানুষটির হাসিতে পুরো পরিবার আনন্দিত হয়।",
    ratings: {
      calm: 3,
      anger: 2,
      love: 5,
      wedding_thought: 0,
      facebook: 1,
      talk: 4,
      sleep: 4,
      food: 5
    }
  },
  {
    id: "khala1",
    name: "কনিজা ফেরদৌস",
    relation: "খালা",
    image: "images/family/khala1.jpg",
    title: "Wedding Crisis Manager",
    funnyTitle: "Wedding Crisis Manager 💍",
    emoji: "👩",
    dialogue: "ভাগিনার বিয়ের চিন্তায় অফিস করতে পারতেছি না।",
    description: "ভাগিনার বিয়ে নিয়ে এত চিন্তিত যে অফিসের কাজও ঠিকমতো করতে পারছেন না।",
    specialAbility: "যেকোনো conversation-কে বিয়ের আলোচনায় নিয়ে আসা।",
    personality: ["caring", "চিন্তাশীল", "family-focused"],
    funnyFact: "ভাগিনার বিয়ে তাঁর জীবনের সবচেয়ে বড় mission।",
    ratings: {
      calm: 2,
      anger: 3,
      love: 5,
      wedding_thought: 5,
      facebook: 3,
      talk: 5,
      sleep: 2,
      food: 3
    },
    award: "Wedding Planning Champion 🏆"
  },
  {
    id: "khala2",
    name: "বিবি ফাতেমা শিল্পি",
    relation: "খালা",
    image: "images/family/khala2.jpg",
    title: "Independent Marriage Consultant",
    funnyTitle: "Independent Marriage Consultant 😎",
    emoji: "👩",
    dialogue: "আমার ইনহেলার নাই",
    description: "ভাগিনাকে নিজের পছন্দমতো বিয়ে করার পূর্ণ স্বাধীনতা প্রদানকারী।",
    specialAbility: "বিয়ের ব্যাপারে সরাসরি এবং পরিষ্কার মতামত দেওয়া।",
    personality: ["সরাসরি", "স্বাধীনচেতা", "ব্যবহারিক"],
    funnyFact: "তাঁর কাছে বিয়েটা সহজ — ভাগিনার পছন্দই শেষ কথা।",
    ratings: {
      calm: 4,
      anger: 2,
      love: 5,
      wedding_thought: 4,
      facebook: 2,
      talk: 4,
      sleep: 3,
      food: 3
    }
  },
  {
    id: "mama1",
    name: "রুবেল পাটোয়ারি",
    relation: "মামা",
    image: "images/family/mama1.jpg",
    title: "The Guilty Mama",
    funnyTitle: "The Guilty Mama 😂",
    emoji: "👨",
    dialogue: "মামা, আমি দোষী।",
    description: "পরিস্থিতি যাই হোক, কোনো না কোনোভাবে নিজেকে দোষী ঘোষণা করা।",
    specialAbility: "নিজেকে সবসময় দোষী সাব্যস্ত করার অসাধারণ ক্ষমতা।",
    personality: ["বিনয়ী", "দায়িত্বশীল", "অতি-সৎ 😂"],
    funnyFact: "তিনি দোষী ছিলেন কিনা সেটা গুরুত্বপূর্ণ না, তিনি দোষ স্বীকার করবেনই।",
    ratings: {
      calm: 4,
      anger: 1,
      love: 5,
      wedding_thought: 2,
      facebook: 2,
      talk: 3,
      sleep: 3,
      food: 3
    }
  },
  {
    id: "mama2",
    name: "বাছরি পাটোয়ারি",
    relation: "মামা",
    image: "images/family/mama2.jpg",
    title: "Facebook Marketing Manager",
    funnyTitle: "Facebook Marketing Manager 📱",
    emoji: "👨",
    dialogue: "মামা, Facebook-এ একটা পোস্ট দিয়ে দাও।",
    description: "পরিবারের গুরুত্বপূর্ণ বিষয় Facebook-এ পৌঁছে দেওয়ার দায়িত্বে।",
    specialAbility: "একটি Facebook post-এর মাধ্যমে পুরো পরিবারকে জানিয়ে দেওয়া।",
    personality: ["সামাজিক", "Digital-savvy", "পরিবারের spokesperson 😂"],
    funnyFact: "তাঁর মতে প্রতিটি সমস্যার সমাধান Facebook-এ আছে।",
    ratings: {
      calm: 3,
      anger: 2,
      love: 5,
      wedding_thought: 3,
      facebook: 5,
      talk: 4,
      sleep:
        3,
      food: 3
    },
    award: "Facebook Department Award 🏆"
  },
  {
    id: "khalu",
    name: "মামুন হোসেন",
    relation: "খালু",
    image: "images/family/khalu.jpg",
    title: "Head of Decision",
    funnyTitle: "Head of Decision 🧠",
    emoji: "👨",
    dialogue: "দু দিনের মধ্যে বিয়ে দিয়ে দিচ্ছি",
    description: "পরিবারের গুরুত্বপূর্ণ সিদ্ধান্তের প্রধান ব্যক্তি। সবাই আলোচনা করবে, কিন্তু শেষ সিদ্ধান্তের জন্য খালুর দিকে তাকাতে হবে।",
    specialAbility: "সব আলোচনার পরে চূড়ান্ত সিদ্ধান্ত দেওয়া।",
    personality: ["নেতৃত্বশীল", "দৃঢ়", "সিদ্ধান্তমূলক"],
    funnyFact: "পারিবারিক সভায় সবশেষে মাইক তাঁর দিকে যায়।",
    ratings: {
      calm: 4,
      anger: 2,
      love: 5,
      wedding_thought: 3,
      facebook: 2,
      talk: 4,
      sleep: 3,
      food: 3
    },
    award: "Head of Decision 🏆"
  },
  {
    id: "cousin1",
    name: "জায়ান মাহদীন",
    relation: "কাজিন",
    image: "images/family/cousin1.jpg",
    title: "কাজিন-১",
    funnyTitle: "ভাই তুমি কি আসলে বিয়ে",
    emoji: "👦",
    dialogue: "ভাই তুমি কি আসলে বিইয়ে করবা😅",
    description: "পরিবারের সবচেয়ে দুরন্ত ছোট্ট সদস্য। সারাদিন দৌড়ঝাঁপ করেন এবং সবার মনে আনন্দ এনে দেন।",
    specialAbility: "পরিবারের সবচেয়ে মিষ্টি হাসি দিয়ে দোষ এড়িয়ে যাওয়া।",
    personality: ["দুরন্ত", "মিষ্টি", "আদুরে"],
    funnyFact: "বিছানা ভেজানোর পরেও তার হাসি দেখলে কেউ রাগ করতে পারে না। 😂",
    ratings: {
      calm: 3,
      anger: 3,
      love: 5,
      wedding_thought: 0,
      facebook: 2,
      talk: 4,
      sleep: 4,
      food: 4
    }
  },
  {
    id: "cousin2",
    name: "জাফরিন মাহসানাত",
    relation: "কাজিন",
    image: "images/family/cousin2.jpg",
    title: "কাজিন-২",
    funnyTitle: "বাদু-২💫",
    emoji: "👧",
    dialogue: "আমি কি করলাম ভাই 😊",
    description: "পরিবারের স্মার্ট এবং চটপটে কাজিন। পড়াশুনায় ভালো এবং সবার সাথে মিলনশীল।",
    specialAbility: "পরিবারের যেকোনো সমস্যায় বুদ্ধিমান পরামর্শ দেওয়া।",
    personality: ["স্মার্ট", "মেধাবী", "মিলনশীল"],
    funnyFact: "সবার প্রিয় জাফরিন সবসময় হাসিখুশি থাকেন।",
    ratings: {
      calm: 4,
      anger: 2,
      love: 5,
      wedding_thought: 1,
      facebook: 3,
      talk: 4,
      sleep: 3,
      food: 3
    }
  },
  {
    id: "cousin3",
    name: "রাফিয়া রুহান",
    relation: "কাজিন",
    image: "images/family/cousin3.jpg",
    title: "কাজিন-৩",
    funnyTitle: "আমি পাগল 🌸",
    emoji: "👧",
    dialogue: "হেতে আরে মাইচ্ছে কিল্লাই 😄",
    description: "পরিবারের মিষ্টি এবং সুন্দর কাজিন। শান্ত স্বভাবের এবং সবার প্রিয়।",
    specialAbility: "নিজের সৌন্দর্য ও মিষ্টি স্বভাব দিয়ে সবার মন জয় করা।",
    personality: ["শান্ত", "মিষ্টি", "ভদ্র"],
    funnyFact: "রাফিয়াকে রাগানো প্রায় অসম্ভব।",
    ratings: {
      calm: 4,
      anger: 2,
      love: 5,
      wedding_thought: 1,
      facebook: 3,
      talk: 3,
      sleep: 3,
      food: 3
    }
  }
];

// ভাইয়ের ছবির gallery
// categories: "সব", "ছোটবেলা", "বর্তমান", "পরিবার", "অনুষ্ঠান", "ভ্রমণ", "বন্ধুদের সাথে", "random", "বিশেষ মুহূর্ত"
const brotherPhotos = [
  {
    src: "images/brother/01.jpg",
    category: "বর্তমান",
    caption: "এই ছবির সময় পরিস্থিতি সম্পূর্ণ নিয়ন্ত্রণে ছিল। 😌"
  },
  {
    src: "images/brother/Shaker_Child.jpg",
    category: "ছোটবেলা",
    caption: "ছোটবেলার স্মৃতি 👶"
  },
  {
    src: "images/brother/Shaker_In_tour.jpg",
    category: "ভ্রমণ",
    caption: "ট্যুরে শাকের ভাই ✈️"
  },
  {
    src: "images/brother/Shaker_Thailand.jpg",
    category: "ভ্রমণ",
    caption: "থাইল্যান্ড ভ্রমণ ✈️"
  },
  {
    src: "images/brother/Shaker_With_Friend.jpg",
    category: "বন্ধুদের সাথে",
    caption: "বন্ধুদের সাথে কাটানো মুহূর্ত 🤝"
  },
  {
    src: "images/brother/Shaker_with_special_time.jpg",
    category: "বিশেষ মুহূর্ত",
    caption: "কিছু বিশেষ মুহূর্ত ✨"
  },
  {
    src: "images/brother/Shaker_Random.jpg",
    category: "random",
    caption: "ক্যামেরার পিছনের দৃশ্য 😂"
  }
];

// Family Gallery - সব ছবি
const familyGallery = [
  {
    src: "images/family/shaker.jpg",
    member: "শাকের",
    category: "ভাই",
    caption: "পরিবারের VIP"
  },
  {
    src: "images/family/amma.jpg",
    member: "আম্মা",
    category: "আব্বা-আম্মা",
    caption: "পরিবারের আসল boss 👑"
  },
  {
    src: "images/family/khala1.jpg",
    member: "খালা-১",
    category: "খালা-মামা",
    caption: "বিয়ের চিন্তায় মগ্ন 💍"
  },
  {
    src: "images/family/khala2.jpg",
    member: "খালা-২",
    category: "খালা-মামা",
    caption: "স্বাধীন মতামতের মালকিন 😎"
  },
  {
    src: "images/family/mama1.jpg",
    member: "মামা-১",
    category: "খালা-মামা",
    caption: "আমি দোষী 😂"
  },
  {
    src: "images/family/mama2.jpg",
    member: "মামা-২",
    category: "খালা-মামা",
    caption: "Facebook marketing department 📱"
  },
  {
    src: "images/family/khalu.jpg",
    member: "খালু",
    category: "খালা-মামা",
    caption: "Final decision maker 🧠"
  },
  {
    src: "images/family/bhai2.jpg",
    member: "আসফার",
    category: "ভাই",
    caption: "ছোট কিন্তু দুর্দান্ত 😎"
  },
  {
    src: "images/family/cousin1.jpg",
    member: "জায়ান",
    category: "কাজিন",
    caption: "পরিবারের দুরন্ত সদস্য"
  },
  {
    src: "images/family/cousin2.jpg",
    member: "জাফরিন",
    category: "কাজিন",
    caption: "স্মার্ট কাজিন 💫"
  },
  {
    src: "images/family/cousin3.jpg",
    member: "রাফিয়া",
    category: "কাজিন",
    caption: "সুন্দরী কাজিন 🌸"
  }
];

// Funny Dialogues
const funnyDialogues = [
  {
    text: "ভাগিনার বিয়ের চিন্তায় অফিস করতে পারতেছি না।",
    speaker: "খালা-১",
    image: "images/family/khala1.jpg",
    emoji: "💍"
  },
  {
    text: "ভাগিনা, তুই তোর মতো বিয়া কর।",
    speaker: "খালা-২",
    image: "images/family/khala2.jpg",
    emoji: "😎"
  },
  {
    text: "মামা, আমি দোষী।",
    speaker: "মামা-১",
    image: "images/family/mama1.jpg",
    emoji: "😂"
  },
  {
    text: "মামা, Facebook-এ একটা পোস্ট দিয়ে দাও।",
    speaker: "মামা-২",
    image: "images/family/mama2.jpg",
    emoji: "📱"
  },
  {
    text: "সিদ্ধান্তটা তাহলে আমি দিচ্ছি।",
    speaker: "খালু",
    image: "images/family/khalu.jpg",
    emoji: "🧠"
  },
  {
    text: "যাই হোক, ঠান্ডা থাক।",
    speaker: "আব্বা",
    image: "images/family/abba.jpg",
    emoji: "😌"
  }
];

// Family Group Chat Messages
const groupChatMessages = [
  {
    sender: "খালা-১",
    image: "images/family/khala1.jpg",
    message: "ভাগিনার বিয়ের চিন্তায় অফিস করতে পারতেছি না। 😭",
    time: "সকাল ৯:৩০",
    isOwn: false
  },
  {
    sender: "খালা-২",
    image: "images/family/khala2.jpg",
    message: "আমার ওষুধ কিনার টাকা নাই 😎",
    time: "সকাল ৯:৩২",
    isOwn: false
  },
  {
    sender: "মামা-২",
    image: "images/family/mama2.jpg",
    message: "মামা, Facebook-এ একটা পোস্ট দিয়ে দাও ।📱",
    time: "সকাল ৯:৩৫",
    isOwn: false
  },
  {
    sender: "মামা-১",
    image: "images/family/mama1.jpg",
    message: "মামা, আমি দোষী।  😔",
    time: "সকাল ৯:৩৭",
    isOwn: false
  },
  {
    sender: "খালু",
    image: "images/family/khalu.jpg",
    message: "সবাই শান্ত হও। সিদ্ধান্তটা আমি দিচ্ছি। 🧠",
    time: "সকাল ৯:৪০",
    isOwn: false
  },
  {
    sender: "আব্বা",
    image: "images/family/abba.jpg",
    message: "যাই হোক, ঠান্ডা থাক। 😌",
    time: "সকাল ৯:৪২",
    isOwn: false
  },
  {
    sender: "শাকের",
    image: "images/family/shaker.jpg",
    message: "আমি সব দেখতেছি... 👀😂",
    time: "সকাল ৯:৪৫",
    isOwn: true
  }
];

// Family Statistics
const familyStats = [
  {
    title: "সবচেয়ে ঠান্ডা",
    winner: "আব্বা",
    image: "images/family/abba.jpg",
    percentage: 98,
    emoji: "🧊"
  },
  {
    title: "সবচেয়ে বেশি বিয়ের চিন্তা",
    winner: "খালা-১",
    image: "images/family/khala1.jpg",
    percentage: 110,
    emoji: "💍"
  },
  {
    title: "সবচেয়ে বেশি Facebook post",
    winner: "মামা-২",
    image: "images/family/mama2.jpg",
    percentage: 95,
    emoji: "📱"
  },
  {
    title: "সবচেয়ে বেশি উপদেশ",
    winner: "খালু",
    image: "images/family/khalu.jpg",
    percentage: 90,
    emoji: "🧠"
  },
  {
    title: "পরিবারের আসল Boss",
    winner: "আম্মা",
    image: "images/family/amma.jpg",
    percentage: 100,
    emoji: "👑"
  },
  {
    title: "সবচেয়ে বেশি ভালোবাসেন",
    winner: "সবাই",
    image: "images/family/shaker.jpg",
    percentage: 100,
    emoji: "❤️"
  }
];

// Funny Awards
const funnyAwards = [
  {
    title: "পরিবারের সবচেয়ে ঠান্ডা ব্যক্তি",
    winner: "আব্বা",
    image: "images/family/abba.jpg",
    description: "যত ঝড়ই আসুক, ইনি অটল।",
    trophy: "🏆"
  },
  {
    title: "Wedding Planning Champion",
    winner: "খালা-১",
    image: "images/family/khala1.jpg",
    description: "ভাগিনার বিয়ের জন্য নিরলস প্রচেষ্টার স্বীকৃতি।",
    trophy: "🏆"
  },
  {
    title: "Head of Decision Award",
    winner: "খালু",
    image: "images/family/khalu.jpg",
    description: "সকল আলোচনার সমাপ্তি টানেন এই মানুষটি।",
    trophy: "🏆"
  },
  {
    title: "Facebook Department Award",
    winner: "মামা-২",
    image: "images/family/mama2.jpg",
    description: "পরিবারের খবর সামাজিক মাধ্যমে ছড়িয়ে দেওয়ায় অনন্য অবদান।",
    trophy: "🏆"
  },
  {
    title: "পরিবারের আসল Boss",
    winner: "আম্মা",
    image: "images/family/amma.jpg",
    description: "সর্বসম্মতিক্রমে নির্বাচিত।",
    trophy: "👑"
  },
  {
    title: "Most Loved Family Member",
    winner: "শাকের",
    image: "images/family/shaker.jpg",
    description: "এই পরিবারের সবচেয়ে আলোচিত ও ভালোবাসার মানুষ।",
    trophy: "❤️"
  },
  {
    title: "The Guilty Award",
    winner: "মামা-১",
    image: "images/family/mama1.jpg",
    description: "সবার আগে দোষ স্বীকার করার অসাধারণ ক্ষমতার জন্য।",
    trophy: "🏆"
  },
  {
    title: "Independent Opinion Award",
    winner: "খালা-২",
    image: "images/family/khala2.jpg",
    description: "সরাসরি মত দেওয়ার সাহসিকতার জন্য।",
    trophy: "🏆"
  }
];

// Random Funny Facts
const funnyFacts = [
  "এই পরিবারের সবচেয়ে বড় সমস্যা হলো — বিয়ের আলোচনা কখনো শেষ হয় না। 😂",
  "খালা-১-এর কাছে বিয়ে একটি full-time project। তিনি অফিসে গেলেও এই project চলে।",
  "মামা-২ মনে করেন Facebook post সব সমস্যার সমাধান।",
  "খালু শেষ সিদ্ধান্ত দেওয়ার আগে সবার কথা শোনেন। তবে সিদ্ধান্তটা নিজেই দেন। 😄",
  "আব্বা এমন মানুষ যাকে রাগাতে গেলে আপনি আগে ক্লান্ত হয়ে পড়বেন।",
  "মামা-১ দোষ করুক বা না করুক, দোষ স্বীকার করবেনই।",
  "খালা-২-এর পরামর্শ সহজ: ভাগিনা তোর মতো কর।",
  "এই পরিবারে একটাই group chat, কিন্তু message-এর বন্যা!",
  "শাকের ভাই সব দেখেন, শুনেন, কিন্তু শান্তভাবে হাসেন। 😂",
  "এই পরিবারের কোনো decision ছোট হয় না — সব decision important!"
];

// Family Tree Data
const familyTree = {
  id: "root",
  name: "আমাদের পরিবার",
  children: [
    {
      id: "couple",
      name: "মূল পরিবার",
      children: [
        {
          id: "abba",
          name: "আব্বা",
          image: "images/family/abba.jpg",
          relation: "আব্বা",
          children: []
        },
        {
          id: "amma",
          name: "আম্মা",
          image: "images/family/amma.jpg",
          relation: "আম্মা",
          children: [
            {
              id: "bhai1",
              name: "ভাই-১",
              image: "images/family/bhai1.jpg",
              relation: "বড় ভাই",
              children: [
                {
                  id: "bhabi",
                  name: "ভাবী",
                  image: "images/family/bhabi.jpg",
                  relation: "ভাবী",
                  children: [
                    {
                      id: "bhaisti",
                      name: "ভাইস্তি",
                      image: "images/family/bhaisti.jpg",
                      relation: "ভাইস্তি",
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: "shaker",
              name: "শাকের",
              image: "images/family/shaker.jpg",
              relation: "ছেলে",
              children: []
            },
            {
              id: "bhai2",
              name: "আসফার",
              image: "images/family/bhai2.jpg",
              relation: "ছোট ভাই",
              children: []
            }
          ]
        }
      ]
    }
  ]
};

// Boss Poll Options
const bossPollOptions = [
  { id: "abba", name: "আব্বা", image: "images/family/abba.jpg", votes: 15 },
  { id: "amma", name: "আম্মা", image: "images/family/amma.jpg", votes: 72 },
  { id: "bhai1", name: "ভাই-১", image: "images/family/bhai1.jpg", votes: 8 },
  { id: "shaker", name: "শাকের", image: "images/family/shaker.jpg", votes: 45 },
  { id: "khalu", name: "খালু", image: "images/family/khalu.jpg", votes: 25 },
  { id: "other", name: "অন্য কেউ", image: "", votes: 10 }
];

// Memory Timeline
const memoryTimeline = [
  {
    year: "শুরু থেকে",
    title: "পরিবারের গল্পের শুরু",
    description: "আব্বা ও আম্মার হাত ধরে শুরু হলো এক অনন্য পরিবারের গল্প।",
    image: "images/family/amma.jpg",
    emoji: "❤️"
  },
  {
    year: "বর্তমান",
    title: "শাকেরের গল্প",
    description: "পরিবারের আলোচনার কেন্দ্রে আসলেন শাকের ভাই।",
    image: "images/family/shaker.jpg",
    emoji: "⭐"
  },
  {
    year: "চলমান",
    title: "বিয়ের পরিকল্পনা",
    description: "খালা-১ এর অফিস বন্ধ হয়ে গেছে। পুরো পরিবার ব্যস্ত।",
    image: "images/family/khala1.jpg",
    emoji: "💍"
  },
  {
    year: "শীঘ্রই",
    title: "নতুন অধ্যায়",
    description: "পরিবারের নতুন গল্প লেখা হবে শীঘ্রই...",
    image: "images/family/shaker.jpg",
    emoji: "🌟"
  }
];

// ============================================================
// GLOBAL EXPORTS — script.js এই variables গুলো ব্যবহার করে
// ============================================================
window.mainCharacter = mainCharacter;
window.familyMembers = familyMembers;
window.brotherPhotos = brotherPhotos;
window.familyGallery = familyGallery;
window.funnyDialogues = funnyDialogues;
window.groupChatMessages = groupChatMessages;
window.familyStats = familyStats;
window.funnyAwards = funnyAwards;
window.funnyFacts = funnyFacts;
window.familyTree = familyTree;
window.bossPollOptions = bossPollOptions;
window.memoryTimeline = memoryTimeline;

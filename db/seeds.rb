
User.create([
  {
    username: "太郎",
    email: "taro@taro.com",
    password: "taro123",
  },
  {
    username: "二郎",
    email: "jiro@jiro.com",
    password: "jiro123",
  },
])

Genre.create([
  {
    name: "自然",
  },
  {
    name: "科学",
  },
  {
    name: "自己",
  },
  {
    name: "食物",
  },
])


Why.create([
  {
    question: "なぜ人は嘘をつくのか？", 
    user_id: 1,
    genre_id: 3,
    share: false,
  },
  {
    question: "なぜ空は青いのか?",
    user_id: 2,
    genre_id: 1,
    share: false,
  },
  {
    question: "日本人なんで!?",
    user_id: 2,
    genre_id: 2,
    share: true,
  },
  {
    question: "納豆はなぜ美味しいの?", 
    user_id: 1,
    genre_id: 4,
    share: true,
  },
])


PvAnswer.create([
  {
    content: "嘘には良い嘘もありますよ。",
    why_id: 1,
    user_id: 1,
  },
  {
    content: "because it's blue.",
    why_id: 2,
    user_id: 2,
  },
  {
    content: "ネバネバしてるからだよ〜。",
    why_id: 4,
    user_id: 2,
  },
  {
    content: "ネバネバしてても美味しいとは限らないぞ。",
    why_id: 4,
    user_id: 2,
  },
])

PbAnswer.create([
  {
    content: "嘘つきは泥棒の始まり。",
    why_id: 1,
    user_id: 2,
  },
  {
    content: "All you need is love.",
    why_id: 2,
    user_id: 1,
  },
  {
    content: "ニホンノココロ",
    why_id: 3,
    user_id: 1,
  },
  {
    content: "納豆は400回混ぜると良いよ！",
    why_id: 4,
    user_id: 2,
  },
  {
    content: "納豆は健康にも良いからね〜！",
    why_id: 4,
    user_id: 2,
  },
])




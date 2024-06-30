// 定义一个包含多个卡片对象的数组，每个卡片对象包括图片地址、标题和文本内容
const cards = [
  {
    imgSrc: '../img/lastofus.jpg',
    title1: "An Birthday Wish Card",
    title2: "HAPPY BIRTHDAY",
    text: [
      "愿你的每一刻都值得纪念和庆祝",
      "愿你的每一步都朝着幸福前进，",
      "愿你的每一天都如诗如画，",
      "愿你的每一个梦想都能照进现实，",
      "愿你的人生充满无限的精彩和乐趣，",
      "愿你的未来充满美好和成功，",
      "愿你拥有足够的勇气和力量，",
      "成为独一无二的自己。",
      "2024.06.26",
      "♥泽"
    ]
  },
  {
    imgSrc: '../img/lastofus.jpg',
    title1: "An Interesting Birthday Card",
    title2: "Anothor Wish",
    text: [
      "😊😊天天开心😊😊",
      "🐐🐐洋洋得意🐐🐐",
      "✨✨前途光明✨✨",
      "😎😎自信满满😎😎",
      "💤💤注意休息💤💤",
      "🎸📘充满美好🎨🌈",
      "🎂🎂生日快乐🎂🎂",
    ]
  },
  // 可以根据需要添加更多的卡片对象
];

let currentIndex = 0; // 当前显示的卡片索引，默认为第一个卡片

const cardElement = document.querySelector('.card'); // 获取带有类名为 'card' 的元素

const imgBoxElement = cardElement.querySelector('.imgBox img'); // 获取卡片中的图片元素
const title1Element = cardElement.querySelector('.color1'); // 获取卡片中标题1的元素
const title2Element = cardElement.querySelector('.color2'); // 获取卡片中标题2的元素
const textElements = cardElement.querySelectorAll('.details p'); // 获取卡片中所有段落元素

// 更新卡片内容的函数
const updateCardContent = () => {
  const currentCard = cards[currentIndex]; // 获取当前卡片对象
  
  // 更新图片、标题和段落内容
  imgBoxElement.src = currentCard.imgSrc;
  title1Element.textContent = currentCard.title1;
  title2Element.textContent = currentCard.title2;
  
  // 更新每个段落的文本内容，如果当前卡片没有足够的段落内容，则保持空白
  textElements.forEach((p, index) => {
    if (index < currentCard.text.length) {
      p.textContent = currentCard.text[index];
    } else {
      p.textContent = '';
    }
  });
};

// 打开卡片的函数，给卡片元素添加 'open' 类，触发打开动画效果
const openCard = () => {
  cardElement.classList.add('open');

};

// 关闭卡片的函数，移除 'open' 类，添加 'closed' 类触发关闭动画效果，然后重新初始化第一个卡片
const closeCard = () => {
  cardElement.classList.remove('open');

  
  cardElement.classList.add('closed');
  setTimeout(() => {
    cardElement.classList.remove('closed');
    currentIndex = 0;
    updateCardContent();
  }, 1000); // 等待关闭动画完成的时间
};

// 点击卡片时的事件监听器，根据卡片状态执行不同的动作
cardElement.addEventListener('click', () => {
  if (!cardElement.classList.contains('open')) {
    // 如果卡片未打开，则打开卡片
    openCard();
  } else {
    if (currentIndex < cards.length - 1) {
      // 如果当前不是最后一页，则触发翻页动画

      setTimeout(() => {
        currentIndex++;
        updateCardContent();


      }, 10); // 等待翻页动画完成的时间，与 CSS 过渡时间匹配
    } else {
      // 如果是最后一页，则关闭卡片
      closeCard();
    }
  }
});

// 初始化第一个卡片的内容
updateCardContent();

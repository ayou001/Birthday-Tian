// 定义一个包含多个卡片对象的数组，每个卡片对象包括图片地址、标题和文本内容
const cards = [
  {
    imgSrc: '../img/lastofus.jpg',
    title1: "生日祝福卡片-未成功版",
    title2: "一些幕后故事哈哈哈",
    text: [
      "甜甜你可能会发现",
      "之前的那个卡片",
      "有一点呆呆的感觉",
      "翻页的时候一点也不自然",
      "于是我尝试增加翻页效果",
      "很不幸的是我未能完成哈哈哈哈",
      "于是有了这个未成功版本",
      "你点击就能观看哈哈哈哈😁",
      "2024.06.26",
      "♥泽"
    ]
  },
  {
    imgSrc: '../img/lastofus.jpg',
    title1: "Failed Birthday Card",
    title2: "i will fix！ maybe",
    text: [
      "希望能给你带来一些快乐",
      "哈哈哈哈哈哈哈哈哈",
      "我每次看都觉得很鬼畜",
      "话说中文显示起来好奇怪",
      "可能是字体的问题",
      "之后有精力我会修改的嘿嘿",

      "Enjoy!"
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
      cardElement.classList.add('trans'); // 添加翻页过渡效果
      setTimeout(() => {
        currentIndex++;
        updateCardContent();
      cardElement.classList.remove('trans');

      }, 1000); // 等待翻页动画完成的时间，与 CSS 过渡时间匹配
    } else {
      // 如果是最后一页，则关闭卡片
      closeCard();
    }
  }
});

// 初始化第一个卡片的内容
updateCardContent();

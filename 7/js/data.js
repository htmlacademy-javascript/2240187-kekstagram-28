
import { getRandomInteger, getUniqueValue } from './util.js';

const descriptions = [
  'Sunny days',
  'Rain and sun',
  'Must visit place in Spain!',
  'Positive vibes only',
  'Me, myself and I',
  'cool icecream fr',
  'Reading today',
  'Yesterday was a good day',
  'New candle alert',
  'Staying productive',
  'Shoutout to Sephora',
  'My cat is my fav person',
  'idk where the hell is my car key',
  'are you joking rn?',
  'I love you my baby',
  'Pink sky',
  'Cakes and coke',
  'Happy birthday to me:)',
  'Bought this thingie yesterday and Im having such a blast',
  'Sweet potato',
  'I love broccoli',
  'Who else listens to lofi girl?',
  'studying is hard',
  'leaving tomorrow',
  'see me in a week',
];

const comments = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];

const names = [
  'Анюта Мамочка',
  'Ваня Слесарь',
  'Санёк Алкоголик',
  'Лер4ик Маникюрчик',
  'Инна Власенко',
  'Бабушка с пирожками',
  'Ирина Диджей',
  'Андрей не Болей',
  'Хулиган с Района',
  'Бомж из Подворотни',
  'Девочка Припевочка',
  'Твоя Стерва',
];
const idmin = 1;
const idMax = 25;
const urlMin = 1;
const urlMax = 25;
const avatarMinCount = 1;
const avatarMaxCount = 6;
const likesMinCount = 15;
const likesMaxCount = 200;
const commentIdMin = 1;
const commentIdMax = 1000;
const commentCountMin = 3;
const commentCountMax = 20;
const descriptionsCount = 25;
const photoId = getUniqueValue(idmin, idMax);
const photoUrl = getUniqueValue(urlMin, urlMax);
const commentId = getUniqueValue(commentIdMin, commentIdMax);

const commentsGenerator = () => {
  const randomAvatarIndex = getRandomInteger(avatarMinCount, avatarMaxCount);
  const randomNameIndex = getRandomInteger(0, names.length - 1);
  const randomCommentTextIndex = getRandomInteger(0, comments.length - 1);
  return {
    id: commentId(),
    avatar: `img/avatar-${randomAvatarIndex}.svg`,
    message: comments[randomCommentTextIndex],
    name: names[randomNameIndex],
  };
};

const commentsArray = () => Array.from({
  length: getRandomInteger(commentCountMin, commentCountMax)
}, commentsGenerator);

const photoDescription = () => {
  const randomDescriptionIndex = getRandomInteger(0, descriptions.length - 1);
  const randomLikesIndex = getRandomInteger(likesMinCount, likesMaxCount);
  return {
    id: photoId(),
    url: `photos/${photoUrl()}.jpg`,
    description: descriptions[randomDescriptionIndex],
    likes: randomLikesIndex,
    comments: commentsArray()
  };
};


const photoDescriptionArray = () => Array.from({ length: descriptionsCount }, photoDescription);

export { photoDescriptionArray };

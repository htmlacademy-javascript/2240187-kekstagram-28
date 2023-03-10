
import {getRandomInteger} from './util.js';

const personId = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
];


const urlAdress = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
];

const avatar = [
  1, 2, 3, 4, 5, 6
];

const description = [
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

const likes = [
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200
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

const profile = [
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


const createPostDescription = () => {
  const randomIdIndex = getRandomInteger(0, personId.length - 1);
  const randomAvatarIndex = getRandomInteger(0, avatar.length - 1);
  const randomUrlIndex = getRandomInteger(0, urlAdress.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, description.length - 1);
  const randomLikesIndex = getRandomInteger(0, likes.length - 1);
  const randomCommentIndex = getRandomInteger(0, comments.length - 1);
  const randomNameIndex = getRandomInteger(0, profile.length - 1);
  return {
    id: personId[randomIdIndex],
    avatar: `img/ ${randomAvatarIndex} -avatar.svg`,
    urlAdress: `photos/ ${randomUrlIndex}.jpg`,
    description: description[randomDescriptionIndex],
    likes: likes[randomLikesIndex],
    comment: comments[randomCommentIndex],
    ProfileName: profile[randomNameIndex],
  };
};

export {createPostDescription};

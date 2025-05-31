import { Howl } from 'howler';

const sounds = {
  win: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'],
    volume: 0.5
  }),
  lose: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2001/2001-preview.mp3'],
    volume: 0.5
  }),
  shuffle: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2002/2002-preview.mp3'],
    volume: 0.3
  })
};

export const playSound = (type: keyof typeof sounds) => {
  sounds[type].play();
};

export const vibrate = (pattern: number | number[]) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern);
  }
};
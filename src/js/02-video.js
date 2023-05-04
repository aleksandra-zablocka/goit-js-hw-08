import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const updateTime = throttle(
//   pausedTime =>
//     localStorage.setItem('videoplayer-current-time', pausedTime.seconds),
//   1000
// );
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// player.on('timeupdate', updateTime);

const updateTime = pausedTime =>
  localStorage.setItem('videoplayer-current-time', pausedTime.seconds);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(updateTime, 1000));

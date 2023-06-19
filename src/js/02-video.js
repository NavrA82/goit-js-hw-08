import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    const LOCALSTORAGE_VALUE = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, LOCALSTORAGE_VALUE);
  }, 2000)
);

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

// варіант 2
// function updatePosition(seconds) {
//   localStorage.setItem(LOCALSTORAGE_KEY, seconds);
// }

// player.on(
//   'timeupdate',
//   throttle(data => updatePosition(data.seconds), 1000)
// );

// player
//   .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
//   .then(function () {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });

// варіант 1
//   function updatePosition(seconds) {
//     localStorage.setItem(LOCALSTORAGE_KEY, seconds);
//   }

//   const throttledUpdatePosition = throttle(updatePosition, 1000);

//   player.on('timeupdate', function (data) {
//     throttledUpdatePosition(data.seconds);
//   });

//   player
//     .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
//     .then(function () {})
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           break;
//         default:
//           break;
//       }
//     });

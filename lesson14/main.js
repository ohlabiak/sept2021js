// function wakeup (iswakeup, callback) {
//     setTimeout(() => {
//         if (iswakeup) {
//             console.log('goToBathRoom');
//             callback();
//         } else {
//             console.log('alarm clock dont Stop');
//         }
//     }, 1000)
// };
//
// function turnOfAlarm (isToGetUp) {
//     setTimeout(() => {
//         if (isToGetUp) {
//             console.log('doExcersise');
//         } else {
//             console.log('you are lazy');
//         }
//     }, 1000)
// };
//
// function cleenTeath (iscleenTeath) {
//     setTimeout(() => {
//         if (cleenTeath) {
//             console.log('goToKitchen');
//         }
//         else {
//             console.log('youDontGoToEat');
//         }
//     }, 1500)
// };
//
// function turnOnTeapot (isturnOnTeapot) {
//     setTimeout(() => {
//         if (isturnOnTeapot) {
//             console.log("youWillbeDrinkTea");
//         } else {
//             console.log('eatBreakfestWithoutTea');
//         }
//     }, 2000)
// };
//
// function cookingBreakfest (iscookingBreakfest) {
//     setTimeout(()=> {
//         if ('haveEags') {
//             console.log('willeatOmlet');
//         } else {
//             console.log('eatVivsyanka');
//         }
//     }, 2500)
// };
//
// function toGetDressed (istoGetDressed) {
//     setTimeout(() => {
//         if ('closesAreReady') {
//             console.log('canGoOut');
//         } else {
//             console.log('findclothes');
//         }
//     }, 3000)
// };
//
// function takeOutTheGarbadge (istakeOutTheGarbadge) {
//     setTimeout(() => {
//         if (istakeOutTheGarbadge) {
//             console.log('wellDone');
//         } else {
//             console.log('youForgotGarbadge');
//         }
//     }, 3500)
// };
//
// function dontMissBus (isdontMissBus) {
//     setTimeout(() => {
//         if (dontMissBus) {
//             console.log('comeToWorkInTime');
//         } else {
//             console.log('beLateForWork');
//         }
//     }, 4000)
// };
//
// wakeup(true, turnOfAlarm);
// cleenTeath();
// turnOnTeapot(true);
// cookingBreakfest('eags');
// toGetDressed(true);
// takeOutTheGarbadge('garbadge');
// dontMissBus();
//

// promise


// function wakeup (iswakeup) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (iswakeup) {
//                 resolve('wokeUp')
//             }
//                 reject('ooops')
//         }, 1000)
//     })
// };
//
// function turnOfAlarm (isToGetUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isToGetUp) {
//                 resolve('GotUp')
//             }
//                 reject('ooops')
//         }, 1000)
//     })
// };
//
// function cleenTeath (iscleenTeath) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (cleenTeath) {
//                 resolve('goToKitchen');
//             }
//             reject('ooops')
//         }, 1500)
//     })
// };
//
// function turnOnTeapot (isturnOnTeapot) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (isturnOnTeapot) {
//             resolve("youWillbeDrinkTea")
//         }
//         reject('eatBreakfestWithoutTea')
//     }, 500)
// })
// };
//
// function cookingBreakfest (iscookingBreakfest) {
//     return new Promise((resolve, reject) => {
//         if ('haveEags') {
//             resolve('willeatOmlet');
//         }
//         reject('eatVivsyanka');
//     })
// };
//
// function toGetDressed (istoGetDressed) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if ('closesAreReady') {
//             resolve('canGoOut');
//         }
//         reject('findclothes');
//         }, 1000)
//     })
// };
//
// function takeOutTheGarbadge (istakeOutTheGarbadge) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (istakeOutTheGarbadge) {
//             resolve('wellDone')
//         }
//             reject('youForgotGarbadge')
//         }, 500)
//     })
// };
//
// function dontMissBus (isdontMissBus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dontMissBus) {
//                 resolve('comeToWorkInTime')
//             }
//             reject('beLateForWork');
//         }, 400)
//     })
// };
//
//
// wakeup(true)
//     .then(morning => {
//         console.log(morning);
//
//         return turnOfAlarm('getUp')
//     })
//     .then(result => {
//         console.log(result);
//
//         return cleenTeath('teathisclear')
//     })
//     .then(bath => {
//         console.log(bath);
//
//     return turnOnTeapot('Teapot')
//     })
//     .then(boil => {
//         console.log(boil);
//
//     return cookingBreakfest('cook')
//     })
//     .then(breakfest => {
//         console.log(breakfest)
//
//         return toGetDressed('wear')
//     })
//     .then(dress => {
//         console.log(dress);
//
//         return takeOutTheGarbadge('garbadge')
//     })
//     .then(out => {
//         console.log(out);
//
//         return dontMissBus('miss')
//     })
//     .then(bus => {
//         console.log(bus);
//     })
//
//
// .catch(reason => {
//     console.log('errror', reason)
// })
//



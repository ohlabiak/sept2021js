// Зробити свій розпорядок дня. // у вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (код має бути написаний окремо)
//затримка має бути не в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//

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
//     }, 2300)
// };
//
// function toGetDressed (istoGetDressed) {
//     setTimeout(() => {
//         if ('closesAreReady') {
//             console.log('canGoOut');
//         } else {
//             console.log('findclothes');
//         }
//     }, 2800)
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


// async function everyMorning() {
//     const step1 = await wakeup(true);
//     const step2 = await turnOfAlarm(step1);
//     const step3 = await cleenTeath(step2);
//     const step4 = await turnOnTeapot(step3);
//     const step5 = await cookingBreakfest(step4);
//     const step6 = await toGetDressed(step5);
//     const step7 = await takeOutTheGarbadge(step6);
//     const step8 = await dontMissBus(step7);
//
//
//
//     console.log(step1, 'step1');
//     console.log(step2, 'step2');
//     console.log(step3);
//     console.log(step4);
//     console.log(step5);
//     console.log(step6);
//     console.log(step7);
//     console.log(step8);
// }
//
// everyMorning()


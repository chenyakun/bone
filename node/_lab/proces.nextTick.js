/**
 * Created by yakuncyk on 15/7/18.
 */

"use strict";

console.log('start');

process.nextTick(function() {
    console.log('nextTick callback');
});




console.log('scheduled');


/**
 * �첽������ִ��
 */
setImmediate(function() {
    console.log('setImmediate execute');
})

//process.nextTick = function() {}

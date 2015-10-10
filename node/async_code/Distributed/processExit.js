/***
 * Excerpted from "Async JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/tbajs for more book information.
***/
['room', 'moon', 'cow jumping over the moon']
.forEach(function(name) {

      /**
       * �� process �������¼�, �� process exit ʱ��ᴥ��
       */
  process.on('exit', function() {

    setTimeout(function() {
      console.log("never run");
    },0);

    console.log('Goodnight, ' + name);
  });
});


console.log("end");
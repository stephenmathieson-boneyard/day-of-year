
try {
  // node
  var day = require('..');
  var assert = require('better-assert');
} catch (e) {
  var day = require('day-of-year');
  var assert = require('assert');
}

describe('dayOfYear()', function () {

  it('should work with dates', function () {
    assert(day(new Date('July 1, 2007')) === 182);
    assert(day(new Date('July 2, 1999')) === 183);
    assert(day(new Date('January 3, 2013')) === 3);
    assert(day(new Date('February 1, 2016')) === 32);
    assert(day(new Date('February 2, 2016')) === 33);
    assert(day(new Date('February 3, 2016')) === 34);
    assert(day(new Date('February 4, 2016')) === 35);
    assert(day(new Date('February 5, 2016')) === 36);
    assert(day(new Date('February 6, 2016')) === 37);
    assert(day(new Date('February 7, 2016')) === 38);
    assert(day(new Date('February 8, 2016')) === 39);
    assert(day(new Date('February 9, 2016')) === 40);
  });

  it('should work no matter what time of day', function() {
      var assertForDay = function(y, mo, d, expectedDayOfYear) {
          for(var h = 0; h <= 23; h++) {
            for( var min = 0; min <= 59; min++ ) {
              assert(day(new Date(y, mo, d, h, min, 0)) === expectedDayOfYear);
            }
          }
      };

      assertForDay(2007, 6, 1, 182);
      assertForDay(2016, 1, 8, 39);
  });


  it('should assume the current date', function () {
    var now = new Date;

    assert(day(now) === day());
  });

});



import {second} from 'webmud/second';
import {assert} from 'chai';

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
  describe('second', function() {
      it('works', function() {
          assert.equal('Hello, world', second('world'));
      });
  });
});

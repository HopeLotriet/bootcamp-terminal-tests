assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);

import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBellville function test' , function(){
    it('should return true' , function(){
        assert.equal(true, isFromBellville('CY 123'), true);
    });
    
    it('should return false' , function(){
        assert.equal(false, isFromBellville('CJ 123'), false);
    });

});
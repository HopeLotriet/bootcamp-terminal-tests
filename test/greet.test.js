import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Musawenkosi correctly', function(){
        assert.equal('Hello, Musawenkosi', greet('Musawenkosi'));
    });
    it('should greet Samukelisiwe correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Samukelisiwe', greet('Samukelisiwe'));
    });
});
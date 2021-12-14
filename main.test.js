// const { TestWatcher } = require("jest");
const translate = require("./main");

describe("translate", function(){ 
    test("vowel word a", function(){
        expect(translate("APPLE")).toEqual("appleway");
    });

    test("vowel word e", function(){
        expect(translate("EAGLE")).toEqual("eagleway");
    });

    test("vowel word i", function(){
        expect(translate("IRIS")).toEqual("irisway");
    });

    test("vowel word o", function(){
        expect(translate("OPEN")).toEqual("openway");
    });

    test("vowel word u", function(){
        expect(translate("UNDER")).toEqual("underway");
    });

    test("one consonant word push", function(){
        expect(translate("push")).toEqual("ushpay");
    });

    test("two consonant word plush", function(){
        expect(translate("plush")).toEqual("ushplay");
    });

    test("three consonant word school", function(){
        expect(translate("school")).toEqual("oolschay");
    });

   

});
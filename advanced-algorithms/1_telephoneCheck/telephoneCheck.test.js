import {telephoneCheck} from "./telephoneCheck";

describe('Suit telephone check ', () => {

    test('TEST_1 telephoneCheck("555-555-5555") should return a boolean.\n', () => {
        expect(typeof telephoneCheck("555-555-5555")).toBe('boolean');
    });
    test('TEST_2 telephoneCheck("1 555-555-5555") should return true.\n', () => {
        expect(telephoneCheck("1 555-555-5555")).toBeTruthy();
    });
    test('TEST_3 telephoneCheck("1 (555) 555-5555") should return true.\n', () => {
        expect(telephoneCheck("1 (555) 555-5555")).toBeTruthy();
    });
    test('TEST_4 telephoneCheck("5555555555") should return true.\n', () => {
        expect(telephoneCheck("5555555555")).toBeTruthy();
    });
    test('TEST_5 telephoneCheck("555-555-5555") should return true.\n', () => {
        expect(telephoneCheck("555-555-5555")).toBeTruthy();
    });
    test('TEST_6 telephoneCheck("(555)555-5555") should return true.\n', () => {
        expect(telephoneCheck("(555)555-5555")).toBeTruthy();
    });
    test('TEST_7 telephoneCheck("1(555)555-5555") should return true.\n', () => {
        expect(telephoneCheck("1(555)555-5555")).toBeTruthy();
    });
    test('TEST_8 telephoneCheck("555-5555") should return false.\n', () => {
        expect(telephoneCheck("555-5555")).toBeFalsy();
    });
    test('TEST_9 telephoneCheck(5555555") should return false.\n', () => {
        expect(telephoneCheck("5555555")).toBeFalsy();
    });
    test('TEST_10 telephoneCheck("1 555)555-5555") should return false.\n', () => {
        expect(telephoneCheck("1 555)555-5555")).toBeFalsy();
    });
    test('TEST_11 telephoneCheck("1 555 555 5555") should return true.\n', () => {
        expect(telephoneCheck("1 555 555 5555")).toBeTruthy();
    });
    test('TEST_12 telephoneCheck("1 456 789 4444") should return true.\n', () => {
        expect(telephoneCheck("1 456 789 4444")).toBeTruthy();
    });
    test('TEST_13 telephoneCheck("123**&!!asdf#") should return false.', () => {
        expect(telephoneCheck("123**&!!asdf#")).toBeFalsy();
    });
    test('TEST_14 telephoneCheck("55555555") should return false.\n', () => {
        expect(telephoneCheck("55555555")).toBeFalsy();
    });
    test('TEST_15 telephoneCheck("(6505552368)") should return false', () => {
        expect(telephoneCheck("(6505552368)")).toBeFalsy();
    });
    test('TEST_16 telephoneCheck("2 (757) 622-7382")should return false.\n', () => {
        expect(telephoneCheck("2 (757) 622-7382")).toBeFalsy();
    });
    test('TEST_17 telephoneCheck("0 (757) 622-7382")should return false.', () => {
        expect(telephoneCheck("0 (757) 622-7382")).toBeFalsy();
    });

    test('TEST_18 telephoneCheck("-1 (757) 622-7382")should return false', () => {
        expect(telephoneCheck("-1 (757) 622-7382")).toBeFalsy();
    });

    test('TEST_19 telephoneCheck("2 757 622-7382") should return false.\n', () => {
        expect(telephoneCheck("2 757 622-7382")).toBeFalsy();
    });

    test('TEST_20 telephoneCheck("10 (757) 622-7382")should return false.\n', () => {
        expect(telephoneCheck("10 (757) 622-7382")).toBeFalsy();
    });

    test('TEST_21 telephoneCheck("27576227382") should return false.', () => {
        expect(telephoneCheck("27576227382")).toBeFalsy();
    });

    test('TEST_22 telephoneCheck("(275)76227382") should return false.\n', () => {
        expect(telephoneCheck("(275)76227382")).toBeFalsy();
    });

    test('TEST_23 telephoneCheck("2(757)6227382") should return false.\n', () => {
        expect(telephoneCheck("2(757)6227382")).toBeFalsy();
    });

    test('TEST_24 telephoneCheck("2(757)622-7382") should return false.\n', () => {
        expect(telephoneCheck("2(757)622-7382")).toBeFalsy();
    });

    test('TEST_25 telephoneCheck("555)-555-5555") should return false.\n', () => {
        expect(telephoneCheck("555)-555-5555")).toBeFalsy();
    });

    test('TEST_26 telephoneCheck("(555-555-5555") should return false.\n', () => {
        expect(telephoneCheck("(555-555-5555")).toBeFalsy();
    });

    test('TEST_27 telephoneCheck("(555)5(55?)-5555")should return false.\n', () => {
        expect(telephoneCheck("(555)5(55?)-5555")).toBeFalsy();
    });

});
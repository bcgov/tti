import { PHONE_NUMBER_REGEX } from "./validators";
describe('Phone number regex with international and Canadian formats', () => {

    const validNumbers = [
        '+1 604-123-4567',
        '6041234567',
        '(604) 123 4567',
        '1(604) 123 4567',
        '16041234567',
        '1-604-123-4567',
        '604.123.4567',
        '604-123-4567',
        '+1(604) 123-4567',
        '1604 123 4567',
        '+44 20 7946 0958',
        '+91-9876543210',
        '+1 (416) 555-1234 ext 123',
        '+1 (416) 555-1234ext123',
        '+1 (416) 555-1234 ext.123',
        '+1 (416) 555-1234 x123',
        '+1 (416) 555-1234x123',
        '+1 (416) 555-1234 #123',
        '+1 (416) 555-1234#123',
        '+1 (416) 555-1234 extension 123',
        '+1 (416) 555-1234extension123',
        '1231233344 #323',
        '1231233344#323',
        '+56 9 98765432',
        '+56 2 23456789',
        '+56998765432',
        '+56223456789',
        '+56 9 98765432 ext123',
        '+56 9 98765432#456',
        '+56998765432x789'
    ];

    const invalidNumbers = [
        'abcd',
        '+1 604-123-4567 ext',
        '+1 604-123-4567 x',
        '+1 604-123-4567 #',
        '+1 604-123-4567 extension',
        '123',
        '+1 (604) abc-defg',
        '++1 604-123-4567',
        '+1 604-123-4567 xabcdef',
        '+1 604-123-4567 x1234567',
        '+569'
    ];

    validNumbers.forEach((number) => {
        it(`should validate: "${number}"`, () => {
            expect(PHONE_NUMBER_REGEX.test(number)).toBe(true);
        });
    });

    invalidNumbers.forEach((number) => {
        it(`should not validate: "${number}"`, () => {
            expect(PHONE_NUMBER_REGEX.test(number)).toBe(false);
        });
    });

    describe('Edge cases', () => {
        it('should fail if extension keyword is used with no digits', () => {
            expect(PHONE_NUMBER_REGEX.test('+1 604-123-4567 x')).toBe(false);
            expect(PHONE_NUMBER_REGEX.test('+1 604-123-4567 ext')).toBe(false);
            expect(PHONE_NUMBER_REGEX.test('+1 604-123-4567 #')).toBe(false);
        });

        it('should fail if extension is too long or contains letters', () => {
            expect(PHONE_NUMBER_REGEX.test('+1 604-123-4567 xabcdef')).toBe(false);
            expect(PHONE_NUMBER_REGEX.test('+1 604-123-4567 x1234567')).toBe(false);
        });

        it('should fail on malformed country code', () => {
            expect(PHONE_NUMBER_REGEX.test('++1 604-123-4567')).toBe(false);
        });
    });

});

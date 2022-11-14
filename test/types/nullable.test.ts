import { Nullable } from '../../src';

describe('Nullable Type Test', () => {
    test('Null should be a valid nullable', () => {
        const func: Nullable<number> = null;

        expect(func).toBeNull();
    });

    test('Undefined should be a valid nullable', () => {
        const func: Nullable<number> = undefined;

        expect(func).toBeUndefined();
    });

    test('T should be a valid nullable', () => {
        const func: Nullable<number> = 2;

        expect(func).not.toBeNull();
    });
});

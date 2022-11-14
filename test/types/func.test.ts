import { Func } from '../../src';

describe('Func Type Test', () => {
    test('It should be a valid func', () => {
        const func: Func<number, [number, number]> = (a0: number, a1: number) =>
            2;

        expect(func).not.toBeNull();
    });
});

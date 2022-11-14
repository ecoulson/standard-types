import { GenericConstructor } from '../../src';

describe('Generic Constructor Type Test', () => {
    test('It should be a valid func', () => {
        const constructor: GenericConstructor<Map<string, number>> = Map;

        expect(constructor).not.toBeNull();
    });
});

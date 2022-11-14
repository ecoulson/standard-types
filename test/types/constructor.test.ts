import { Constructor } from '../../src';

describe('Constructor Type Test', () => {
    test('It should be a valid constructor', () => {
        const constructor: Constructor = Map;

        expect(constructor).not.toBeNull();
    });
});

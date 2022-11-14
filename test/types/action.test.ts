import { Action } from '../../src';

describe('Action Type Test', () => {
    test('It should be a valid action', () => {
        const action: Action<number> = () => 2;

        expect(action).not.toBeNull();
    });
});

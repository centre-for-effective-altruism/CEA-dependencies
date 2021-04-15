import { add } from '../lib/addition'

describe("basic test", () => {
  test("addition", () => expect(add(2,3)).toEqual(5));
});

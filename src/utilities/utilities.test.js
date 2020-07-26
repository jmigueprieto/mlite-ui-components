import { debounce } from "./";

describe("Utilities", () => {
  jest.useFakeTimers();

  it("debounced fn should be callled only once", () => {
    const costlyFn = jest.fn(() =>
      console.log("I should only be printed once")
    );
    const obj = {
      fn: debounce(costlyFn, 500)
    };

    for (let i = 0; i < 10; i++) {
      obj.fn();
    }

    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(10);
    expect(costlyFn).toHaveBeenCalledTimes(1);
  });
});

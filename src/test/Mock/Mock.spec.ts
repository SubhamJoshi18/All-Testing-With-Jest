const add = (a, b, callback) => {
  callback(a, b);
};

describe("Mock Testing Practise", () => {
  it("should return undefined by default", () => {
    const mock = jest.fn();
    let result = mock("subham");
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith("subham");
    expect(mock).toHaveBeenCalledTimes(1);
  });

  describe("Mock Implementation", () => {
    test("Mocking", () => {
      const mock = jest.fn(() => "bar");
      expect(mock()).toBe("bar");
      expect(mock).toHaveBeenCalled();
    });
    test("Mocking Implementation", () => {
      const mock = jest.fn().mockImplementation(() => "bar");
      expect(mock()).toBe("bar");
      expect(mock).toHaveBeenCalled();
    });

    test("Mocking Return value", () => {
      const mock = jest.fn();
      mock.mockReturnValue("bar");
      expect(mock()).toBe("bar");
      expect(mock).toHaveBeenCalled();
    });

    test("Mocking Promise Resolve", () => {
      const mock = jest.fn();
      mock.mockResolvedValue("bar");
      expect(mock()).resolves.toBe("bar");
      expect(mock).toHaveBeenCalled();
    });

    test("Mocking Dependency Injection", () => {
      const mock = jest.fn();
      mock.mockReturnValue(3);
      const actual = add(1, 2, mock);
      expect(mock).toBe(3);
    });
  });
});

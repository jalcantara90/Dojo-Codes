// space to write production code

function isMultipleOf(input: number, multiple: number): boolean {
  return input % multiple === 0;
}

const mapper: Record<number, string> = {
  3: 'Fizz', 
  5: 'Buzz',
  15: 'FizzBuzz'
}

// function multipleMapper(input: number): string{
//   const index = Object.keys(mapper).find(multiple => {
//     return isMultipleOf(input, parseInt(multiple));
//   })
  
//   return index ? mapper[index] : undefined;
// }

function fizzBuzz(input: number): string {
  let result = '';

  if (isMultipleOf(input, 3)) {
    result += "Fizz";
  }

  if (isMultipleOf(input,5)) {
    result += "Buzz";
  }

  // const result = multipleMapper(input);
  
  return result ? result : input.toString();
}

// - End space to write production code

describe("FIZZBUZZ", () => {
  it("should return ¨1¨ when receive 1 as param", () => {
    const result = fizzBuzz(1);

    expect(result).toBe("1");
  });
  it("should return ¨2¨ when receive 2 as param", () => {
    const result = fizzBuzz(2);

    expect(result).toBe("2");
  });
  it("should return ¨4¨ when receive 4 as param", () => {
    const result = fizzBuzz(4);

    expect(result).toBe("4");
  });
  it("should return ¨Fizz¨ when receive 3 as param", () => {
    const result = fizzBuzz(3);

    expect(result).toBe("Fizz");
  });
  it("should return ¨Fizz¨ when receive 6 as param", () => {
    const result = fizzBuzz(6);

    expect(result).toBe("Fizz");
  });
  it("should return ¨Fizz¨ when receive 9 as param", () => {
    const result = fizzBuzz(9);

    expect(result).toBe("Fizz");
  });
  it('should return "Buzz" when we receive 5 as a param', () => {
    const result = fizzBuzz(5);

    expect(result).toBe('Buzz');
  });
  it('should return "Buzz" when we receive 10 as a param', () => {
    const result = fizzBuzz(10);

    expect(result).toBe('Buzz');
  });
  it('should return "Buzz" when we receive 20 as a param', () => {
    const result = fizzBuzz(20);

    expect(result).toBe('Buzz');
  });
  it('should return "FizzBuzz" when we receive 15 as a param', () => {
    const result = fizzBuzz(15);

    expect(result).toBe('FizzBuzz');
  });
  it('should return "FizzBuzz" when we receive 30 as a param', () => {
    const result = fizzBuzz(30);

    expect(result).toBe('FizzBuzz');
  });
  it('should return "FizzBuzz" when we receive 45 as a param', () => {
    const result = fizzBuzz(45);

    expect(result).toBe('FizzBuzz');
  });
});



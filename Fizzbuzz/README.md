# FIZZBUZZ

Write a function that takes positive integers and outputs their string representation.

- If the number is a multiple of three, return the string **"Fizz"**.
- If the number is a multiple of five, return the string **"Buzz"**.
- If the number is a multiple of both three and five, return the string **"FizzBuzz"**.

## Objectives

We are going to use this dojo to practice TDD (test driven development), TDD is software development approach in which test cases are developed to specify and validate what the code will do.
We are going to create the test cases first and later the production code, for that we will follow the **Red, Green, Refactor** approach, it means:

- Red: we start with failing test.
- Green: we add the minimum code to test pass.
- Refactor: we do an optimisation if needed (Without test failing).

When we did the first cycle, we add new test cases to do more generic our implementation and verify that our code is working in all scenarios.

Then we add new test case for the next requirement and start the RED, GREEN, REFACTOR cicle a new time.

### TIPS

we are going to follow the **fake it** and the **rule of three**, it means that when we start a cycle, the first thing we do it to ensure that we are not writing more code than needed is **fake it**, so if we have the next test.

```typescript
  it('Should A when receive a', () => {
    const result = myFunction('a');

    expect().toBe('A');
  });
```

We fake it and the result should be:

```typescript
  function myFunction(letter: string): string {
    return 'A';
  }
```

This makes that our test pass and we didn't write anything that we don't need to pass our bussiness rules, later we add other test passing as parameter 'b'

```typescript
  it('Should B when receive b', () => {
    const result = myFunction('b');

    expect().toBe('B');
  });
```

We fake it a new time and the result should be:

```typescript
  function myFunction(letter: string): string {
    if (letter === 'b') {
      return 'B';
    }
  
    return 'A';
  }
```

Then we have two test passing, but we are going triangulate it adding a third test to force us to refactor and generalize it our code

```typescript
  it('Should C when receive c', () => {
    const result = myFunction('c');

    expect().toBe('C');
  });
```

Now if we continue the same approach, will get the next function:

```typescript
  function myFunction(letter: string): string {
    if (letter === 'c') {
      return 'C';
    }

    if (letter === 'b') {
      return 'B';
    }
  
    return 'A';
  }
```

It works but now we need to apply the **rule of three**, it means that we have three times the same code, so we can refactorize it to create more generic code and ensuring that our code still has all passing test.

```typescript
  function myFunction(letter: string): string {
    return letter.toUpperCase();
  }
```

This steps can seem that are not very useful, but when we are starting to developing a system we usually do optimisation and generalise the function very soon in case we need in the future, following this two steps, we can ensure that we only write the code that we really need right now and not go to early optimisation.

if you want to read more about TDD go [here](https://www.guru99.com/test-driven-development.html)
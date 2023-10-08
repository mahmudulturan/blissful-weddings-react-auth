<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>In this first line we can see "greeting" variable is declared. In this second line trying to reassign value of "greetign" which is never declared and then when trying to console.log the "greetign" it will shown "ReferenceError: greetign is not defined". Because the "greetign" variable is never declared</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>We can see here a "sum" function is declared. Which is expect 2 arguements and return the sum of two perameters. And then when trying to call the function with two perameters and the first one is 1 as number and the second one is "2" as strings. We  know that multiple strings can  concatenate together with '+' sign. And when the function is calling by one number and one string it will concatenate together and it will return "12" as string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.

<i>In this first line "food" is declared as an array and the array length is 4. And in this second line "info" is declared as an object and the element's key name is "favouriteFood" and the value is 0 number index of the food array. In this third line trying to re-assign value of "info" objects "favoriteFood" property. and at last trying to console the "food" array. It will show the orginal array that was delared in this first line. Because in those 2/3 lines changes does not affect the original food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>The sayHi function is expecting "name" arguements. And it will return "`Hi there,${name}`". We know that when a function if expecting a arguements and when the parameter is not provided, it defaults to undefined. So in this last line trying to call the function with no perameter and it will return "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>In this first line the "count" variable declared with value 0. The second line "nums" declared as an array. And this array length are 4  [0,1,2,3]. And then the third line is trying to run loop to this array with forEach method. In this forEach loop method will give single item of this array as "num" perameter to this inner function of forEach. In this inner function's body we can see a condition that if "num" is true then count value will increase +1. In Javascript 0 is a falsy value. that's why it will not pass into this condition. And the other three items can pass the condtion and the count will increamented three times. And atlast when console the count it will shown 3. Because count's previous value was 0. After 3 times increment the current value is 3 and it will show 3.</i>

</p>
</details>

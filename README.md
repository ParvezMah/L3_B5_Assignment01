## Blog-01 : Difference between   `any`, `unknown` and `never` in TypeScript
when learning TypeScript, you may come across some special types like `any`, `unknwon` and `never`. These types are difference and used for difference purposes.

### `any`
The `any` type tells TypeScript to stop Checking the type.You can assiagn any ind of value to it.
```ts
let value: any = "Hello";
value = 123; // OK
value = true; // Still OK


### `unknwon`
The `unknwon` type is like `any` but safer. You can't use it directly without checking the type.
```


```ts
let input: unknown = "Text";
;if(typeof input === "string") {
  console.log(input.toUpperCase()); // safe to use
}
```


### `never`
The `never` is used when a value should neve esist It is often used in fucntions that throw errors or code that witll nevr be reached.


```ts
function throwError(message: string): never{
throw new Error(message);
```

### Summery
any - Turs off type checking
unknown - Safer versionof any
never - Used when something should never happen

## Blog-02 Union and Intersection Types in Typescirpt
Typescript allows us to work with multiple types using **union** and **intersection** types. These are useful when a value could be more than one type or when we want to continue multiple types into one. 



### Union  Types(`|`)
A **Union type** means a value can be **one of many types**.


### Intersection  Types(`|`)
A **Intersection type** means a value must satisfy all combined types.



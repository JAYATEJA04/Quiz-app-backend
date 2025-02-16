export const TS_Fundamentals_Quiz_Questions = [
  {
    id: 1,
    question: "What is TypeScript?",
    options: [
      { optionId: 1, optionText: "A new programming language" },
      { optionId: 2, optionText: "A superset of JavaScript" },
      { optionId: 3, optionText: "A JavaScript framework" },
      { optionId: 4, optionText: "A JavaScript compiler" },
    ],
    correctAnswer: 2,
    explanation:
      "TypeScript is a strongly typed superset of JavaScript that adds optional static typing and other features to the language.",
    referenceLink: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    id: 2,
    question: "Which of the following is NOT a basic type in TypeScript?",
    options: [
      { optionId: 1, optionText: "number" },
      { optionId: 2, optionText: "string" },
      { optionId: 3, optionText: "boolean" },
      { optionId: 4, optionText: "char" },
    ],
    correctAnswer: 4,
    explanation:
      "TypeScript includes number, string, and boolean as basic types, but not char. Character values are represented as strings.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
  },
  {
    id: 3,
    question:
      "How do you declare a variable with a specific type in TypeScript?",
    options: [
      { optionId: 1, optionText: "let x: number = 5;" },
      { optionId: 2, optionText: "var x = 5 as number;" },
      { optionId: 3, optionText: "const x = (number)5;" },
      { optionId: 4, optionText: "number x = 5;" },
    ],
    correctAnswer: 1,
    explanation:
      "In TypeScript, you can specify a type by using a colon (:) followed by the type after the variable name.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables",
  },
  {
    id: 4,
    question: 'What does the "any" type represent in TypeScript?',
    options: [
      { optionId: 1, optionText: "A union of all types" },
      { optionId: 2, optionText: "A type that can be anything" },
      { optionId: 3, optionText: "An error in type checking" },
      { optionId: 4, optionText: "A placeholder for an unknown type" },
    ],
    correctAnswer: 2,
    explanation:
      'The "any" type is used when you want to opt-out of type checking for a variable.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",
  },
  {
    id: 5,
    question: "Which keyword is used to define an interface in TypeScript?",
    options: [
      { optionId: 1, optionText: "interface" },
      { optionId: 2, optionText: "type" },
      { optionId: 3, optionText: "class" },
      { optionId: 4, optionText: "struct" },
    ],
    correctAnswer: 1,
    explanation:
      'The "interface" keyword is used to define an interface in TypeScript.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces",
  },
  {
    id: 6,
    question:
      "What is the correct way to define an array of numbers in TypeScript?",
    options: [
      { optionId: 1, optionText: "let arr: number[] = [1, 2, 3];" },
      { optionId: 2, optionText: "let arr: array<number> = [1, 2, 3];" },
      { optionId: 3, optionText: "let arr: number = [1, 2, 3];" },
      { optionId: 4, optionText: "let arr: [number] = [1, 2, 3];" },
    ],
    correctAnswer: 1,
    explanation:
      "In TypeScript, you can define an array of numbers using the number[] syntax.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays",
  },
  {
    id: 7,
    question: 'What is the purpose of the "void" type in TypeScript?',
    options: [
      { optionId: 1, optionText: "To represent the absence of a return value" },
      { optionId: 2, optionText: "To indicate an error" },
      { optionId: 3, optionText: "To represent an empty object" },
      { optionId: 4, optionText: "To define a variable with no initial value" },
    ],
    correctAnswer: 1,
    explanation:
      'The "void" type is commonly used as the return type of functions that do not return a value.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/functions.html#void",
  },
  {
    id: 8,
    question:
      "Which of the following is a valid way to define a function type in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText: "type Func = (x: number, y: number) => number;",
      },
      {
        optionId: 2,
        optionText: "type Func = function(x: number, y: number): number;",
      },
      {
        optionId: 3,
        optionText: "type Func = {(x: number, y: number): number};",
      },
      { optionId: 4, optionText: "All of the above" },
    ],
    correctAnswer: 4,
    explanation:
      "TypeScript provides multiple ways to define function types, including arrow function syntax, function keyword, and object literal syntax.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions",
  },
  {
    id: 9,
    question: 'What is the purpose of the "as" keyword in TypeScript?',
    options: [
      { optionId: 1, optionText: "To perform type assertion" },
      { optionId: 2, optionText: "To create an alias for a type" },
      { optionId: 3, optionText: "To define a new type" },
      { optionId: 4, optionText: "To import a module" },
    ],
    correctAnswer: 1,
    explanation:
      'The "as" keyword is used for type assertion in TypeScript, allowing you to tell the compiler to treat a value as a specific type.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions",
  },
  {
    id: 10,
    question: 'What is the difference between "let" and "const" in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText: '"let" is block-scoped, "const" is function-scoped',
      },
      {
        optionId: 2,
        optionText: '"let" allows reassignment, "const" doesn\'t',
      },
      {
        optionId: 3,
        optionText: '"let" is used for primitives, "const" for objects',
      },
      { optionId: 4, optionText: "There is no difference" },
    ],
    correctAnswer: 2,
    explanation:
      'Both "let" and "const" are block-scoped, but "let" allows reassignment of the variable while "const" doesn\'t.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/variable-declarations.html",
  },
  {
    id: 11,
    question: 'What is the purpose of the "readonly" modifier in TypeScript?',
    options: [
      { optionId: 1, optionText: "To make a property immutable" },
      { optionId: 2, optionText: "To make a class abstract" },
      { optionId: 3, optionText: "To prevent a class from being instantiated" },
      { optionId: 4, optionText: "To make a method private" },
    ],
    correctAnswer: 1,
    explanation:
      'The "readonly" modifier makes a property immutable, meaning it can only be assigned a value when it\'s declared or in the constructor.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly",
  },
  {
    id: 12,
    question:
      "Which of the following is NOT a valid way to declare a tuple in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText: 'let tuple: [string, number] = ["hello", 10];',
      },
      {
        optionId: 2,
        optionText: 'let tuple: Array<string | number> = ["hello", 10];',
      },
      {
        optionId: 3,
        optionText: 'let tuple = ["hello", 10] as [string, number];',
      },
      {
        optionId: 4,
        optionText: 'let tuple: [string, number] = new Array("hello", 10);',
      },
    ],
    correctAnswer: 2,
    explanation:
      "This option declares a union type array, not a tuple. Tuples have a fixed number of elements of specific types.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
  },
  {
    id: 13,
    question: 'What is the purpose of the "never" type in TypeScript?',
    options: [
      { optionId: 1, optionText: "To represent a type that never occurs" },
      { optionId: 2, optionText: "To indicate an infinite loop" },
      {
        optionId: 3,
        optionText: "To define a variable that can't be assigned",
      },
      { optionId: 4, optionText: "To represent an empty array" },
    ],
    correctAnswer: 1,
    explanation:
      'The "never" type represents the type of values that never occur, such as a function that always throws an exception or never returns.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type",
  },
  {
    id: 14,
    question: "What is the purpose of type inference in TypeScript?",
    options: [
      { optionId: 1, optionText: "To automatically assign types to variables" },
      { optionId: 2, optionText: "To convert JavaScript to TypeScript" },
      { optionId: 3, optionText: "To optimize code execution" },
      { optionId: 4, optionText: "To catch runtime errors" },
    ],
    correctAnswer: 1,
    explanation:
      "Type inference in TypeScript allows the compiler to automatically determine and assign types to variables based on their usage and initialization.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/type-inference.html",
  },
  {
    id: 15,
    question: "Which of the following is true about enums in TypeScript?",
    options: [
      { optionId: 1, optionText: "Enums are always numeric" },
      { optionId: 2, optionText: "Enums can be string-based" },
      { optionId: 3, optionText: "Enums cannot have custom values" },
      { optionId: 4, optionText: "Enums are not supported in TypeScript" },
    ],
    correctAnswer: 2,
    explanation:
      "TypeScript supports both numeric and string-based enums, allowing you to define a set of named constants.",
    referenceLink: "https://www.typescriptlang.org/docs/handbook/enums.html",
  },
];

export const TS_Intermediate_Quiz_Questions = [
  {
    id: 1,
    question: "What is a union type in TypeScript?",
    options: [
      { optionId: 1, optionText: "A type that can be one of several types" },
      {
        optionId: 2,
        optionText: "A type that combines multiple types into one",
      },
      { optionId: 3, optionText: "A type that represents a union of sets" },
      { optionId: 4, optionText: "A type used for database operations" },
    ],
    correctAnswer: 1,
    explanation:
      "A union type in TypeScript allows a value to be one of several types, denoted using the | operator.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",
  },
  {
    id: 2,
    question: 'What is the purpose of the "keyof" operator in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText: "To get the keys of an object type as a union",
      },
      { optionId: 2, optionText: "To create a new key in an object" },
      { optionId: 3, optionText: "To check if a key exists in an object" },
      { optionId: 4, optionText: "To remove a key from an object" },
    ],
    correctAnswer: 1,
    explanation:
      'The "keyof" operator in TypeScript is used to get a union type of all the keys (as literal types) of an object type.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",
  },
  {
    id: 3,
    question: "What is a generic type in TypeScript?",
    options: [
      { optionId: 1, optionText: "A type that can work with multiple types" },
      { optionId: 2, optionText: "A type that is automatically inferred" },
      { optionId: 3, optionText: "A type that represents any value" },
      { optionId: 4, optionText: "A type used for global variables" },
    ],
    correctAnswer: 1,
    explanation:
      "Generic types in TypeScript allow you to create reusable components that can work with a variety of types rather than a single one.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/generics.html",
  },
  {
    id: 4,
    question:
      'What is the purpose of the "extends" keyword in TypeScript interfaces?',
    options: [
      { optionId: 1, optionText: "To create a subclass" },
      { optionId: 2, optionText: "To merge multiple interfaces" },
      { optionId: 3, optionText: "To extend the functionality of a class" },
      {
        optionId: 4,
        optionText: "To create a new interface based on an existing one",
      },
    ],
    correctAnswer: 4,
    explanation:
      'The "extends" keyword in TypeScript interfaces is used to create a new interface that inherits properties and methods from one or more existing interfaces.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types",
  },
  {
    id: 5,
    question: "What is a mapped type in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText: "A type that transforms properties of an existing type",
      },
      { optionId: 2, optionText: "A type used for mapping functions" },
      {
        optionId: 3,
        optionText: "A type that represents a map data structure",
      },
      { optionId: 4, optionText: "A type used for geographical mapping" },
    ],
    correctAnswer: 1,
    explanation:
      "Mapped types in TypeScript allow you to create new types based on old ones by transforming properties in some way.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
  },
  {
    id: 6,
    question: 'What is the purpose of the "infer" keyword in TypeScript?',
    options: [
      { optionId: 1, optionText: "To infer types in conditional types" },
      { optionId: 2, optionText: "To automatically assign types to variables" },
      { optionId: 3, optionText: "To create type inference rules" },
      { optionId: 4, optionText: "To infer the return type of a function" },
    ],
    correctAnswer: 1,
    explanation:
      'The "infer" keyword is used within conditional types to infer type variables from the type we\'re comparing against.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
  },
  {
    id: 7,
    question: "What is a literal type in TypeScript?",
    options: [
      { optionId: 1, optionText: "A type that represents a specific value" },
      { optionId: 2, optionText: "A type used for string literals" },
      { optionId: 3, optionText: "A type used for number literals" },
      { optionId: 4, optionText: "A type that cannot be changed" },
    ],
    correctAnswer: 1,
    explanation:
      "Literal types in TypeScript allow you to specify exact values that a string, number, or boolean must have.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types",
  },
  {
    id: 8,
    question:
      'What is the purpose of the "Partial<T>" utility type in TypeScript?',
    options: [
      { optionId: 1, optionText: "To make all properties of T optional" },
      { optionId: 2, optionText: "To select a part of T" },
      { optionId: 3, optionText: "To make T partially mutable" },
      { optionId: 4, optionText: "To create a subset of T" },
    ],
    correctAnswer: 1,
    explanation:
      'The "Partial<T>" utility type constructs a type with all properties of T set to optional.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype",
  },
  {
    id: 9,
    question: "What is a discriminated union in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText:
          "A union type with a common property to distinguish between variants",
      },
      { optionId: 2, optionText: "A union of discriminated types" },
      {
        optionId: 3,
        optionText: "A type used to discriminate between different unions",
      },
      { optionId: 4, optionText: "A union type that excludes certain types" },
    ],
    correctAnswer: 1,
    explanation:
      "A discriminated union is a union type where each member has a common property (the discriminant) that can be used to narrow down the specific type within the union.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
  },
  {
    id: 10,
    question: "What is the purpose of index signatures in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText: "To define a type for properties with dynamic names",
      },
      { optionId: 2, optionText: "To create indexed arrays" },
      {
        optionId: 3,
        optionText: "To access object properties using bracket notation",
      },
      {
        optionId: 4,
        optionText: "To define the order of properties in an object",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Index signatures allow you to type objects with properties that have dynamic names.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures",
  },
  {
    id: 11,
    question: "What is a type assertion in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText:
          "A way to tell the compiler to treat a value as a specific type",
      },
      { optionId: 2, optionText: "A way to check types at runtime" },
      { optionId: 3, optionText: "A method to assert that a type exists" },
      { optionId: 4, optionText: "A technique to create new types" },
    ],
    correctAnswer: 1,
    explanation:
      "Type assertions in TypeScript allow you to tell the compiler to treat a value as a specific type, overriding its inferred type.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions",
  },
  {
    id: 12,
    question: 'What is the purpose of the "readonly" modifier in TypeScript?',
    options: [
      { optionId: 1, optionText: "To make properties immutable" },
      { optionId: 2, optionText: "To create read-only arrays" },
      { optionId: 3, optionText: "To prevent class inheritance" },
      { optionId: 4, optionText: "To define constant variables" },
    ],
    correctAnswer: 1,
    explanation:
      'The "readonly" modifier in TypeScript is used to make properties immutable, meaning they can only be assigned a value when they are initialized or in the constructor.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly",
  },
  {
    id: 13,
    question: "What is a tuple type in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText:
          "An array with a fixed number of elements of specific types",
      },
      { optionId: 2, optionText: "A type alias for arrays" },
      { optionId: 3, optionText: "A special kind of object type" },
      { optionId: 4, optionText: "A type for key-value pairs" },
    ],
    correctAnswer: 1,
    explanation:
      "Tuple types allow you to express an array with a fixed number of elements, where each element may have a different type.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
  },
  {
    id: 14,
    question: 'What is the "unknown" type in TypeScript?',
    options: [
      { optionId: 1, optionText: 'A type-safe alternative to "any"' },
      { optionId: 2, optionText: "A type for unknown variables" },
      { optionId: 3, optionText: "A placeholder for generic types" },
      { optionId: 4, optionText: "A type for null and undefined values" },
    ],
    correctAnswer: 1,
    explanation:
      'The "unknown" type is a type-safe counterpart of "any". It ensures you can\'t use a value until you\'ve narrowed its type.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",
  },
  {
    id: 15,
    question:
      'What is the purpose of the "Pick<T, K>" utility type in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText: "To create a type with a subset of T's properties",
      },
      { optionId: 2, optionText: "To select random properties from T" },
      { optionId: 3, optionText: "To remove properties from T" },
      { optionId: 4, optionText: "To reorder properties in T" },
    ],
    correctAnswer: 1,
    explanation:
      'The "Pick<T, K>" utility type constructs a type by picking the set of properties K from T.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys",
  },
];

export const TS_Advance_Quiz_Questions = [
  {
    id: 1,
    question: "What is a conditional type in TypeScript?",
    options: [
      { optionId: 1, optionText: "A type that depends on a condition" },
      { optionId: 2, optionText: "A type used in if-else statements" },
      { optionId: 3, optionText: "A type for boolean conditions" },
      { optionId: 4, optionText: "A type that changes at runtime" },
    ],
    correctAnswer: 1,
    explanation:
      "Conditional types in TypeScript allow you to create types that depend on other types, using a syntax similar to conditional expressions.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
  },
  {
    id: 2,
    question: 'What is the purpose of the "unknown" type in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText: "To represent any value, but in a type-safe manner",
      },
      { optionId: 2, optionText: "To indicate an error in type checking" },
      { optionId: 3, optionText: "To represent a value of unknown origin" },
      { optionId: 4, optionText: "To bypass type checking" },
    ],
    correctAnswer: 1,
    explanation:
      'The "unknown" type is the type-safe counterpart of "any". It ensures you can\'t use a value until you\'ve narrowed its type.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",
  },
  {
    id: 3,
    question: "What is a decorator in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText:
          "A special kind of declaration that can be attached to classes, methods, or properties",
      },
      { optionId: 2, optionText: "A function that returns a new type" },
      { optionId: 3, optionText: "A type of comment used for documentation" },
      { optionId: 4, optionText: "A way to decorate console output" },
    ],
    correctAnswer: 1,
    explanation:
      "Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/decorators.html",
  },
  {
    id: 4,
    question: 'What is the "satisfies" operator in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText:
          "An operator that checks if a value matches a type without changing the inferred type",
      },
      {
        optionId: 2,
        optionText: "An operator that satisfies all type constraints",
      },
      { optionId: 3, optionText: "An operator used in conditional types" },
      {
        optionId: 4,
        optionText:
          "An operator that checks if all properties of an object are satisfied",
      },
    ],
    correctAnswer: 1,
    explanation:
      'The "satisfies" operator allows you to validate that a value matches a type without changing the resulting type of the expression.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator",
  },
  {
    id: 5,
    question: "What is a type predicate in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText: "A function that returns a boolean and narrows the type",
      },
      { optionId: 2, optionText: "A type that predicts another type" },
      { optionId: 3, optionText: "A conditional statement in a type" },
      { optionId: 4, optionText: "A way to define predicates as types" },
    ],
    correctAnswer: 1,
    explanation:
      "Type predicates are functions that return a boolean and can be used to narrow the type of a variable in TypeScript.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
  },
  {
    id: 6,
    question: 'What is the purpose of the "Readonly<T>" utility type?',
    options: [
      { optionId: 1, optionText: "To make all properties of T readonly" },
      { optionId: 2, optionText: "To create a read-only version of a type" },
      { optionId: 3, optionText: "To make T immutable" },
      { optionId: 4, optionText: "All of the above" },
    ],
    correctAnswer: 4,
    explanation:
      'The "Readonly<T>" utility type constructs a type with all properties of T set to readonly, effectively making it immutable.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype",
  },
  {
    id: 7,
    question: "What is a template literal type in TypeScript?",
    options: [
      {
        optionId: 1,
        optionText: "A type constructed from string literal types",
      },
      { optionId: 2, optionText: "A type for template strings" },
      { optionId: 3, optionText: "A type that uses backticks" },
      { optionId: 4, optionText: "A type for HTML templates" },
    ],
    correctAnswer: 1,
    explanation:
      "Template literal types allow you to create complex string literal types by combining simpler ones.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
  },
  {
    id: 8,
    question: 'What is the "--strict" compiler option in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText: "An option that enables all strict type checking options",
      },
      { optionId: 2, optionText: "An option that enforces strict null checks" },
      {
        optionId: 3,
        optionText: "An option that makes all types non-nullable by default",
      },
      {
        optionId: 4,
        optionText: "An option that disallows implicit any types",
      },
    ],
    correctAnswer: 1,
    explanation:
      'The "--strict" compiler option enables all strict type checking options in TypeScript.',
    referenceLink: "https://www.typescriptlang.org/tsconfig#strict",
  },
  {
    id: 9,
    question: 'What is the purpose of the "NonNullable<T>" utility type?',
    options: [
      {
        optionId: 1,
        optionText: "To create a type by excluding null and undefined from T",
      },
      { optionId: 2, optionText: "To make all properties of T non-nullable" },
      { optionId: 3, optionText: "To check if T is null" },
      { optionId: 4, optionText: "To create a nullable version of T" },
    ],
    correctAnswer: 1,
    explanation:
      "NonNullable<T> constructs a type by excluding null and undefined from T.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype",
  },
  {
    id: 10,
    question: 'What is a "const assertion" in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText:
          "A way to tell TypeScript to infer the most specific type possible",
      },
      { optionId: 2, optionText: "A way to declare a constant variable" },
      { optionId: 3, optionText: "A type assertion that can't be changed" },
      { optionId: 4, optionText: "An assertion that a variable is constant" },
    ],
    correctAnswer: 1,
    explanation:
      'Const assertions (using "as const") tell TypeScript to infer the most specific type possible, making the type readonly and literal.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions",
  },
  {
    id: 11,
    question: 'What is the "indexed access type" in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText: "A way to look up a specific property on another type",
      },
      { optionId: 2, optionText: "A type for indexed arrays" },
      { optionId: 3, optionText: "A type for object indexers" },
      { optionId: 4, optionText: "A way to access types by index" },
    ],
    correctAnswer: 1,
    explanation:
      "Indexed access types allow you to use an index to look up a specific property on another type.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
  },
  {
    id: 12,
    question: 'What is the purpose of the "ReturnType<T>" utility type?',
    options: [
      {
        optionId: 1,
        optionText: "To extract the return type of a function type",
      },
      { optionId: 2, optionText: "To define the return type of a function" },
      { optionId: 3, optionText: "To create a type that returns T" },
      { optionId: 4, optionText: "To make a function return a specific type" },
    ],
    correctAnswer: 1,
    explanation:
      "ReturnType<T> constructs a type consisting of the return type of the function T.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype",
  },
  {
    id: 13,
    question: 'What is a "mapped type" in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText: "A type that transforms each property in an object type",
      },
      { optionId: 2, optionText: "A type for Map objects" },
      { optionId: 3, optionText: "A type that maps one type to another" },
      { optionId: 4, optionText: "A type used in array mapping" },
    ],
    correctAnswer: 1,
    explanation:
      "Mapped types allow you to create new types based on old ones by transforming properties in some way.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
  },
  {
    id: 14,
    question:
      'What is the purpose of the "never" type in advanced TypeScript usage?',
    options: [
      { optionId: 1, optionText: "To represent types that should never occur" },
      {
        optionId: 2,
        optionText: "To create exhaustive checks in switch statements",
      },
      { optionId: 3, optionText: "To indicate unreachable code" },
      { optionId: 4, optionText: "All of the above" },
    ],
    correctAnswer: 4,
    explanation:
      'The "never" type is used to represent types that should never occur, create exhaustive checks, and indicate unreachable code in advanced TypeScript scenarios.',
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/basic-types.html#never",
  },
  {
    id: 15,
    question: 'What is a "discriminated union" in TypeScript?',
    options: [
      {
        optionId: 1,
        optionText:
          "A union type where all members have a common property that can be used to differentiate between them",
      },
      { optionId: 2, optionText: "A union of discriminated types" },
      {
        optionId: 3,
        optionText: "A type that discriminates between different unions",
      },
      { optionId: 4, optionText: "A union type that excludes certain types" },
    ],
    correctAnswer: 1,
    explanation:
      "A discriminated union is a union type where each member has a common property (the discriminant) that can be used to narrow down the specific type within the union.",
    referenceLink:
      "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
  },
];

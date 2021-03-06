export const primitives = [
    // СТРОКОВОЕ ПРЕОБРАЗОВАНИЕ
    {
        question: "'' + 1 + 0",
        type: "Строковое преобразование",
        rule: "Здесь происходит неявное преобразование, применяется оператор '+', у которого один из аргументов строка. В этом случае он приводит к строке и другой аргумент."
    },
    {
        question: "String (null)",
        type: "Строковое преобразование",
        rule: "Здесь происходит явное преобразование к строке."
    },
    {
        question: "true + 'test'",
        type: "Строковое преобразование",
        rule: "Здесь происходит неявное преобразование, применяется оператор '+', у которого один из аргументов строка. В этом случае он приводит к строке и другой аргумент."
    },
    {
        question: "undefined + '123'",
        type: "Строковое преобразование",
        rule: "Здесь происходит неявное преобразование, применяется оператор '+', у которого один из аргументов строка. В этом случае он приводит к строке и другой аргумент."
    },
    {
        question: "String (123)",
        type: "Строковое преобразование",
        rule: "Здесь происходит явное преобразование к строке."
    },
    {
        question: "String (-12.3)",
        type: "Строковое преобразование",
        rule: "Здесь происходит явное преобразование к строке."
    },
    {
        question: "String (undefined)",
        type: "Строковое преобразование",
        rule: "Здесь происходит явное преобразование к строке."
    },
    {
        question: "String (true)",
        type: "Строковое преобразование",
        rule: "Здесь происходит явное преобразование к строке."
    },
    {
        question: "String (false)",
        type: "Строковое преобразование",
        rule: "Здесь происходит явное преобразование к строке."
    },
    {
        question: "4 + 5 + 'px'",
        type: "Строковое преобразование",
        rule: "Здесь сначала складываются числа, затем происходит строковое преобразование."
    },
    {
        question: "'$' + 4 + 5",
        type: "Строковое преобразование",
        rule: "Здесь происходит неявное преобразование к строке, так как один из аргументов оператора '+' является строкой."
    },
    {
        question: "15 + 3 + 'number'",
        type: "Строковое преобразование",
        rule: "Здесь сначала складываются числа, затем происходит строковое преобразование."
    },
    // БУЛЕВО ПРЕОБРАЗОВАНИЕ
    {
        question: "5 && 2",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование. Логические операторы такие как || и && производят булевое преобразование под капотом, но при этом всегда возвращают оригинальное значение операндов, даже если они не являются булевыми."
    },
    {
        question: "2 && 5",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование. Логические операторы такие как || и && производят булевое преобразование под капотом, но при этом всегда возвращают оригинальное значение операндов, даже если они не являются булевыми."
    },
    {
        question: "5 || 0",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование. Логические операторы такие как || и && производят булевое преобразование под капотом, но при этом всегда возвращают оригинальное значение операндов, даже если они не являются булевыми."
    },
    {
        question: "0 || 5",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование. Логические операторы такие как || и && производят булевое преобразование под капотом, но при этом всегда возвращают оригинальное значение операндов, даже если они не являются булевыми."
    },
    {
        question: "'null' == ''",
        type: "Логическое преобразование",
        rule: "Оператор нестрогого равенства == (включая !=) не вызывает численное преобразование, если оба операнда являются строками. Здесь сравниваются строки."
    },
    {
        question: "!!'false' == !!'true'",
        type: "Логическое преобразование",
        rule: "Оператор !! конвертирует строки true и false в булевое значение true, так как это не пустые строки. А дальше оператор == просто сравнивает два булевых значения безо всяких преобразований."
    },
    {
        question: "Boolean (2)",
        type: "Логическое преобразование",
        rule: "Здесь происходит явное логическое преобразование."
    },
    {
        question: "!!2",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование. Оператор !! конвертирует чтсло 2 в true."
    },
    {
        question: "2 || 'hello'",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование. Логические операторы такие как || и && производят булевое преобразование под капотом, но при этом всегда возвращают оригинальное значение операндов, даже если они не являются булевыми."
    },
    // Boolean('')           // false
    // Boolean(0)            // false     
    // Boolean(-0)           // false
    // Boolean(NaN)          // false
    // Boolean(null)         // false
    // Boolean(undefined)    // false
    // Boolean(false)        // false
    {
        question: "Boolean ('')",
        type: "Логическое преобразование",
        rule: "Здесь происходит явное логическое преобразование."
    },
    {
        question: "Boolean (0)",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование."
    },
    {
        question: "Boolean (-0)",
        type: "Логическое",
        rule: "Здесь происходит неявное логическое преобразование."
    },
    {
        question: "Boolean (NaN)",
        type: "Логическое преобразование",
        rule: "Здесь происходит явное логическое преобразование."
    },
    {
        question: "Boolean (null)",
        type: "Логическое преобразование",
        rule: "Здесь происходит явное логическое преобразование."
    },
    {
        question: "Boolean (undefined)",
        type: "Логическое преобразование",
        rule: "Здесь происходит явное логическое преобразование."
    },
    {
        question: "Boolean (false)",
        type: "Логическое преобразование",
        rule: "Здесь происходит явное логическое преобразование."
    },
    // Boolean({})             // true
    // Boolean([])             // true
    // Boolean(function() {})  // true
    {
        question: "Boolean ({})",
        type: "Логическое преобразование",
        rule: "Здесь происходит явное логическое преобразование."
    },
    {
        question: "Boolean ([])",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование."
    },
    {
        question: "Boolean (function() {})",
        type: "Логическое преобразование",
        rule: "Здесь происходит неявное логическое преобразование."
    },
    {
        question: "!!'0'",
        type: "Логическое преобразование",
        rule: "В отличие от многих языков программирования, '0' в JavaScript является true"
    },
    {
        question: "!!' '",
        type: "Логическое преобразование",
        rule: "Любые непустые строки, даже из пробелов преобразовываются к true!"
    },
    // ЧИСЛЕННОЕ ПРЕОБРАЗОВАНИЕ
    {
        question: "'false' == false",
        type: "Численное преобразование",
        rule: "Оператор сравнения == вызывает численное преобразование, поэтому строка 'false' конвертируется в NaN, а правый операнд false станет 0."
    },
    {
        question: "'2' / 2",
        type: "Численное преобразование",
        rule: "Оператор деления вызывает численное преобразование строки (первого операнда)."
    },
    {
        question: "7 / 0",
        type: "Численное преобразование",
        rule: "Infinity специальное значение типа number. Ведёт себя как математическая бесконечность. Любое положительное число, умноженное на Infinity даёт Infinity, а любое число, делённое на Infinity даёт 0."
    },
    {
        question: "'' - 1 + 0",
        type: "Численное преобразование",
        rule: "Оператор '-' вызывает численное преобразование строки (первого операнда). ' ' преобразовывается к 0."
    },
    {
        question: "true + false",
        type: "Численное преобразование",
        rule: "Оператор '+' вызывает численное преобразование обоих операндов."
    },
    {
        question: "6 / '3'",
        type: "Численное преобразование",
        rule: "Оператор '/' вызывает численное преобразование второго операнда."
    },
    {
        question: "'2' * 3",
        type: "Численное преобразование",
        rule: "Оператор '*' вызывает численное преобразование первого операнда."
    },
    {
        question: "'4' - 2",
        type: "Численное преобразование",
        rule: "Оператор '-' вызывает численное преобразование первого операнда."
    },
    {
        question: "'4px' - 2",
        type: "Численное преобразование",
        rule: "'4px' невозможно преобразовать к числу, поэтому возвращается значение NaN."
    },
    {
        question: "'true' == true",
        type: "Численное преобразование",
        rule: "Оператор сравнения == вызывает численное преобразование, поэтому строка 'true' конвертируется в NaN, а правый операнд true станет 1."
    },
    // {
    //     question: "' -9px\n' + 5",
    //     answer: 2,
    //     rule: null
    // },
    // {
    //     question: "' -9px\n' - 5",
    //     answer: 1,
    //     rule: null
    // },
    {
        question: "+'123'",
        type: "Численное преобразование",
        rule: "Строка '123' будет преобразована к числу 123."
    },
    {
        question: "123 != '456'",
        type: "Численное преобразование",
        rule: "Строка '456' будет преобразована к числу 456."
    },
    {
        question: "4 > '5'",
        type: "Численное преобразование",
        rule: "Строка '5' будет преобразована к числу 5."
    },
    {
        question: "'1' == true",
        type: "Численное преобразование",
        rule: "Обе части будут преобразованы к числу (1 и 1, соответственно)."
    },
    {
        question: "5 / null",
        type: "Численное преобразование",
        rule: "null в результате численного преобразования будет преобразовано к 0. При делении числа на 0 получаем специальное значение типа number - Infinity."
    },
    {
        question: "true | 0",
        type: "Численное преобразование",
        rule: "Первый операнд будет неявно преобразован к числу 1."
    },
    {
        question: "undefined + 1",
        type: "Численное преобразование",
        rule: "Значение типа данных undefined в результате численного преобразования становится NaN (в отличие от null, которое преобразовывается к 0)."
    },
    {
        question: "Number ('123')",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    // Number(null)                   // 0
    // Number(undefined)              // NaN
    // Number(true)                   // 1
    // Number(false)                  // 0
    // Number(" 12 ")                 // 12
    // Number("-12.34")               // -12.34
    // Number("\n")                   // 0
    // Number(" 12s ")                // NaN
    // Number(123)                    // 123
    {
        question: "Number (null)",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number. null преобразовыается к 0."
    },
    {
        question: "Number (undefined)",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number. Результат - NaN."
    },
    {
        question: "Number (true)",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    {
        question: "Number (false)",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    {
        question: "Number (' 12 ')",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    {
        question: "Number ('-12.34')",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    {
        question: "Number ('\n')",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    {
        question: "Number (' 12s '')",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    {
        question: "Number (123)",
        type: "Численное преобразование",
        rule: "Явное преобразование к типу number."
    },
    {
        question: "+true",
        type: "Численное преобразование",
        rule: "В результате численного преобразования true становится равным 1."
    },
    {
        question: "null + 1",
        type: "Численное преобразование",
        rule: "null при численном преобразовании становится 0."
    },
    // null == 0               // false, null is not converted to 0
    // null == null            // true
    // undefined == undefined  // true
    // null == undefined       // true
    {
        question: "null == 0",
        type: "Численное преобразование",
        rule: "false, null is not converted to 0. При применении == к null или undefined, численное преобразование не происходит, так как null может равняться только null или undefined, и ничему другому."
    },
    {
        question: "null == null",
        type: "Численное преобразование",
        rule: "При применении == к null или undefined, численное преобразование не происходит, так как null может равняться только null или undefined, и ничему другому."
    },
    {
        question: "undefined == undefined",
        type: "Численное преобразование",
        rule: "При применении == к null или undefined, численное преобразование не происходит, так как null может равняться только null или undefined, и ничему другому."
    },
    {
        question: "null == undefined",
        type: "Численное преобразование",
        rule: "При применении == к null или undefined, численное преобразование не происходит, так как null может равняться только null или undefined, и ничему другому."
    },
    {
        question: "NaN == NaN",
        type: "Численное преобразование",
        rule: "NaN не равен ничему, даже самому себе.   "
    },
    {
        question: "NaN === NaN",
        type: "Численное преобразование",
        rule: "NaN не равен ничему, даже самому себе."
    },
    {
        question: "'foo' + + 'bar'",
        type: "Численное преобразование",
        rule: "Сначала 'bar' преобразовывается к числу (результатом является NaN), затем NaN преобразовывается к строке, так как одним из агументов оператора + является строка. ",
    },
    // {
    //     question: "null == '\n0\n'",
    //     answer: 2,
    //     rule: null
    // },
    // {
    //     question: "+null == +'\n0\n'",
    //     answer: 1,
    //     rule: null
    // }
];

export const objects = [
    // {
    //     question: "{} && []",
    //     rule: "Любой объект в логическом контексте – true, даже если это пустой массив [] или объект {}.",
    // },
    {
        question: "[1] > null",
        type: "Численное преобразование (объекты)",
        rule: "Оператор сравнения > вызывает численное преобразование для [1] и null. Для массива вызывается метод toString() и в результате [1] превращается в примитив '1'. Далее строка уже спокойно численно преобразовывается к 1, а null к 0.",
    },
    {
        question: "[2] > [1]",
        secret: true,
        type: "Численное преобразование (объекты)",
        rule: "Оператор сравнения > вызывает численное преобразование для [2] и [1]. Для массива вызывается метод toString() и в результате [2] превращается в примитив '2', а [1] превращается в примитив '1'. Далее строка уже спокойно численно преобразовывается к числу, получаем 2 > 1.",
    },
    {
        question: "['x'] == 'x'",
        type: "Строковое преобразование (объекты)",
        rule: "Оператор == вызывает численное преобразование для массива ['x']. Метод массива valueOf() возвращает сам массив, а значит результат игнорируется, так как не является примитивом. Далее, вызывается метод массива toString(), который конвертирует ['x'] в строку 'x'. Далее, как мы помним, оператор нестрогого равенства == (включая !=) не вызывает численное преобразование, если оба операнда являются строками. Здесь сравниваются строки.",
    },
    {
        question: "[] + null + 1",
        type: "Строковое преобразование (объекты)",
        rule: "Оператор + вызывает численное преобразование массива. Метод массива valueOf() вернёт сам массив, поэтому результат игнорируется, поскольку не является примитивом. Далее вызывается toString(), который возвращает ' '."
    },
    {
        question: "[1,2,3] == [1,2,3]",
        rule: "В данном примере никакого преобразования не требуется, потому что оба операнда одного типа. Так как оператор == сравнивает объекты по ссылке, а не по значению, а данные массивы являются двумя разными экземплярами, результатом будет false.",
    },
    {
        question: "[] == ![]",
        type: "Логическое преобразование (объекты)",
        rule: "Сначала ![] будет преобразовано к false, получаем [] == false. Далее левая часть неявно должна быть преобразована к числу, для этого для массива вызовется метод valueOf (который в случае с Array вернёт ссылку на самого себя). Далее, так как valueOf не вернул примитив будет вызван метод toString() (который для Array вернёт строковое представление элементов). toString здесь вернёт ' '. Получаем сравнение примитивов ' ' == false. Для оператора == обе стороны неявно преобразовываются к числу, получаем 0 == 0, что возвращает true."
    },
    // new Date(0) - 0 = 0 // (1)
    // new Array(1)[0] + "" = "undefined" // (2)
    // ({})[0] = undefined // (3)
    // [1] + 1 = "11" // (4)
    // [1,2] + [3,4] = "1,23,4" // (5)
    // [] + null + 1 = "null1" // (6)
    // [[0]][0][0] = 0 // (7)
    // ({} + {}) = "[object Object][object Object]" // (8)
    {
        question: "new Date(0) - 0",
        rule: null,
    },
    {
        question: "new Array(1)[0] + ''"
    },
    {
        question: "({})[0]",
        rule: null,
    },
    {
        question: "[1] + 1"
    },
    {
        question: "[1,2] + [3,4]",
        rule: null,
    },
    {
        question: "new Date() - new Date()",
        secret: true,
        rule: null
    },
    {
        question: "[[0]][0][0]"
    },
    {
        question: "{} + {}"
    }
];

export const typeofItems = [
    {
        question: "typeof 'John'"       
    },
    {
        question: "typeof 3.14"       
    },
    {
        question: "typeof NaN"       
    },
    {
        question: "typeof false"       
    },
    {
        question: "typeof [1,2,3,4]"       
    },
    {
        question: "typeof {name: 'John', age: 34}"       
    },
    {
        question: "typeof new Date ()"       
    },
    {
        question: "typeof myCar"       
    },
    {
        question: "typeof null"       
    },

    {
        question: "typeof ''"       
    },
    {
        question: "typeof Infinity"       
    },
    {
        question: "typeof (4 + 7)"       
    },
    {
        question: "typeof ('4' + '7')"       
    },
    {
        question: "typeof (4 * '7')"       
    },
    {
        question: "typeof '123' + 4"       
    },
    {
        question: "typeof 123 + 4"       
    },
    {
        question: "typeof (123 + 4)"       
    },
    {
        question: "typeof ('123' + 4)"       
    }
];

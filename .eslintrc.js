module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent": ["error", 2],
        "semi": 0,
        //禁止拖尾逗号
        "comma-style": ["error", "last", { "exceptions": { "ArrayExpression": true, "ObjectExpression": true } }],
        //逗号之后需要空格
        "comma-spacing": ["error", { "before": false, "after": true }],
        //对象中关键字冒号前后空格
        "key-spacing": ["error",{
            "multiLine": {
              "beforeColon": true,
              "afterColon": true
            }
          }],
        // 禁止条件表达式中出现赋值操作符
        "no-cond-assign": 2,
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        "comma-dangle": [2, "never"],
        "no-debugger": 1,
        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2,
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2,
        // 禁止重复的 case 标签
        "no-duplicate-case": 2,
        // 禁止空语句块
        "no-empty": 2,
        // 禁止对 catch 子句的参数重新赋值
        "no-ex-assign": 2,
        // 禁止不必要的布尔转换
        "no-extra-boolean-cast": 2,
        //  禁止不必要的括号 //(a * b) + c;//报错
        "no-extra-parens": 0,
        // 禁止不必要的分号
        "no-extra-semi": 2,
        // 禁止对 function 声明重新赋值
        "no-func-assign": 2,
        //  禁止在嵌套的块中出现 function 或 var 声明
        "no-inner-declarations": [2, "both"],
        //   禁止把全局对象 (Math 和 JSON) 作为函数调用  错误：var math = Math();
        "no-obj-calls": 2,
        // 禁止直接使用 Object.prototypes 的内置属性
        "no-prototype-builtins":0,
        // 禁止正则表达式字面量中出现多个空格
        "no-regex-spaces": 2,
        // 禁用稀疏数组
        "no-sparse-arrays": 2,
        // 要求使用 isNaN() 检查 NaN
        "use-isnan": 2,
        // 禁用 alert、confirm 和 prompt
        "no-alert": 1,
        // 禁止在没有类型检查操作符的情况下与 null 进行比较
        "no-eq-null": 1,
        // 禁用 eval()
        "no-eval": 2,
        // 禁止 case 语句落空
        "no-fallthrough": 2,
        // 禁止在全局范围内使用 var 和命名的 function 声明
        "no-implicit-globals":1,
        // 禁止 this 关键字出现在类和类对象之外
        "no-invalid-this":1,
        // 禁止修改 const 声明的变量
        "no-const-assign":2,
        // 要求使用模板字面量而非字符串连接
        "prefer-template":1,
        //强制要求花括号属性之间换行一致性
        "object-curly-newline": ["error", { "minProperties": 1 }],
        // 要求使用箭头函数作为回调
        "prefer-arrow-callback":1,
        // 要求使用 const 声明那些声明后不再被修改的变量
        "prefer-const": 1
    }
};

// 参考文档：https://cn.eslint.org/docs/user-guide/configuring
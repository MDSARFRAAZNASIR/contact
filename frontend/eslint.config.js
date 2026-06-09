// process.env.NODE_ENV = "development";

// const reactPlugin = require("eslint-plugin-react");
// const babelParser = require("@babel/eslint-parser");

// module.exports = [
//   {
//     files: ["**/*.js", "**/*.jsx"],
//     languageOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//       parser: babelParser,
//       parserOptions: {
//         requireConfigFile: false,
//         babelOptions: {
//           presets: ["babel-preset-react-app"],
//         },
//       },
//     },
//     plugins: {
//       react: reactPlugin,
//     },
//     rules: {
//       "no-unused-vars": "warn",
//       "eqeqeq": "error",
//       "no-console": "warn",
//     },
//   },
// ];


process.env.NODE_ENV = "development";

const reactPlugin = require("eslint-plugin-react");
const babelParser = require("@babel/eslint-parser");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["babel-preset-react-app"],
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    // ---- THIS IS THE MAGIC PART WE NEED TO ADD ----
    settings: {
      react: {
        version: "detect", // Tells ESLint to automatically detect your React version
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "eqeqeq": "error",
      "no-console": "warn",
      "react/jsx-uses-react": "error", // Tells ESLint that React is used in JSX
      "react/jsx-uses-vars": "error",  // Tells ESLint that variables used in JSX are NOT unused!
    },
  },
];
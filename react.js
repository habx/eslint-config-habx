module.exports = {
  "extends": ["airbnb", "./index.js"],
  "plugins": [
      "react",
  ],
  "rules": {
      "react/jsx-uses-vars": [1],
      "react/jsx-uses-react": [1],
      "react/jsx-filename-extension": [0],
      "react/prefer-stateless-function": [0],
      "react/prop-types": [0],
      "react/no-danger": [0],
      "jsx-a11y/no-static-element-interactions": [0],
      "jsx-quotes": ["error", "prefer-single"],
      "no-restricted-globals": ["error", "find"],
      "import/no-webpack-loader-syntax": [0],
      "jsx-a11y/anchor-is-valid": [0],
      "jsx-a11y/click-events-have-key-events": [0],
      "jsx-a11y/label-has-for": [ 2, {
        "required": {
          "every": [ "id" ]
        },
      }],
  },
  "parserOptions": {
    "jsx": true
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  }
}

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/react"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "pragma": "h"
    }
  },
  "globals": {
    "sleep": 1
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
    "compat",
    "prettier"
  ],
  "rules": {
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/href-no-hash": 0,
    "react/prop-types": 0, // ADD FLOW
    "compat/compat": 2,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "*.js",
          "**/*.spec.js",
          "**/*.spec.jsx",
          "config/**/*.js",
          "bin/*"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5",
      }
    ],
    "flowtype/no-weak-types": [1]
  },
  "globals": {
    "DEVELOPMENT": true,
    "ENVIRONMENT": true
  }
};

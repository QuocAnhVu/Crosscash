module.exports = {
    extends: ['eslint-config-willo-react', "eslint-config-willo-typescript"],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        "no-use-before-define": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    env: {
        "jest": true,
        "es6": true,
        "node": true,
        "browser": true
    }
};

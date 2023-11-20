module.exports = {
    // 继承官方规则
    extends: ["react-app"],
    parserOptions: {
        babelOptions: {
            presets: [
                ["babel-preset-react-app", false],
                "babel-preset-react-app/prod",
            ],
        },
    },
    rules: {
        "eqeqeq": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-useless-escape": "off"
        // "react-hooks/rules-of-hooks": "off"
    },
    globals: {
        $tools: true
    }
   
};

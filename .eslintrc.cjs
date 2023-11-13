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
        // "react-hooks/rules-of-hooks": "off"
    },
    globals: {
        $tools: true
    }
   
};

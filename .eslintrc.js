module.exports = {
    "extends": [
        "airbnb-base",
        "prettier"
    ],


    "env": {
        "browser": true,
        "node": true
    },

    "rules": {
				"no-unused-expressions": "off",
				"no-param-reassign": 0,
        "no-undef-init" :  "error",
        "prefer-destructuring": [
            "error",
            {
                "object": false,
                "array": false
            }
        ],
        "no-plusplus": "off",
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": false
            }
				],
				"import/extensions": [
					"warn",
					"always",
					{
						"ignorePackages": true
					}
				],
			"import/prefer-default-export": "off",
			"no-nested-ternary": "off",
    }
};

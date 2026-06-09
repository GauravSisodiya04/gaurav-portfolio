import js from '@eslint/js'
import tselint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default tselint.config(
    {
        ignores:['**/dist/**','**/node_mudules/**', '**/*.config.js']
    },
    js.configs.recommended,
    ...tselint.configs.recommended,
    {
        plugins:{
            react:reactPlugin,
            'react-hooks':reactHooks,
        },
        languageOptions:{
            globals:{
                ...globals.browser,
                ...globals.es2020
            }
        },
        rules:{
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },
        settings :{
            react:{
                version:'detect'
            }
        }
    }
    
)
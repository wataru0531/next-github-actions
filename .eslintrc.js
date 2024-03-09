

/**************************************************************
VS Codeの拡張機能のESLint
常時error、warningを出してくれる

.eslintrc.json ... jsonで比較的にシンプルに書けるが柔軟性がない。コメントが書けない
.eslintrc.js ... 複雑に記述できるし、動的な処理も可能。コメントも書ける。

next/core-web-vitals 
①eslint-config-nextを読み込んでいて、next/recommendedに加えて、react/recommended、react-hooks/recommended を読み込んでいる
②eslint-plugin-nextのcore-web-vitals の設定も読み込んでいる

TypeScriptの解析のためにインストール
・@typescript-eslint/parser
・@typescript-eslint/eslint-plugin

あるといいプラグイン (今回は入れていない)
・prettier-plugin-tailwindcss classの並び替え
・eslint-plugin-import ... import、exportの並び替え

***************************************************************/

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  "extends": [
    "eslint:recommended", // ESLintの推奨設定。 all だと全部盛り。真っ赤になる
    "plugin:@typescript-eslint/recommended", //  @typescript-eslint プラグインの推奨設定
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // 型チェックが必要な推奨設定
    "next/core-web-vitals", //  Next.jsプロジェクト用のCore Web Vitalsのルールを追加
    "prettier" // Prettierの設定を追加
  ],
  "parser": "@typescript-eslint/parser", // ESLint が TypeScript コードを解析する際に使用するパーサーを指定
  "parserOptions":  { 
    "project": "./tsconfig.json"  // TypeScript設定ファイル (tsconfig.json) のパスを指定。ESLintがプロジェクトのTypeScriptコンパイラの設定を読み込んで適切な型情報を取得
  },
  "plugins": [
    "@typescript-eslint" // プラグインを有効化。このプラグインはTypeScriptに関するESLintルールを提供
  ],
  "root": true // この設定がプロジェクトのルート設定であることを示す。この設定がルートにあることを示すことで、ESLint が設定ファイルを探索するときに、親ディレクトリにある他の設定ファイルを無視する
}
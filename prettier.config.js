


/**************************************************************
VS Codeの拡張機能のPrettier
保存時に自動フォーマットができる
チーム全員に拡張機能を推奨する。.vscode > extensions.jsonに記述
→ https://future-architect.github.io/articles/20200828/

.prettierrc
→ json形式。比較的シンプルに書けるがコメントなども書けないし柔軟性がない

prettier.config.js
→ JavaScript形式なのでより複雑に書ける。動的にも書けるしコメントなども書きやすい


***************************************************************/

// @type ... JSDocコメントのディレクティブであり、この行はコードの型情報を提供
// prettier モジュールからConfigタイプをインポートし、Prettierの設定オブジェクトの型情報を取得
/** @type {import('prettier').Config} */

module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss", // Tailwind CSS のクラスの並び替えを自動化
  ],
  "semi": false, // セミコロン無し
  "singleQuote": true, // シングルクォート使う
  "printWidth": 90, // 折り返し
  "tabWidth": 2, // スペースの単位
  "trailingComma": "all", // ケツカンマつける
  "jsxSingleQuote": true // JSXでシングルクォートを使用
}
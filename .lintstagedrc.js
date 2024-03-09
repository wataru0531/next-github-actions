

// lint-staged の設定ファイル

// → commit → huskyのpre-commitファイル > npx lint-staged が発火
// → この .lintstagedrc.jsファイル が実行される
// → ESLint、Prettierが実行される

// package.jsonに普通に記述したらエラーになる

const path = require('path')


// ESLintコマンとをビルドするための関数
// next lint ... Next.jsプロジェクトでESLintを実行するためのコマンド
// → Next.js プロジェクト内に存在する.eslintrc.jsや.eslintrc.json、または .eslintignore ファイルを参照して、静的解析を行う
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`


module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc --incremental false --noEmit', // tscのコンパイルの検証の設定
    buildEslintCommand,
    "prettier --write" // Prettierでコードの整形を実行
  ],
}

// incremental false 
// → インクリメンタルビルドを無効にし、毎回全てのファイルを再コンパイルすることを指定する

// noEmitオプション
// → コンパイラにコードの型チェックを実行するように指示する


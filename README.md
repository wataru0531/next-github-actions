
## About next-github-actions
- GitHub Actions
  - GitHubが提供する自動化およびワークフローのための機能
  - リポジトリ内のイベントに基づいて、カスタムのワークフローをトリガーし、実行可能

- CI Continuous Integration
  - 継続的インテグレーション 
  - コードの変更が発生するたびに自動的にビルド、テスト、および検証を行う。

- CD
 - 継続的デリバリー Continuous Delivery
 - または、継続的デプロイメント Continuous Deployment
 - 迅速・安全に、信頼性の高い方法でリリースできるようにするアプローチ。
 - 開発チームは、コードを自動化されたビルド、テスト、およびデプロイのパイプラインを通じて継続的にリリース可能な状態に保つことが可能

- ワークフロー (Workflow):
  - GitHub Actionsで実行される一連の手順やジョブのセット。
  - yamlファイルなどで定義され、リポジトリ内の特定のイベント（プッシュ、プルリクエスト、イシューなど）に対してトリガーされる。

- ジョブ (Job):
  - ワークフロー内の個々のタスクのこと。
  - 通常、ワークフローには複数のジョブが含まれる。ジョブは、同時にまたは順次実行される。

- ステップ (Step):
  - ジョブ内の個々のタスクまたはコマンドを表す
  - コードのチェックアウト、ビルド、テスト、デプロイなどのアクションを実行する。

- アクション (Action):
  - 再利用可能な自動化のユニット。
  - コードのチェックアウト、テストの実行、デプロイのトリガーなどのさまざまなタスクを実行する。

- トリガー (Trigger):
  - ワークフローを実行する条件やイベント。
  - リポジトリに対するプッシュ、プルリクエストの作成、スケジュールなど

- ワークフローのトリガー (Workflow Trigger):
  - ワークフローを起動するイベントや条件を定義。

## 用語
- runs-on: ubuntu-latest
  - GitHub Actionsでのワークフローが実行される環境を指す
  - GitHub Actionsのランナーが最新のUbuntu環境でジョブを実行することになる
  - runs-on
    - Windows、macOSなども指定可能
    - なぜUbuntuか？
      - 多くの開発者やプロジェクトがUbuntuを使用していて、安全性が高くパフォーマンスがいいため
      - 豊富なドキュメントあるため

## 公式ドキュメント
- 「アイデアからリリースまでのワークフローを自動化」
  https://github.co.jp/features/actions

- 「GitHub Actionsを理解する」
   https://docs.github.com/ja/actions/learn-github-actions/understanding-github-actions

- 「GitHub Actions ドキュメント」
   https://docs.github.com/ja/actions

## References Articles
- 「GitHub Actionsを使用してNext.jsをGitHub Pagesにデプロイする方法」
https://musclecoding.com/nextjs-github-pages-actions/

- 「Next.js製のAPPにGitHub Actionsを使用してCIの仕組みを構築してみた」
https://zenn.dev/bloomer/articles/c48eff0e4b2b10

- 「【初心者向け】【入門】GitHub Actionsの書き方についてデバッグ設定、runs-onやcheckoutなどの仕組みや構造も含めて徹底解説」
https://qiita.com/shun198/items/14cdba2d8e58ab96cf95

- 「TypeScript(Next.js)のCIをGitHub Actionsで構築してみる！」
https://qiita.com/Senritsu420/items/f51a7eff81a8c1372302



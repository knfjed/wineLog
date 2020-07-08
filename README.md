# スケジュール

## 6/29(mon) - 7/5(sun)

- 朝 5-6:00 programing
- 夕 20-22:00 programing

| 日付      | 時間帯     |     | やること                                                   |
| --------- | ---------- | --- | ---------------------------------------------------------- |
| 6/29(mon) | 朝         | ○   | やることを箇条書きで書き出す                               |
| 6/29(mon) | 朝         | ○   | コンポーネントの設定設計（紙に書きながら考える）           |
| 6/29(mon) | 朝         | ○   | React 環境構築                                             |
| 6/29(mon) | 朝         | ○   | とりあえず README にスケジュール書き込んでいく             |
| 6/29(mon) | 昼         | ○   | Next.js について下調べ(基本の使い方や考え方、効果について) |
| 6/29(mon) | 夕＆帰宅後 | ○   | どの部分に Next.js を使っていくのか、紙に書き出していく    |
| 6/29(mon) | 夕＆帰宅後 | ○   | 必要な工程を改めて再考する                                 |
| 6/29(mon) | 夕＆帰宅後 | ○   | スケジュール再構成                                         |
| 6/30(tue) | 朝         | ○   | Next.js 環境構築(本を見ながら)                             |

## Next.js について

### pages フォルダ

Next.js では HTML は使わず、js のスクリプトファイルのみを使う。pages フォルダの中にページ表示のための js ファイルを配置する。

## エクスポート

静的ファイルとして html 形式で保存することを指す。
その際には、「next.config.js」という Next.js の設定情報を記述するファイルが必要。

`module.exports = {`
`exportPathMap: function () {`
`return {`
`'/': {page: '/'}`
`}`
`}`
`}`

↑module.export と export は　ほぼ同じようなもの。
exportPathMap という項目を持ったオブジェクトを export している。ちなみにここで exportPathMap は「pages」内の index.js がトップページに配置されるよう設定している。

# CSS について

Next.js では CSS ファイルは使えない。
したがってスタイルシートを import するやり方はできない。
ただし、別ファイルとしてスタイルのスクリプトを切り分けて利用することはできる。（CSS そのものではないことに注意）

## ビルトイン CSS

JSX に埋め込むスタイルシート情報。

`<style jsx> {`
`--スタイルを記述--`
`}</style>`

## スタイルを別のスクリプトとして切り出して利用する

「static」というフォルダ：スタイルシート関係をまとめる。
「Style.js」の中に、以下の様にコードを書く。
（１つのコンポーネントとして記述）

`export default <style>{`
`body {`

`}`

`h1 {`

`}`
`}</style>;`

そして、使いたい js ファイルで import すれば OK。
（`import style from '../static/Style';`）

## 不明点

- p284 「コンポーネントの開始タグと終了タグの間に書かれたコンテンツは children プロパティとして取り出せる」とは？

- p292 イメージコンポーネントを作る
  `this.fname`とは？

## まだ完全に理解してなくてモヤモヤしている部分

- プロジェクトをコマンドラインでビルドしていく流れ
- 実際のコマンドとその意味

## やること、やりたいこと

- スタイル部分のコードを Style.js として切り分ける
- イメージファイルをコンポーネント化
- コンタクトフォーム画面の作成
- 一覧画面からクリックすると、それぞれの詳細画面に飛ぶようにする（データを props として渡して利用できる様にする）
- style の調整（最後）
- ログイン、会員登録
- 一覧画面に表示されるワインボトルのアイコンの色を、実際のワインの色に応じて変える（今は全部一緒の表示なので）

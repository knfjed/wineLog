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

### 7/10 - 7/13

| やりたいこと                                         | 細分化したタスク                      | 7/10(金) | 7/11(土) | 7/12(日) | 7/13(月) |
| ---------------------------------------------------- | ------------------------------------- | -------- | -------- | -------- | -------- |
| データを props として渡して利用できる様にする        | page コンポーネントにデータを移植     |          | ○        |          |          |
| 　　　　　　　〃                                     | それぞれのページに props を渡す       |          | ○        |          |          |
| ダイナミックラウティングを利用してページを遷移させる | ドキュメントを読んで流れを理解        | ○        |          |          |          |
| 　　　　　　　〃                                     | README に理解したことを書き出してみる | ○        |          |          |          |
| 　　　　　　　〃                                     | コード書く（それぞれの）              |          | ○        |          |          |
| スタイル部分のコードを Style.js として切り分ける     |                                       |          |          |          |          |
| イメージファイルをコンポーネント化                   |                                       |          |          |          |          |
| コンタクトフォーム画面の作成                         |                                       |          |          |          |          |
| ログイン、会員登録                                   |                                       |          |          |          |          |
| style の調整                                         |                                       |          |          |          |          |

### 7/16 - 7/19

| やりたいこと                                | 細分化したタスク                           | 7/16(木) | 7/17(金) | 7/18(土) | 7/19(日) |
| ------------------------------------------- | ------------------------------------------ | -------- | -------- | -------- | -------- |
| youtube・ブログなどで流れを理解             | 紙に書き出す                               | ○        |          |          |          |
| contentful に渡したいデータを上げる         |                                            | ○        |          |          |          |
| 　　　　　　　〃                            | ワインごとの詳細データをどんどん上げていく | ○        |          |          |          |
| npm で contentful をインストール            |                                            |          | ○        |          |          |
| contentful の公式 GitHub からコードをコピー |                                            |          | ○        |          |          |
| コードに API を追加                         | class コンポーネントでとりあえず書いてみる |          | ○        |          |          |
| PostMan でデータが取れているか検証          |                                            |          | ○        |          |          |
| 　　　　　　　〃                            | React Hooks だとどう書くのか、復習する     |          | ○        |          |          |
| React Hooks で書いてみる                    |                                            |          | ○        |          |          |
| コンタクトフォーム画面の作成                |                                            |          |          |          |          |
| ログイン、会員登録                          |                                            |          |          |          |          |
| style の調整                                |                                            |          |          |          |          |

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

## styled-components

参考：https://blog.spacemarket.com/code/introduce_styled_components/

### メリット

簡単に言うと jsx ファイルの中に css を記述することができるようになるライブラリ。
コンポーネントをよりカプセル化しやすいのが一番のメリット。
外部 css ファイルではなく jsx ファイルに定義するため、
そのファイル内で React コンポーネントとレイアウト定義がカプセル化され感覚的にとても扱いやすくなる。

### 使い方

①`npm install --save styled-componets`
②`import styled from 'styled-components';`
③ レイアウトを定義
ex)html の button 要素に style を適用して Button という名前でコンポーネント定義
`const Button = styled.button`
`border-radius: 3px;`
`padding: 0.25em 1em;`
`margin: 0 1em;`
`background: transparent;`
`color: palevioletred;`
`border: 2px solid palevioletred;`
`;`
④render する
`render(`
`<button>予約リクエストを送る</button>`
`);`

## ルーティング

複雑なアプリケーションでは、事前定義されたパスを使用してルートを定義するだけでは必ずしも十分ではない。
Next.js では、ページ（[param]）に角かっこを追加して、動的ルート（別名 URL スラッグ、プリティ URL など）を作成できる。

`import { useRouter } from 'next/router'`

`const Post = () => {`
`const router = useRouter()`
`const { pid } = router.query`

`return <p>Post: {pid}</p>`
`}`

`export default Post;`

### 静的なルーティング

Next.js はデフォルトで、ファイルシステムがルーティングとなる。
例えば、pages 以下に置かれたファイルが pages/about.js だったとすると、
localhost:3000/about にアクセスできるようになる。
そしてクライアントサイドのみの遷移を実現するために、
Next.js は<Link>というコンポーネントを用意している。
シンプルなルーティングでは、以下のように href パラメータに href="/about"と書けば遷移できる。

`import Link from 'next/link'`

`export default () => (`
`<div>`
`Click{' '}`
`<Link href="/about">`
`<a>here</a>`
`</Link>{' '}`
`to read more`
`</div>`
`)`

### 動的なルーティング

動的なとは？
/about/:name のようなページがパラメータを持って変化するような遷移のこと。

<Link>コンポーネントには、hrefの他にasというパラメータがあり、
ブラウザヒストリーの書き換えはasに渡された文字列で行われる。
一方、どのページに、どんなパラメータで遷移するかをNext.js内部に知らせるには、
下記サンプルのようなURLオブジェクトをhrefに渡す。
pathnameはpages以下のファイル、queryの値にはクエリのオブジェクトを渡す。

`import Link from 'next/link'`

`export default () => (`
`<div>`
`Click{' '}`
`<Link`
`as='/about/Zeit'`
`href={{ pathname: '/about', query: { name: 'Zeit' } }}`
`>`
`<a>here</a>`
`</Link>{' '}`
`to read more`
`</div>`
`)`

### URL オブジェクト

<Link>コンポーネントと同じように、
Routerの関数にURLオブジェクトを渡すことで、履歴のpushとreplaceが可能。

`import Router from 'next/router'`

`const handler = () => {`
`Router.push({`
`pathname: '/about',`
`query: { name: 'Zeit' }`
`})`
`}`

`export default () => (`
`<div>`
`Click <span onClick={handler}>here</span> to read more`
`</div>`
`)`
参考：https://qiita.com/tetsutaroendo/items/e444bd606c5fa79d2209

#### URL オブジェクトとは？

参考：https://ja.javascript.info/url

## 不明点

『React.js & Next.js 超入門』

- p284 「コンポーネントの開始タグと終了タグの間に書かれたコンテンツは children プロパティとして取り出せる」とは？

- p292 イメージコンポーネントを作る
  `this.fname`とは？

## まだ完全に理解してなくてモヤモヤしている部分

- プロジェクトをコマンドラインでビルドしていく流れ
- 実際のコマンドとその意味

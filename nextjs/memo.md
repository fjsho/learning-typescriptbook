### learning

- Next.js では、pages ディレクトリ配下のディレクトリ構造がページのルーティングに対応
  - pages ディレクトリは以下に置かれたコンポーネントファイルを Nextjs ではページコンポーネントと呼ぶ
- JSX においては javascript の文が使えない
  - 具体的には、if 文などが使えない。
  - {}の中に式は書けるが文が書けないので、if 文なども論理演算子などを活用して対応する必要がある。

```jsx
<div>
  {loaded && <img src="..." />} ── 論理積演算子
  {loading || <img src="..." />} ── 論理和演算子
  {loading ? "読み込み中" : <img src="..." />} ── 三項演算子
</div>
```

- SSR（server-side rendering）
  - ウェブアプリケーションのレンダリングをサーバサイドで行う技術
  - サーバーが HTML を生成してブラウザに送信する
  - Nextjs はサーバーサイドレンダリング（SSR）をサポートしている。
    - React はクライアントサイドレンダリング（CSR）に特化
  - これにより初回読み込み速度が向上する。SEO やパフォーマンスの面でも Good
- NextJs（ver10 以降）で SSR を実装する時は以下の関数が使える
  - GetServerSideProps
    - 動的な要素向け
    - 初回読み込み時およびリロードのたびにサーバーサイドでレンダリングした要素を渡す
    - API アクセスや DB 接続など、クライアントではできないサーバー側の処理も可能
  - GetStaticProps
    - 静的な要素向け
    - ビルド時に一度だけ実行される
      - つまりビルドが実行された時点で静的な HTML ファイルとして生成されて、クライアントがリクエストした時はその HTML を受け取るだけとなる。
    - だから早い。
      - Vercel にデプロイした場合、生成された HTML が自動で CDN に乗せられてさらに高速配信される

### memo

- なんで？ →「React で開発する場合、webpack のようなバンドラーを用いるのが普通です。」
  - AI と問答した上での理解 ↓
    - React ではコンポーネント単位（前述のコンポーネントベースの考え方）にファイルを分割して開発する。
      - 例えば Header.jsx, Footer.jsx, App.jsx みたいに小さな部品に分ける。
    - このコンポーネントをブラウザが使える形に変換する必要がある。
    - これらはモジュールと呼ばれる機能で ES2015 で JavaScript が対応しているが、ブラウザ側ではまだ対応仕切れていない - 2015 年当時に比べると扱えるブラウザは増えたがまだ制約があったりする
    - ブラウザ側に対応させるために、モジュール群をまとめて 1 つのファイルにしてくれるのがバンドラー。
- ブラウザが読み込み可能になるまでの流れ
  1. 開発/実装
     - JSX/TSX: React コンポーネント
     - TypeScript ファイル（`.ts`）: TypeScript で型定義
  1. 型チェック: tsc
  1. トランスパイル
     - JSX to JavaScript: Babel などのトランスパイラ
     - TypeScript to JavaScript: tsc
  1. バンドル/最適化：webpack などのバンドラ
     - 1 つの JavaScript ファイル（`.js`）ファイルになる
  1. ブラウザが読み込み: HTML から JavaScript が読み込まれ、DOM に反映される
- CSR（crient-side rendering）
  - ブラウザが HTML, CSS, JS ファイルをダウンロードし、JavaScript を使用してページをレンダリングする。

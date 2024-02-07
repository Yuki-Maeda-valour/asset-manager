簡易的な資産予約管理アプリです。

## ローカルでの実行方法

事前に.env ファイルを作成して、データベースの環境変数を設定してください。
DATABASE_URL という環境変数を設定してください。

```bash
DATABASE_URL=postgresql://postgres:password@localhost:5432/asset_manager
```

github で clone し、次のコマンドを実行してください。

```bash
git clone https://github.com/nextjs/asset-manager
cd asset-manager
pnpm run initdev
```

 [http://localhost:3000](http://localhost:3000) をブラウザで開くとデモが表示されます。

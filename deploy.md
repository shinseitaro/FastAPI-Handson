# Azure Web Apps へのデプロイ

- [HTTP Cats](https://http.cat/) のクローンサービスを作成

## 事前準備

1. https://github.com/shinseitaro/FastAPI-Handson > `Use this template` 
1. Repository 作成
    - `Repository name`: 任意の名前をつける  
    - `public` / `private` どちらでも大丈夫 
    - Include all branches ✓無し
    - `Create Repository from template` ボタン押す

## デプロイ
1. https://portal.azure.com/#home
1. App Service を開く
1. App Servie の作成 (`+ 作成` ボタンなどで)
1. Web アプリの作成
    - リソースグループ > 新規作成 : 任意の名前をつける
    - インスタンス詳細 > 名前: 任意の名前をつける
    - 公開: `コード` 選択
    - ランタイムスタック: `python3.9` 
    - オペレーションシステム : `Linux` 
    - 地域 : オーストラリアのどこか
    - SKU とサイズ > `サイズを変更します` 
        - `開発 / テスト`
        - B1
        - ![](https://i.imgur.com/qv3GWf8.jpg)
    - 確認及び作成
    - ![](https://i.imgur.com/FXwQaKW.jpg)
1. **作成** ボタンを押す (１分くらいかかります) 
1. `デプロイが完了しました` メッセージがでたら、 `リソースに移動` 
1. 左ペイン > 設定 > 構成 > (画面遷移) > 全般設定 > `スタートアップコマンド` に `startup.txt` と記述 > **保存** > 続行
1. 左ペイン > デプロイ > デプロイセンター > 
    - ソース： Github
    - 組織、レポジトリ : ご自身の登録内容を入れてください
    - ブランチ : main 
    - **保存** > デプロイ作成が始まります
    - ![](https://i.imgur.com/Om4TOCJ.jpg)

### デプロイ経過を観察

- github レポジトリ > Actions 
- デプロイ完了するのに5分くらいかかります







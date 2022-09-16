# FastAPI-Handson

この資料は [PyLadies Tokyo Meetup #72 オンライン FastAPI ハンズオン - connpass](https://pyladies-tokyo.connpass.com/event/254107/) のハンズオン資料です

## ハンズオン事前準備

- [ハンズオン環境構築 ](environment.md) を参照

## デプロイ

- [Azure Web Apps へのデプロイ](deploy.md)

## 最初のステップ 

- [最初のステップ](first_step/README.md)

## レポジトリの構成

```bash
.
├── README.md
├── api # FastAPI でAPI構築
├── data
├── db.sqlite3
├── democat # ClojureScript でフロントエンド構築 
├── deploy.md
├── environment.md 
├── first_step # はじめての FastAPI スクリプト
├── learning_center # FastAPI を使うための学習ノートブック
├── main.py
├── requirements.txt
└── startup.txt
``` 

## 前回の復習

### 2022/07/30(土)の復習
1. FastAPI とは
1. 環境構築
1. FastAPI はじめのいっぽ
    - [RapidAPI Client](https://marketplace.visualstudio.com/items?itemName=RapidAPI.vscode-rapidapi-client)
1. FastAPI を支えるライブラリの説明
    - sqlalchemy

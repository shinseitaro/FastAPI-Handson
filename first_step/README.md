# FastAPI Hands-on 

## 公式ドキュメント

[FastAPI](https://fastapi.tiangolo.com/)

## 最初のステップ

### 基本

1. `main.py` 新規作成
1. FastAPI を インポート
    ```python
    # FastAPI を インポート
    from fastapi import FastAPI
    ```
1. app インスタンス生成    
    ```python
    # app インスタンス生成
    app = FastAPI()
    ```
1. パスオペレーションデコレータを記述 & パスオペレーション関数を定義
    ```python
    @app.get("/")  # パスオペレーションデコレータを記述
    def root():  # パスオペレーション関数を定義
        return {"message": "ハローワールド"}
    ```
1. 開発サーバを起動
    - その1
        ```bash
        uvicorn first_step.main:app --reload
        ```
        - uvicorn : 非同期対応の Python Web サーバー、フレームワーク、およびアプリケーション間の標準インターフェースを提供
        
    - その2 デバッグ - FastAPI - https://fastapi.tiangolo.com/ja/tutorial/debugging/#_1
        ```python
        if __name__ == "__main__":
            import uvicorn
            uvicorn.run(app, host="0.0.0.0", port=8000)
        ```
        ```bash
        cd first_step
        python main.py
        ```

### パスパラメータ

- python の format 文字列と同様のシンタックスでパスパラメータやパス変数を宣言できる
    ```python
    @app.get("/user/{id}") # パスパラメータとして定義された引数は、
    def get_user(id): # そのままパスオペレーション関数の引数として使用可
        return {"user": id}
    ```
- 型宣言を利用して型チェックもできる
    ```python
    @app.get("/user/{id}") 
    def get_user(id: int):  # id は 整数値
        return {"user": id}
    ```

### クエリパラメータ
- オペレーション関数宣言に「**だけ**」使われている引数はクエリパラメータとして解釈
- `?`で始まり、条件を`&`でつないで行くクエリパラメータを作りたい場合
    ```python
    @app.get("/user") # パスパラメータには何も渡さない
    def get_user_lang(name: str, lang: str): #引数がそのままクエリパラメータに
        return {"name": name, "lang": lang}
    ```
### デフォルト値を渡す
1. デフォルト値を渡したい場合
    ```python
    @app.get("/user")
    def get_user_lang(name: str, lang: str = "python"):
        return {"name": name, "lang": lang}
    ```
1. デフォルト値を None に設定したい場合
    ```python
    from typing import Union

    @app.get("/user")
    def get_user_lang(name: str, lang: Union[str, None] = None):
        return {"name": name, "lang": lang}
    ```
    - `Union[x, None]`  とは
        - `x` または `None` 
        - `= None` でデフォルト値は None であることを意味
    - `Optional[x]` も可
        - `Union[x, None]` と同意
        - 今回はクリアに型を説明したいので `Union[x, None]` を使用。
    - `lang: str = None` は非推奨（個人的に）
        - 動作はする
        - Noneは文字列ではないし型宣言した意図が伝わりずらいと思うので個人的には使わない

### パスパラメータとクエリパラメータの組み合わせ
- 両方同時に使うことも出来る
    ```python
    @app.get("/user/{id}/details/")
    def get_user_details(id: int, keyword: str):
        return {"id": id, "keyword": keyword}
    ```

## Pydantic を使う


### リクエストボディ
- クライアント側からAPIサーバ側へデータを送信(POST)する時、データを **request body** として送信
- FastAPIでは、 request body の作成は、**[Pydantic](https://pydantic-docs.helpmanual.io/)** を使うことがデファクトスタンダードです
    ```python
    from pydantic import BaseModel

    # サーバ側にあると仮定したデータ
    data = [
        {"id": 1, "name": "Datha"},
        {"id": 2, "name": "Fidelity"},
        {"id": 3, "name": "Rani"},
    ]

    class User(BaseModel):
        id: int
        name: str


    @app.post("/user") # post メソッド
    def add_user(request: User): # 引数 request  の型に pydantic クラスを指定。
        data.append({"id": request.id, "name": request.name}) # フィールド名でアクセス可
        return data
    ```

- 関数の引数に Pydantic BaseModel を継承して作成したクラスを渡すことで、以下のことを全部やってくれる
    - request body を json として読み取り
    - 型変換
    - 型バリデーション
    - エディターサポート（補完など）
        - pycharm を使っている時はプラグインを入れて下さい
        - [koxudaxi/pydantic-pycharm-plugin: PyCharm plugin for pydantic. This plugin provides autocompletion, inspection, type-checking, inserting unfilled argument, and more.](https://github.com/koxudaxi/pydantic-pycharm-plugin/)
    - 自動ドキュメントのUIに使用

### レスポンスモデル
- パスパラメータデコレータに `response_model` オプションを渡す
    ```python
    class ShowUser(BaseModel):
        name: str

    @app.get("/users", response_model=List[ShowUser])
    def get_userlist():
        return data    
    ```


## ワナに注意
### 1. 同じパスオペレーションデコレータが存在してもエラーを返さない
- API 呼び出しでは「先勝ち」、SWAGGERでは「後勝ち」になる。いずれにしても、エラーが出ないので注意。
    ```python 
    @app.get("/user/{id}")  
    def get_user(id: int):
        return {"user": id}

    @app.get("/user/{id}")
    def get_user_and_keyword(id: int, keyword: str):
        print(keyword)
        return {"id": id, "keyword": keyword}
    ```
### 2. 同じパスオペレーション関数が存在してもエラーは出さない
- 関数名がかぶった場合は、後で記述したほうが優先
    ```python
    @app.get("/user/{id}")
    def get_user(id: int):
        return {"user": id}

    @app.get("/user/{id}/details")
    def get_user(id: int, keyword: str):
        print(keyword)
        return {"id": id, "keyword": keyword}
    ```

### 3. パスパラメータはデータを文字列で受け取る
- 誤って `id` を `str` で定義してしまった場合、何を渡してもエラーを返さない。
    ```python
    @app.get("/user")
    def get_user_lang(
        name: str, 
        id: Union[str, None] = None # 誤り
        ):
        return {"name": name, "age": age}
    ```

### 4. パスパラメータの順番
- パスオペレーションは、上から順に評価されるので、以下の2つの定義の場合は、固定パスである `"/user/me"` が必ず先に定義されていなくてはならない。
    ```python
    @app.get("/user/me")  
    def me():
        return {"user": "it's me!"}

    @app.get("/user/{name}")  
    def user(name: str ):
        return {"user": name}
    ```

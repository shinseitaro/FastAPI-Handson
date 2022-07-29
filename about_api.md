# HTTP Cat クローンについて

https://http.cat/ というサービスのクローンサービス構築を目指しました

## Frontend
- [clojurescript](https://clojurescript.org/) + [Reagent](https://reagent-project.github.io/)

## Backend
- [FastAPI](https://fastapi.tiangolo.com/)

## データテーブル
- statuscode:
    - `code`: HTTP ステイタスコード (200, 404 ...)
    - `message`: HTTP ステイタスメッセージ ("OK", "Not Found")
    - `id`: primary key

- cat:
    - `code`: ネコに紐づけられているステイタスコード (200, 404). 外部キーで statuscode.code につながっている
    - `message`: ネコ画像と一緒に出すメッセージ 
    - `filepath` : ネコ画像ファイルパス
    - `id`: primary key

## API 例

- GET /cat
    ```python
    [
        {
            "filepath": "https://1.bp.blogspot.com/-AoQB8vIvlcw/W8BOcXcEQ6I/AAAAAAABPZM/rXNbol90tXcxBZBlXsg__xix03b_F4nqwCLcBGAs/s180-c/pet_cat_omoi_sleep_man.png",
            "code": 100,
            "id": 1,
            "message": "どいて・・・"
        },
        {
            "filepath": "https://1.bp.blogspot.com/-XiHMwq1qI74/XYhOX1hmXBI/AAAAAAABVHc/4BLGp1ydpyspbCIToEB5AKFIfwNogJ19wCNcBGAsYHQ/s180-c/pet_darui_cat.png",
            "code": 200,
            "id": 2,
            "message": "お仕事おつかれ"
        },...

    ]
    ```
- GET /status
    ```python
    [
        {
            "message": "Continue",
            "id": 1,
            "code": 100,
            "cats": [
                {
                    "filepath": "https://1.bp.blogspot.com/-AoQB8vIvlcw/W8BOcXcEQ6I/AAAAAAABPZM/rXNbol90tXcxBZBlXsg__xix03b_F4nqwCLcBGAs/s180-c/pet_cat_omoi_sleep_man.png",
                    "message": "どいて・・・",
                    "code": 100,
                    "id": 1
                }
            ]
        },
        {
            "message": "OK",
            "id": 2,
            "code": 200,
            "cats": [
                {
                    "filepath": "https://1.bp.blogspot.com/-XiHMwq1qI74/XYhOX1hmXBI/AAAAAAABVHc/4BLGp1ydpyspbCIToEB5AKFIfwNogJ19wCNcBGAsYHQ/s180-c/pet_darui_cat.png",
                    "message": "お仕事おつかれ",
                    "code": 200,
                    "id": 2
                },
                {
                    "filepath": "https://2.bp.blogspot.com/-T65klRuQj10/UUFxm-ldUpI/AAAAAAAAOxg/KcJS8WVNXV8/s180-c/animal_dance_cat.png",
                    "message": "うぇーい",
                    "code": 200,
                    "id": 3
                }
            ]
        },...
    ]
    ``` 


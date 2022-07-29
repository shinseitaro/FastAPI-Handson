# ハンズオン環境構築 

## 事前準備

1. Python 3.6-3.9 のいずれかのバージョンをインストールして下さい
1. DB Browser for SQLite のインストール  https://sqlitebrowser.org/dl/
1. (WebApps へのデプロイもやりたい方) Github と Azure のアカウント。


## 1. テンプレートからレポジトリ作成
1. https://github.com/shinseitaro/FastAPI-Handson > `Use this template` 
1. Repository 作成
    - `Repository name`: 任意の名前をつける  
    - `public` / `private` どちらでも大丈夫 
    - Include all branches ✓無し
    - `Create Repository from template` ボタン押す

## 2. 仮想環境

- 仮想環境構築に慣れているかたは、ご自身のやりかたで全然構いません
- 慣れていない方は、以下の方法でお願いします。
- 質問などありましたら、slack などでお声がけ下さい。


### Windows 
1. 作成したレポジトリを `git clone`
1. ディレクトリへ移動
1. 仮想環境構築
    ```bash
    # 現在有効な python を確認。
    # 一行目に表示されるPythonが現在有効なPython
    where python

    # python のバージョン確認。Python 3.6 ~ 3.9 であることを確認。
    python --version 

    # 仮想環境構築
    python -m venv .venv

    # アクティベート cmd.exe の場合
    .venv\Scripts\activate 
    # アクティベート PowerShell の場合
    .venv\Scripts\Activate.ps1
   

    # 仮想環境にはいったことを確認。
    # 最初に where python した時のパスではなく、
    # 作成したディレクトリ配下の仮想環境内にあるPythonが一行目に表示されていればOK
    where python
    ```
    
### Mac / Linux 
1. 作成したレポジトリを `git clone`
1. ディレクトリへ移動
1.  仮想環境構築
    ```bash
    # 現在有効な python を確認。
    which python 

    # Python 3.6 ~ 3.9 であることを確認。
    python --version 

    # 仮想環境構築 
    python -m venv .venv

    # アクティベート
    source .venv/bin/activate

    # 仮想環境にはいったことを確認. 最初に which python した時のパスではなく、
    # 作成したディレクトリ配下の仮想環境内にあるPythonが表示されていればOK
    which python
    ```

# FastAPI-Handson

この資料は [PyLadies Tokyo Meetup #72 オンライン FastAPI ハンズオン - connpass](https://pyladies-tokyo.connpass.com/event/254107/) のハンズオン資料です

## 事前準備

このレポジトリを git clone して、仮想環境構築をお願いします。

### Windows 

1. このレポジトリを git clone もしくは download
    ```bash
    git clone git@github.com:shinseitaro/FastAPI-Handson.git
    ```
    download: https://github.com/shinseitaro/FastAPI-Handson/archive/refs/heads/main.zip > 展開
1. `FastAPI-Handson` レポジトリへ移動
    ```bash
    cd /path/to/FastAPI-Handson
    ```
1.  仮想環境構築
    ```bash
    # 現在有効な python を確認。Windowsの場合は一行目に表示されるPythonが現在有効なPython
    where python

    # python のバージョン確認。Python 3.6 ~ 3.9 であることを確認。
    # 今回3.10はハンズオンでは対応していません。
    python --version 

    # 仮想環境構築
    python -m venv .venv

    # アクティベート
    .venv\Scripts\activate # 環境によっては、バックスラッシュではなく￥マークのことも有ります        
    

    # 仮想環境にはいったことを確認。最初に where python した時のパスではなく、プロジェクトディレクトリ配下の仮想環境内にあるPythonが一行目に表示されていればOK
    where python
    ```
    
### Mac / Linux 
1. このレポジトリを git clone もしくは download
    ```bash
    git clone git@github.com:shinseitaro/FastAPI-Handson.git
    ```
    download: https://github.com/shinseitaro/FastAPI-Handson/archive/refs/heads/main.zip > 展開
1. `FastAPI-Handson` レポジトリへ移動
    ```bash
    cd /path/to/FastAPI-Handson
    ```
1.  仮想環境構築
    ```bash
    # 現在有効な python を確認。
    which python

    # python のバージョン確認。Python 3.6 ~ 3.9 であることを確認。今回3.10はハンズオンでは対応していません。
    python --version 

    # 仮想環境構築 
    python -m venv .venv

    # アクティベート
    source .venv/bin/activate

    # 仮想環境にはいったことを確認. 最初に which python した時のパスではなく、プロジェクトディレクトリ配下の仮想環境内にあるPythonが表示されていればOK
    which python
    ```

# my-templates

## 概要
2021年7月現在の開発環境  
npm scriptsでタスクランナーの統一を  
試みたがSCSSのコンパイルが恐ろしく遅いので  
一部Gulpと併せて作成  

その他  
php環境とwordpress環境作成用の  
Docer-composeファイルを格納  



##仕様
<gulp>  
SCSSのコンパイル  
CSS圧縮、プレフィックス付与  
SCSSソースマップ（別ファイル出力）  
  
<npm-scripts>  
browser-syncでオートリロード  
（※docker環境の場合は設定ファイルでexportに切り替える）  
画像圧縮  
typescriptでのコンパイル、トランスパイル（ES5）  
webpackでのバンドルと圧縮  


## 公開URL


## 実行
`npm install`

`npm run all`


## 補足
.gitignore
node_modules　だけ適用



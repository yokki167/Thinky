# Thinky（Think "WHY". => 「think Y」 => 「Thinky」）

コンセプト：「Why (なぜ)をとことん考える」

あらゆるものに対して「Why?」をぶつけて思考することで、考える力を養うことが目的のアプリ。

自分一人でじっくり考えてもよし、他のユーザーの考えから新たな視座を得て思考の幅を拡げることも可能。

## Features

- 自分の「Why」を考える  
  （デモ動画を載せる）

深掘りしたい「Why」を決めて、もう答えきれない限界まで理由を絞り出すという機能。  
 「Answer」を送信して考えを深めたプロセスはマイページに記録され、いつでも閲覧できる。  
 最初の画面で「共有する」のチェックを外せばプライベートなことをじっくり考えることもできるが、  
 そのまま「Answer」を送信すれば他のユーザーから送られてくる「Answer」も参考にすることが可能。

- みんなの「Why」を考える  
  （デモ動画を載せる）

全ユーザーが共有した「Why」の一覧から考えたいものを選択し、自分なりの「Answer」を考えて送信できる。  
 特定のテーマについて考えたい場合には、ジャンル別表示や検索機能を使用可能。  
 自分の考えが深まった「Why」や時間がなくて後で考えたい「Why」は、いいね機能でマイページに記録できる。

- マイページ  
  （デモ動画を載せる）

過去に自身が深掘りして考えを深めることができた「Why」の一覧や、
「いいね」ボタンを押したことのある「Why」の一覧を確認できる。  
 タブ切り替えで一覧を表示する部分は Twitter の UI を参考にした。

## Background

（デプロイまで完了時にメンバーが各自記入予定）

## DB Schema

<img width="1155" alt="ER_map" src="https://user-images.githubusercontent.com/50537591/79959669-5d783380-84bf-11ea-8747-76cb739fafd5.png">

### users

| Column                | Type   | Options    |
| --------------------- | ------ | ---------- |
| username              | string |            |
| email                 | string | null:false |
| password              | string | null:false |
| password_confirmation | string | null:false |

### whies

| Column      | Type    | Options          |
| ----------- | ------- | ---------------- |
| question    | text    | null:false       |
| genre_id    | bigint  | foreign_key:true |
| user_id     | bigint  | foreign_key:true |
| likes_count | integer |                  |
| share       | boolean | null:false       |

### pv_answers

| Column   | Type   | Options          |
| -------- | ------ | ---------------- |
| content  | text   | null:false       |
| user_id  | bigint | foreign_key:true |
| whies_id | bigint | foreign_key:true |

### pb_answers

| Column   | Type   | Options          |
| -------- | ------ | ---------------- |
| content  | text   | null:false       |
| user_id  | bigint | foreign_key:true |
| whies_id | bigint | foreign_key:true |

### likes

| Column   | Type   | Options          |
| -------- | ------ | ---------------- |
| user_id  | bigint | foreign_key:true |
| whies_id | bigint | foreign_key:true |

### genres

| Column | Type   | Options |
| ------ | ------ | ------- |
| name   | string |         |

## Versions

Ruby 2.6.5  
Rails 5.2.4.2  
Node 13.13.0  
React 16.13.1

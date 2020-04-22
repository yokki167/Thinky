# Thinky

## DB Schema

<img width="1155" alt="ER_map" src="https://user-images.githubusercontent.com/50537591/79959669-5d783380-84bf-11ea-8747-76cb739fafd5.png">

## users

| Column                | Type    | Options    |
| --------------------- | ------- | ---------- |
| username              | string  |            |
| image                 | string  |            |
| email                 | string  | null:false |
| password              | string  | null:false |
| password_confirmation | string  | null:false |
| why_times             | integer | default: 3 |

## pv_whies

| Column   | Type   | Options          |
| -------- | ------ | ---------------- |
| question | text   | null:false       |
| user_id  | bigint | foreign_key:true |

## pb_whies

| Column      | Type    | Options          |
| ----------- | ------- | ---------------- |
| question    | text    | null:false       |
| genre_id    | bigint  | foreign_key:true |
| user_id     | bigint  | foreign_key:true |
| likes_count | integer |                  |

## pv_answers

| Column      | Type   | Options          |
| ----------- | ------ | ---------------- |
| content     | text   | null:false       |
| user_id     | bigint | foreign_key:true |
| pv_whies_id | bigint | foreign_key:true |

## pb_answers

| Column      | Type   | Options          |
| ----------- | ------ | ---------------- |
| content     | text   | null:false       |
| user_id     | bigint | foreign_key:true |
| pb_whies_id | bigint | foreign_key:true |

## likes

| Column      | Type   | Options          |
| ----------- | ------ | ---------------- |
| user_id     | bigint | foreign_key:true |
| pb_whies_id | bigint | foreign_key:true |

## genres

| Column | Type   | Options |
| ------ | ------ | ------- |
| name   | string |         |

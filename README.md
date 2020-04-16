# Thinky

## users
|Column|Type|Options|
|------|----|-------|
|username|string||
|image|string||
|email|string|null:false|
|password|string|null:false|
|password_confirmation|string|null:false|
|why_times|integer|default: 3|


## pv_whies
|Column|Type|Options|
|------|----|-------|
|question|text|null:false|
|user_id|bigint|foreign_key:true|

## pb_whies
|Column|Type|Options|
|------|----|-------|
|question|text|null:false|
|genre_id|bigint|foreign_key:true|
|user_id|bigint|foreign_key:true|
|likes_count|integer||

## pv_answers
|Column|Type|Options|
|------|----|-------|
|content|text|null:false|
|user_id|bigint|foreign_key:true|
|pv_whies_id|bigint|foreign_key:true|

## pb_answers
|Column|Type|Options|
|------|----|-------|
|content|text|null:false|
|user_id|bigint|foreign_key:true|
|pb_whies_id|bigint|foreign_key:true|

## likes
|Column|Type|Options|
|------|----|-------|
|user_id|bigint|foreign_key:true|
|pb_whies_id|bigint|foreign_key:true|

## genres
|Column|Type|Options|
|------|----|-------|
|name|string||


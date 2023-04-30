#!/bin/bash
IMAGE_DIR=$1
NFT_ID=NFT_$2
jq ".id=\"${NFT_ID}\"" spritemap.json > ../client/sprites/$NFT_ID.json
jq ".id=\"item-${NFT_ID}\"" itemspritemap.json > ../client/sprites/item-$NFT_ID.json
for i in {1..3}; do
    cp $IMAGE_DIR/$i.png ../client/img/$i/$NFT_ID.png
    cp armor$i.png ../client/img/$i/item-$NFT_ID.png
done
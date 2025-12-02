#!/bin/bash

request_spa_js() {
    # Change the content hash if you build the project again
    url="http://nginx-zero-to-hero.local:8825/assets/index-CzHpBxx8.js"
    curl -I -H "Accept-Encoding: gzip" $url > evidence.txt
    echo "--------------------------------"
    cat evidence.txt
    echo "--------------------------------"
}

request_spa_js

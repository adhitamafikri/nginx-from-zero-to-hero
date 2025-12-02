#!/bin/bash

request_gzipped() {
    # Change the content hash if you build the project again
    url="http://nginx-zero-to-hero.local:8825/assets/index-CzHpBxx8.js"
    result=$(curl -H "Accept-Encoding: gzip" -s -o /dev/null -w "%{size_download}" $url)
    echo "GZIPPED: $result" >> evidence.txt
    echo "--------------------------------"
    cat evidence.txt
    echo "--------------------------------"
}

request_not_gzipped() {
    # Change the content hash if you build the project again
    url="http://nginx-zero-to-hero.local:8825/assets/index-CzHpBxx8.js"
    result=$(curl -H "Accept-Encoding: identity" -s -o /dev/null -w "%{size_download}" $url)
    echo "NOT GZIPPED: $result" >> evidence.txt
    echo "--------------------------------"
    cat evidence.txt
    echo "--------------------------------"
}

cat /dev/null > evidence.txt
echo "Running evidence script:"
request_gzipped
request_not_gzipped

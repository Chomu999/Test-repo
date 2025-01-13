#!/bin/bash

echo "$1 file is compiling: "

g++ -o ~/./out $1
echo "compiling done: "
sleep 1
echo "now calling app: "
sleep 1
bash ~/./out
echo "now deleting app: "
sleep 1
#rm -rf $1.out

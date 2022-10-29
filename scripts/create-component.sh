#! /bin/bash

page_name=$1

if [ $# -eq 0 ]; then
  echo -n "Name your new 📂 : ";
  read;
  if [ -z "${REPLY}" ]; then echo "Empty page name" && exit 1; fi
  page_name=${REPLY};
fi

if [ -f src/pages/$page_name ] || [ -d src/pages/$page_name ]; then echo "Page name already taken" && exit 1; fi
echo "Lets build $page_name 📂";

cd src/pages &&
mkdir $page_name &&
cd $page_name &&
mkdir component && touch component/$page_name.tsx &&
mkdir utils && touch utils/$page_name.ts &&
mkdir service && touch service/$page_name.ts &&
mkdir store && touch store/$page_name.ts &&
mkdir style && touch style/$page_name.css &&
mkdir tests && touch tests/$page_name.test.ts &&
touch $page_name.tsx &&
echo "$page_name created ! 🎉"

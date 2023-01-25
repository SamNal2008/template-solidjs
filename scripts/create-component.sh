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

template_directory=../../../scripts/page-template
template_prefix=Template

# for each extension in template directory
# create a new extension in the page directory
# replace template by page_name in the new extension

extension_list="service.ts store.ts test.tsx tsx"

cd src/pages &&
mkdir $page_name &&
cd $page_name &&

for extension in $extension_list; do
  touch $page_name.$extension &&
  sed "s/template/$page_name/gi" $template_directory/$template_prefix.$extension >> $page_name.$extension;
done

echo "$page_name created ! 🎉"

#!/bin/bash

DOMAIN="escalibro"
SOURCE_DIR='./app/'
OUTPUT_DIR='./app/locales/'
POT="${OUTPUT_DIR}$DOMAIN.pot"
LANGS="en_US ru_RU"
SOURCES="*.js"


# Create template
echo "Creating POT"
rm -f $POT
find $SOURCE_DIR -iname '*.js' -o -iname '*.jsx' | xargs xgettext \
	--copyright-holder="2014" \
	--package-name="escalibro mobile" \
	--package-version="1.0" \
	--msgid-bugs-address="apkawa@gmail.com" \
	--language=javascript \
	--sort-output \
	--no-wrap \
	--keyword=_gt:1 \
	--from-code=UTF-8 \
	--output=$POT \
	--default-domain=$DOMAIN \

# Create languages
for LANG in $LANGS
do
    po_file=$OUTPUT_DIR$LANG.po
	if [ ! -e "$po_file" ]
	then
		echo "Creating language file for $LANG"
		msginit --no-translator --no-wrap --locale=$LANG.UTF-8 --output-file=$po_file --input=$POT
	fi

	echo "Updating language file for $LANG from $POT"
	msgmerge --sort-output --no-wrap --update --backup=off $po_file $POT

#	echo "Converting $LANG.po to $LANG.mo"
#	msgfmt --check --verbose --output-file=$OUTPUT_DIR$LANG.mo $OUTPUT_DIR$LANG.po
done
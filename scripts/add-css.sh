
for x in $(find ../src/components | grep "\.css" | sed 's/\.css//g') ; do \
    echo "@media screen and (max-width: 700px) {" > "$x-700.css"
    echo "" >> "$x-700.css"
    echo "}" >> "$x-700.css"
done;
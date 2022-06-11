
# Compile typescript files.
rm -rf dist
mkdir dist
cd source
rm -rf *.js
tsc *
mv *.js ../dist



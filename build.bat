@echo off
del dist.zip
pushd .\src
"C:\Program Files\7-Zip\7z.exe" a ..\dist.zip
popd
echo "Works on Firefox and Firefox for Android"
explorer "https://addons.mozilla.org/en-US/developers/addon/abortion-is-infanticide/versions/submit/"
explorer "https://chrome.google.com/webstore/developer/dashboard"

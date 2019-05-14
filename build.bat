@echo off
del dist.zip
pushd .\src
"C:\Program Files\7-Zip\7z.exe" a ..\dist.zip
popd

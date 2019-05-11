@echo off
del dist.xpi
pushd .\src
"C:\Program Files\7-Zip\7z.exe" a ..\dist.xpi
popd

rmdir /Q /s build
mkdir build
cd build
@REM cmake -DCMAKE_CXX_COMPILER=cl.exe -A x64 ..
cmake -G "MinGW Makefiles" ..
cmake --build . -- /property:Configuration=Release
cd ..

rmdir /Q /s build
mkdir build
cd build
cmake -DCMAKE_CXX_COMPILER=cl.exe -A x64 ..
cmake --build . -- /property:Configuration=Release
cd ..

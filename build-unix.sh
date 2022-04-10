rm -rf build
mkdir build
cd build
cmake -G Ninja .. -DCMAKE_OSX_ARCHITECTURES="arm64;x86_64"
cmake --build . --config Release
cd ..

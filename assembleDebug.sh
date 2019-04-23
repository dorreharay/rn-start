export ANDROID_HOME=/home/didkivskyi/Android/Sdk
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/build-tools/23.0.1:$PATH

cd android 
./gradlew assembleDebug -debug --stacktrace
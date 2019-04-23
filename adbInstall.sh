export ANDROID_HOME=/home/didkivskyi/Android/Sdk
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/build-tools/23.0.1:$PATH

adb install -r ./android/app/build/outputs/apk/debug/app-debug.apk
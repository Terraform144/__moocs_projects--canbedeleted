/*import {
    Capacitor,
    CameraResultType,
    FilesystemDirectory,
  } from '@capacitor/core';
*/

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    init();
}

function init() {

    if (Capacitor.getPlatform() === 'ios') {
        console.log("IOS");
        //document.getElementById("dContent").innerHTML = "IOS";;
    } else if (Capacitor.getPlatform() === 'android') {
        console.log("ANDROID");
        //document.getElementById("dContent").innerHTML = "ANDROID";
    } else {
        console.log("WEB");
    }

    // init app scenes
    $('#main_application').show();
    switchToScene("#introduction");
    console.log("---> fin application");
}

// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Layama0023", a: "Camera360_00", p: new BABYLON.Vector3(350, 150, 390.832), l: new BABYLON.Vector3(350, 150, 391.832)});
   layamaCameras.push({n: "Layama0002", a: "Camera360_03", p: new BABYLON.Vector3(350, 150, 590), l: new BABYLON.Vector3(350, 150, 591)});
   layamaCameras.push({n: "Layama0009", a: "Camera360_02", p: new BABYLON.Vector3(600, 150, 590), l: new BABYLON.Vector3(600, 150, 591)});
   layamaCameras.push({n: "Layama0016", a: "Camera360_01", p: new BABYLON.Vector3(350, 150, 825), l: new BABYLON.Vector3(350, 150, 826)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}


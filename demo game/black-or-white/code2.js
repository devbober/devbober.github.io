gdjs.achievementsCode = {};
gdjs.achievementsCode.localVariables = [];
gdjs.achievementsCode.GDNewSpriteObjects1= [];
gdjs.achievementsCode.GDNewSpriteObjects2= [];
gdjs.achievementsCode.GDOnScreenControlsButtonObjects1= [];
gdjs.achievementsCode.GDOnScreenControlsButtonObjects2= [];
gdjs.achievementsCode.GDNewTextObjects1= [];
gdjs.achievementsCode.GDNewTextObjects2= [];


gdjs.achievementsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.achievementsCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.achievementsCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.achievementsCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.achievementsCode.GDOnScreenControlsButtonObjects1[k] = gdjs.achievementsCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.achievementsCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.achievementsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.achievementsCode.GDNewSpriteObjects1.length = 0;
gdjs.achievementsCode.GDNewSpriteObjects2.length = 0;
gdjs.achievementsCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.achievementsCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.achievementsCode.GDNewTextObjects1.length = 0;
gdjs.achievementsCode.GDNewTextObjects2.length = 0;

gdjs.achievementsCode.eventsList0(runtimeScene);

return;

}

gdjs['achievementsCode'] = gdjs.achievementsCode;

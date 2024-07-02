gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDgrassObjects1= [];
gdjs.menuCode.GDgrassObjects2= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDskyObjects1= [];
gdjs.menuCode.GDskyObjects2= [];
gdjs.menuCode.GDsky_95953Objects1= [];
gdjs.menuCode.GDsky_95953Objects2= [];
gdjs.menuCode.GDtObjects1= [];
gdjs.menuCode.GDtObjects2= [];
gdjs.menuCode.GDOnScreenControlsButtonObjects1= [];
gdjs.menuCode.GDOnScreenControlsButtonObjects2= [];
gdjs.menuCode.GDOnScreenControlsButton2Objects1= [];
gdjs.menuCode.GDOnScreenControlsButton2Objects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDanimationsObjects1= [];
gdjs.menuCode.GDanimationsObjects2= [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDOnScreenControlsButton3Objects1= [];
gdjs.menuCode.GDOnScreenControlsButton3Objects2= [];
gdjs.menuCode.GDNewButtonObjects1= [];
gdjs.menuCode.GDNewButtonObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton2"), gdjs.menuCode.GDOnScreenControlsButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDOnScreenControlsButton2Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDOnScreenControlsButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDOnScreenControlsButton2Objects1[k] = gdjs.menuCode.GDOnScreenControlsButton2Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDOnScreenControlsButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("animations"), gdjs.menuCode.GDanimationsObjects1);
{for(var i = 0, len = gdjs.menuCode.GDanimationsObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDanimationsObjects1[i].getBehavior("Animation").setAnimationName("NewSprite3");
}
}{for(var i = 0, len = gdjs.menuCode.GDanimationsObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDanimationsObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1 - tutorial", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("animations"), gdjs.menuCode.GDanimationsObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\Music\\offsetSong.ogg", true, 100, 1);
}{for(var i = 0, len = gdjs.menuCode.GDanimationsObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDanimationsObjects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton3"), gdjs.menuCode.GDOnScreenControlsButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDOnScreenControlsButton3Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDOnScreenControlsButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDOnScreenControlsButton3Objects1[k] = gdjs.menuCode.GDOnScreenControlsButton3Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDOnScreenControlsButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "achievements", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDgrassObjects1.length = 0;
gdjs.menuCode.GDgrassObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDskyObjects1.length = 0;
gdjs.menuCode.GDskyObjects2.length = 0;
gdjs.menuCode.GDsky_95953Objects1.length = 0;
gdjs.menuCode.GDsky_95953Objects2.length = 0;
gdjs.menuCode.GDtObjects1.length = 0;
gdjs.menuCode.GDtObjects2.length = 0;
gdjs.menuCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.menuCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.menuCode.GDOnScreenControlsButton2Objects1.length = 0;
gdjs.menuCode.GDOnScreenControlsButton2Objects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDanimationsObjects1.length = 0;
gdjs.menuCode.GDanimationsObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDOnScreenControlsButton3Objects1.length = 0;
gdjs.menuCode.GDOnScreenControlsButton3Objects2.length = 0;
gdjs.menuCode.GDNewButtonObjects1.length = 0;
gdjs.menuCode.GDNewButtonObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;

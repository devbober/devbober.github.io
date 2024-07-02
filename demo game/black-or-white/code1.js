gdjs.level1_32_45_32tutorialCode = {};
gdjs.level1_32_45_32tutorialCode.localVariables = [];
gdjs.level1_32_45_32tutorialCode.GDplayerObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDplayerObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewSpriteObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewSpriteObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite2Objects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite2Objects2= [];
gdjs.level1_32_45_32tutorialCode.GDrightObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDrightObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDleftObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDleftObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite5Objects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite5Objects2= [];
gdjs.level1_32_45_32tutorialCode.GDcontrol_9595_9595_9595tutorialObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDcontrol_9595_9595_9595tutorialObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects2= [];
gdjs.level1_32_45_32tutorialCode.GDboxObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDboxObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite3Objects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite3Objects2= [];
gdjs.level1_32_45_32tutorialCode.GDkillObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDkillObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite4Objects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewSprite4Objects2= [];
gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewTextObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewTextObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDrestartObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDrestartObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDmenuObjects1= [];
gdjs.level1_32_45_32tutorialCode.GDmenuObjects2= [];
gdjs.level1_32_45_32tutorialCode.GDNewText2Objects1= [];
gdjs.level1_32_45_32tutorialCode.GDNewText2Objects2= [];


gdjs.level1_32_45_32tutorialCode.mapOfGDgdjs_9546level1_959532_959545_959532tutorialCode_9546GDkillObjects1Objects = Hashtable.newFrom({"kill": gdjs.level1_32_45_32tutorialCode.GDkillObjects1});
gdjs.level1_32_45_32tutorialCode.mapOfGDgdjs_9546level1_959532_959545_959532tutorialCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.level1_32_45_32tutorialCode.GDplayerObjects1});
gdjs.level1_32_45_32tutorialCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.level1_32_45_32tutorialCode.GDplayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.level1_32_45_32tutorialCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.level1_32_45_32tutorialCode.GDplayerObjects1[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.level1_32_45_32tutorialCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.level1_32_45_32tutorialCode.GDplayerObjects1[0].getPointY("")), 0.05), "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.tween.tweenCameraZoom2(runtimeScene, "1", 1.4, "", "linear", 0.5);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.level1_32_45_32tutorialCode.GDrightObjects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDrightObjects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.level1_32_45_32tutorialCode.GDrightObjects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDrightObjects1[i].getBehavior("Animation").setAnimationName("stop");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.level1_32_45_32tutorialCode.GDrightObjects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDrightObjects1[i].getBehavior("Animation").setAnimationName("play");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.level1_32_45_32tutorialCode.GDleftObjects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDleftObjects1[i].getBehavior("Animation").setAnimationName("stop");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.level1_32_45_32tutorialCode.GDleftObjects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDleftObjects1[i].getBehavior("Animation").setAnimationName("play");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("stop");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1[i].getBehavior("Animation").setAnimationName("play");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\Music\\undertale.mp3", true, 2.5, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kill"), gdjs.level1_32_45_32tutorialCode.GDkillObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.level1_32_45_32tutorialCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1_32_45_32tutorialCode.mapOfGDgdjs_9546level1_959532_959545_959532tutorialCode_9546GDkillObjects1Objects, gdjs.level1_32_45_32tutorialCode.mapOfGDgdjs_9546level1_959532_959545_959532tutorialCode_9546GDplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects1);
/* Reuse gdjs.level1_32_45_32tutorialCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDplayerObjects1[i].setPosition(191,280);
}
}{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects1[i].SetValue(gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (8), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).sub(8);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(16);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.level1_32_45_32tutorialCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.level1_32_45_32tutorialCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.level1_32_45_32tutorialCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.level1_32_45_32tutorialCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1_32_45_32tutorialCode.GDrestartObjects1.length;i<l;++i) {
    if ( gdjs.level1_32_45_32tutorialCode.GDrestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level1_32_45_32tutorialCode.GDrestartObjects1[k] = gdjs.level1_32_45_32tutorialCode.GDrestartObjects1[i];
        ++k;
    }
}
gdjs.level1_32_45_32tutorialCode.GDrestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1 - tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.level1_32_45_32tutorialCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1_32_45_32tutorialCode.GDmenuObjects1.length;i<l;++i) {
    if ( gdjs.level1_32_45_32tutorialCode.GDmenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level1_32_45_32tutorialCode.GDmenuObjects1[k] = gdjs.level1_32_45_32tutorialCode.GDmenuObjects1[i];
        ++k;
    }
}
gdjs.level1_32_45_32tutorialCode.GDmenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.level1_32_45_32tutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level1_32_45_32tutorialCode.GDplayerObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDplayerObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite2Objects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite2Objects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDrightObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDrightObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDleftObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDleftObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite5Objects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite5Objects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDcontrol_9595_9595_9595tutorialObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDcontrol_9595_9595_9595tutorialObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite6Objects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDboxObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDboxObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite3Objects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite3Objects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDkillObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDkillObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite4Objects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewSprite4Objects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDCopperRedBarObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewTextObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewTextObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDrestartObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDrestartObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDmenuObjects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDmenuObjects2.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewText2Objects1.length = 0;
gdjs.level1_32_45_32tutorialCode.GDNewText2Objects2.length = 0;

gdjs.level1_32_45_32tutorialCode.eventsList0(runtimeScene);

return;

}

gdjs['level1_32_45_32tutorialCode'] = gdjs.level1_32_45_32tutorialCode;

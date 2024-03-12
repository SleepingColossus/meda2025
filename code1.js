gdjs.sdCode = {};
gdjs.sdCode.GDbackgroundObjects1= [];
gdjs.sdCode.GDbackgroundObjects2= [];
gdjs.sdCode.GDboomboxObjects1= [];
gdjs.sdCode.GDboomboxObjects2= [];
gdjs.sdCode.GDcountdownObjects1= [];
gdjs.sdCode.GDcountdownObjects2= [];
gdjs.sdCode.GDnotesObjects1= [];
gdjs.sdCode.GDnotesObjects2= [];
gdjs.sdCode.GDtoggleSceneObjects1= [];
gdjs.sdCode.GDtoggleSceneObjects2= [];
gdjs.sdCode.GDhdLabelObjects1= [];
gdjs.sdCode.GDhdLabelObjects2= [];


gdjs.sdCode.userFunc0x8934a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
const today = new Date();
const targetDate = new Date(2025, 2, 1);
const timeDifferenceMs = Math.abs(targetDate - today);
const oneDayMs = 24 * 60 * 60 * 1000; // One day in milliseconds
const daysRemaining = Math.round(timeDifferenceMs / oneDayMs);

runtimeScene.getVariables().get("daysRemaining").setString(daysRemaining)
};
gdjs.sdCode.eventsList0 = function(runtimeScene) {

{


gdjs.sdCode.userFunc0x8934a0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.sdCode.GDcountdownObjects1 */
{for(var i = 0, len = gdjs.sdCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.sdCode.GDcountdownObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("daysRemaining")));
}
}}

}


};gdjs.sdCode.asyncCallback9454076 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}}
gdjs.sdCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.sdCode.asyncCallback9454076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sdCode.asyncCallback14436692 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}}
gdjs.sdCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.sdCode.asyncCallback14436692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sdCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.sdCode.GDcountdownObjects1);
{for(var i = 0, len = gdjs.sdCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.sdCode.GDcountdownObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(999, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sdCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("toggleScene"), gdjs.sdCode.GDtoggleSceneObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "sd\\music.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.sdCode.GDtoggleSceneObjects1.length ;i < len;++i) {
    gdjs.sdCode.GDtoggleSceneObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boombox"), gdjs.sdCode.GDboomboxObjects1);
{for(var i = 0, len = gdjs.sdCode.GDboomboxObjects1.length ;i < len;++i) {
    gdjs.sdCode.GDboomboxObjects1[i].getBehavior("Tween").addObjectScaleYTween2("y", 1.5, "bounce", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.sdCode.GDboomboxObjects1.length ;i < len;++i) {
    gdjs.sdCode.GDboomboxObjects1[i].getBehavior("Tween").addObjectScaleXTween2("x", 1.3, "bounce", 0.5, false, true);
}
}
{ //Subevents
gdjs.sdCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boombox"), gdjs.sdCode.GDboomboxObjects1);
{for(var i = 0, len = gdjs.sdCode.GDboomboxObjects1.length ;i < len;++i) {
    gdjs.sdCode.GDboomboxObjects1[i].getBehavior("Tween").addObjectScaleYTween2("y", 1, "bounce", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.sdCode.GDboomboxObjects1.length ;i < len;++i) {
    gdjs.sdCode.GDboomboxObjects1[i].getBehavior("Tween").addObjectScaleXTween2("x", 0.8, "bounce", 0.5, false, true);
}
}
{ //Subevents
gdjs.sdCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("toggleScene"), gdjs.sdCode.GDtoggleSceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sdCode.GDtoggleSceneObjects1.length;i<l;++i) {
    if ( gdjs.sdCode.GDtoggleSceneObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sdCode.GDtoggleSceneObjects1[k] = gdjs.sdCode.GDtoggleSceneObjects1[i];
        ++k;
    }
}
gdjs.sdCode.GDtoggleSceneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "hd", false);
}}

}


};

gdjs.sdCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sdCode.GDbackgroundObjects1.length = 0;
gdjs.sdCode.GDbackgroundObjects2.length = 0;
gdjs.sdCode.GDboomboxObjects1.length = 0;
gdjs.sdCode.GDboomboxObjects2.length = 0;
gdjs.sdCode.GDcountdownObjects1.length = 0;
gdjs.sdCode.GDcountdownObjects2.length = 0;
gdjs.sdCode.GDnotesObjects1.length = 0;
gdjs.sdCode.GDnotesObjects2.length = 0;
gdjs.sdCode.GDtoggleSceneObjects1.length = 0;
gdjs.sdCode.GDtoggleSceneObjects2.length = 0;
gdjs.sdCode.GDhdLabelObjects1.length = 0;
gdjs.sdCode.GDhdLabelObjects2.length = 0;

gdjs.sdCode.eventsList3(runtimeScene);

return;

}

gdjs['sdCode'] = gdjs.sdCode;

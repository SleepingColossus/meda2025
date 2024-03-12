gdjs.hdCode = {};
gdjs.hdCode.GDwallObjects1= [];
gdjs.hdCode.GDwallObjects2= [];
gdjs.hdCode.GDdoorObjects1= [];
gdjs.hdCode.GDdoorObjects2= [];
gdjs.hdCode.GDbedObjects1= [];
gdjs.hdCode.GDbedObjects2= [];
gdjs.hdCode.GDclockObjects1= [];
gdjs.hdCode.GDclockObjects2= [];
gdjs.hdCode.GDlanternObjects1= [];
gdjs.hdCode.GDlanternObjects2= [];
gdjs.hdCode.GDwindowObjects1= [];
gdjs.hdCode.GDwindowObjects2= [];
gdjs.hdCode.GDmedaObjects1= [];
gdjs.hdCode.GDmedaObjects2= [];
gdjs.hdCode.GDpictureObjects1= [];
gdjs.hdCode.GDpictureObjects2= [];
gdjs.hdCode.GDcalendarObjects1= [];
gdjs.hdCode.GDcalendarObjects2= [];
gdjs.hdCode.GDcountdownObjects1= [];
gdjs.hdCode.GDcountdownObjects2= [];
gdjs.hdCode.GDnotesObjects1= [];
gdjs.hdCode.GDnotesObjects2= [];
gdjs.hdCode.GDtoggleSceneObjects1= [];
gdjs.hdCode.GDtoggleSceneObjects2= [];
gdjs.hdCode.GDhdLabelObjects1= [];
gdjs.hdCode.GDhdLabelObjects2= [];


gdjs.hdCode.userFunc0xc410a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
const today = new Date();
const targetDate = new Date(2025, 2, 1);
const timeDifferenceMs = Math.abs(targetDate - today);
const oneDayMs = 24 * 60 * 60 * 1000; // One day in milliseconds
const daysRemaining = Math.round(timeDifferenceMs / oneDayMs);

runtimeScene.getVariables().get("daysRemaining").setString(daysRemaining)
};
gdjs.hdCode.eventsList0 = function(runtimeScene) {

{


gdjs.hdCode.userFunc0xc410a0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.hdCode.GDcountdownObjects1 */
{for(var i = 0, len = gdjs.hdCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.hdCode.GDcountdownObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("daysRemaining")));
}
}}

}


};gdjs.hdCode.asyncCallback9931548 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("tweenUp"), false);
}}
gdjs.hdCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.hdCode.asyncCallback9931548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.hdCode.asyncCallback9512732 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("tweenUp"), true);
}}
gdjs.hdCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.hdCode.asyncCallback9512732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.hdCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.hdCode.GDcountdownObjects1);
{for(var i = 0, len = gdjs.hdCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.hdCode.GDcountdownObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(999, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.hdCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("toggleScene"), gdjs.hdCode.GDtoggleSceneObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "hd\\music.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.hdCode.GDtoggleSceneObjects1.length ;i < len;++i) {
    gdjs.hdCode.GDtoggleSceneObjects1[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("tweenUp"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clock"), gdjs.hdCode.GDclockObjects1);
{for(var i = 0, len = gdjs.hdCode.GDclockObjects1.length ;i < len;++i) {
    gdjs.hdCode.GDclockObjects1[i].getBehavior("Tween").addObjectScaleYTween2("y", 0.4, "bounce", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.hdCode.GDclockObjects1.length ;i < len;++i) {
    gdjs.hdCode.GDclockObjects1[i].getBehavior("Tween").addObjectScaleXTween2("x", 0.4, "bounce", 0.5, false, true);
}
}
{ //Subevents
gdjs.hdCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("tweenUp"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clock"), gdjs.hdCode.GDclockObjects1);
{for(var i = 0, len = gdjs.hdCode.GDclockObjects1.length ;i < len;++i) {
    gdjs.hdCode.GDclockObjects1[i].getBehavior("Tween").addObjectScaleYTween2("y", 0.3, "bounce", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.hdCode.GDclockObjects1.length ;i < len;++i) {
    gdjs.hdCode.GDclockObjects1[i].getBehavior("Tween").addObjectScaleXTween2("x", 0.3, "bounce", 0.5, false, true);
}
}
{ //Subevents
gdjs.hdCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("toggleScene"), gdjs.hdCode.GDtoggleSceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.hdCode.GDtoggleSceneObjects1.length;i<l;++i) {
    if ( gdjs.hdCode.GDtoggleSceneObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.hdCode.GDtoggleSceneObjects1[k] = gdjs.hdCode.GDtoggleSceneObjects1[i];
        ++k;
    }
}
gdjs.hdCode.GDtoggleSceneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sd", false);
}}

}


};

gdjs.hdCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.hdCode.GDwallObjects1.length = 0;
gdjs.hdCode.GDwallObjects2.length = 0;
gdjs.hdCode.GDdoorObjects1.length = 0;
gdjs.hdCode.GDdoorObjects2.length = 0;
gdjs.hdCode.GDbedObjects1.length = 0;
gdjs.hdCode.GDbedObjects2.length = 0;
gdjs.hdCode.GDclockObjects1.length = 0;
gdjs.hdCode.GDclockObjects2.length = 0;
gdjs.hdCode.GDlanternObjects1.length = 0;
gdjs.hdCode.GDlanternObjects2.length = 0;
gdjs.hdCode.GDwindowObjects1.length = 0;
gdjs.hdCode.GDwindowObjects2.length = 0;
gdjs.hdCode.GDmedaObjects1.length = 0;
gdjs.hdCode.GDmedaObjects2.length = 0;
gdjs.hdCode.GDpictureObjects1.length = 0;
gdjs.hdCode.GDpictureObjects2.length = 0;
gdjs.hdCode.GDcalendarObjects1.length = 0;
gdjs.hdCode.GDcalendarObjects2.length = 0;
gdjs.hdCode.GDcountdownObjects1.length = 0;
gdjs.hdCode.GDcountdownObjects2.length = 0;
gdjs.hdCode.GDnotesObjects1.length = 0;
gdjs.hdCode.GDnotesObjects2.length = 0;
gdjs.hdCode.GDtoggleSceneObjects1.length = 0;
gdjs.hdCode.GDtoggleSceneObjects2.length = 0;
gdjs.hdCode.GDhdLabelObjects1.length = 0;
gdjs.hdCode.GDhdLabelObjects2.length = 0;

gdjs.hdCode.eventsList3(runtimeScene);

return;

}

gdjs['hdCode'] = gdjs.hdCode;

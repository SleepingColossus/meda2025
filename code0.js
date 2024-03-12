gdjs.introCode = {};
gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.introCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.introCode.GDNewSpriteObjects1= [];
gdjs.introCode.GDNewSpriteObjects2= [];
gdjs.introCode.GDcountdownObjects1= [];
gdjs.introCode.GDcountdownObjects2= [];
gdjs.introCode.GDnotesObjects1= [];
gdjs.introCode.GDnotesObjects2= [];
gdjs.introCode.GDtoggleSceneObjects1= [];
gdjs.introCode.GDtoggleSceneObjects2= [];
gdjs.introCode.GDhdLabelObjects1= [];
gdjs.introCode.GDhdLabelObjects2= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sd", false);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.introCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.introCode.GDNewSpriteObjects1.length = 0;
gdjs.introCode.GDNewSpriteObjects2.length = 0;
gdjs.introCode.GDcountdownObjects1.length = 0;
gdjs.introCode.GDcountdownObjects2.length = 0;
gdjs.introCode.GDnotesObjects1.length = 0;
gdjs.introCode.GDnotesObjects2.length = 0;
gdjs.introCode.GDtoggleSceneObjects1.length = 0;
gdjs.introCode.GDtoggleSceneObjects2.length = 0;
gdjs.introCode.GDhdLabelObjects1.length = 0;
gdjs.introCode.GDhdLabelObjects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);

return;

}

gdjs['introCode'] = gdjs.introCode;

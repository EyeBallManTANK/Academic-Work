

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["347255b8-32c0-42a1-aeca-60efb01bcf8f","16c8f16d-237d-4c6a-8b84-b811b744cadf","fbd5f8f2-1cbe-4458-8883-8abb80c171b6","a7442d35-8ce7-4af0-bc38-f5e0f6876fce","69ecc119-df62-4b91-b993-35b03a75669c","f9071311-4b86-4741-97b4-f79abf441ad3","e503530c-8ad9-472c-898a-ff13a1953e4d","0d7cdaf2-ada7-460e-b2ac-a1d96cc20a58","ca7706a4-b4e9-4861-8b61-9acf209ae70a","c19604ad-43f1-4bd3-b156-b0b077087b96","bedc1ff4-ef32-4332-9eb8-58d99a1bcd1c","c02002c4-5500-4cb2-91ec-c7147b61b3c9","c1525b15-2b6d-4731-84a5-1e94d71769f0","393219fc-96ec-44b4-899d-cc99410b90da","8e578787-17c2-498d-a60d-d7ca42429074","875ccfc3-fa0a-4350-b3d5-e69219d90dd3","61c8d174-a59d-4b8a-9ac1-98afd57e7056","b16e8078-aac8-481d-b478-324c0e26c044","59fa2baa-0ea0-44c3-a31b-2c89ba34b4fa","e670b3d8-17a8-4f35-abe2-e53824515554","9ca2cb73-f353-48dd-863f-6220c3548844","abbc64f3-47d1-420c-a7fd-ecacabf0d964","8e05c415-5a24-4d95-a348-2327d358f6f3","822a5083-8a23-439c-be97-6e5317eaab6c","0c20b90b-7aa4-43a9-a03c-d0722b905a1a","2f419cc1-e894-4a97-a94c-b20f1ee92fd5","fb696442-c495-4f89-b910-fddd011e2548","c095e84a-ee07-4b98-824b-6a7e69bdfeeb","729f612a-1723-409e-bdd7-6da3b012ba23","889e76a7-fa7f-4f21-8b98-5d6a29540b90","defbabbe-5650-4e82-9211-f1191e7fc4d8","ca5a7d89-cdec-4fa8-aed3-6d85b280bdad","2170d631-f2ff-4c08-af54-b11df80e7b6b","e6ab9922-b53d-4e3a-b365-3e3cc0cde453","13865b62-4aa2-4241-9266-7cd8fc801587","69833682-4478-43f8-8175-b78d16ecce90","51c6ffb3-020c-4ed5-9be9-8a4b38db7b73","8c9ebd71-0c61-47df-a1bd-7123b56605f2","75feb228-37ca-4639-9c3d-93a048d090f7","e3b29c47-0a4a-4868-ae3f-2ff7b6532f1d","38289ba1-9d5b-4d97-88a0-865d9d5ca4ed","c11a61f7-f257-481f-bc87-472bb8b57d43","30adcfe9-2540-4222-b581-b99a032eb6ae","f338a901-06ea-487f-95d3-7c01cd5794c5","25399144-f4ba-44e6-a788-247d5989fada","ad9291bd-e3e9-411c-9b47-0de7b471cc15","722e604e-7545-4ee4-aaba-ab5faf3907e3","4b17986c-9536-459f-a5e6-2dfe25ceb108"],"propsByKey":{"347255b8-32c0-42a1-aeca-60efb01bcf8f":{"name":"ParasiteWalk","sourceUrl":null,"frameSize":{"x":25,"y":61},"frameCount":2,"looping":true,"frameDelay":12,"version":"lx5agkDm3V4Ms.gSKCWGdOnCJ80GJElU","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":61},"rootRelativePath":"assets/347255b8-32c0-42a1-aeca-60efb01bcf8f.png"},"16c8f16d-237d-4c6a-8b84-b811b744cadf":{"name":"ParasiteStand","sourceUrl":null,"frameSize":{"x":25,"y":61},"frameCount":1,"looping":true,"frameDelay":12,"version":"k4CYYjdQFau3aX6rpkgwgsx79P7QJLIC","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":61},"rootRelativePath":"assets/16c8f16d-237d-4c6a-8b84-b811b744cadf.png"},"fbd5f8f2-1cbe-4458-8883-8abb80c171b6":{"name":"ParasiteWalk2","sourceUrl":null,"frameSize":{"x":19,"y":61},"frameCount":2,"looping":true,"frameDelay":20,"version":"1R1rScZ49oc1qcd42o_e9zeQ8onbWlz1","loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":61},"rootRelativePath":"assets/fbd5f8f2-1cbe-4458-8883-8abb80c171b6.png"},"a7442d35-8ce7-4af0-bc38-f5e0f6876fce":{"name":"ParasiteStand2","sourceUrl":null,"frameSize":{"x":19,"y":61},"frameCount":1,"looping":true,"frameDelay":12,"version":"49Yk9kuagEH_0FwD0zTyPHWjx98J8rmZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":61},"rootRelativePath":"assets/a7442d35-8ce7-4af0-bc38-f5e0f6876fce.png"},"69ecc119-df62-4b91-b993-35b03a75669c":{"name":"Fist up","sourceUrl":null,"frameSize":{"x":15,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"L47lId.83Seny2WpVFMW2H3_ws86vkBV","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":16},"rootRelativePath":"assets/69ecc119-df62-4b91-b993-35b03a75669c.png"},"f9071311-4b86-4741-97b4-f79abf441ad3":{"name":"Fist example","sourceUrl":null,"frameSize":{"x":15,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"2dWOLe.gpY25HrJqFFRr0Kb31UW0UOTH","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":16},"rootRelativePath":"assets/f9071311-4b86-4741-97b4-f79abf441ad3.png"},"e503530c-8ad9-472c-898a-ff13a1953e4d":{"name":"Fist down","sourceUrl":null,"frameSize":{"x":15,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q_bhQuWJYjQhc5yyJ1Ge22wkornKBHda","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":16},"rootRelativePath":"assets/e503530c-8ad9-472c-898a-ff13a1953e4d.png"},"0d7cdaf2-ada7-460e-b2ac-a1d96cc20a58":{"name":"Fist left","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"XF4IhyI1WmZBrHpGI0d238OJIFIywJYQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/0d7cdaf2-ada7-460e-b2ac-a1d96cc20a58.png"},"ca7706a4-b4e9-4861-8b61-9acf209ae70a":{"name":"Fist right","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"P1bIHcH1aNmD2yJFsudN_vfrQGeFNyge","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/ca7706a4-b4e9-4861-8b61-9acf209ae70a.png"},"c19604ad-43f1-4bd3-b156-b0b077087b96":{"name":"player up","sourceUrl":null,"frameSize":{"x":23,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"Vc_2HH2E6gDwLHdUbFpqsitoC5X4eEI7","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":56},"rootRelativePath":"assets/c19604ad-43f1-4bd3-b156-b0b077087b96.png"},"bedc1ff4-ef32-4332-9eb8-58d99a1bcd1c":{"name":"player up shotgun","sourceUrl":null,"frameSize":{"x":30,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"nxYNrp33oxoDy47N2NjFLxrOu2ZAFZJM","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":56},"rootRelativePath":"assets/bedc1ff4-ef32-4332-9eb8-58d99a1bcd1c.png"},"c02002c4-5500-4cb2-91ec-c7147b61b3c9":{"name":"player right shotgun","sourceUrl":null,"frameSize":{"x":36,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"eyyqbsC5WUJpYtpnA0Dv3wGPpoEITVpv","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":56},"rootRelativePath":"assets/c02002c4-5500-4cb2-91ec-c7147b61b3c9.png"},"c1525b15-2b6d-4731-84a5-1e94d71769f0":{"name":"player right","sourceUrl":null,"frameSize":{"x":23,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"P5USzUaD87sFFooGUPPLiOAzVQK9X7WW","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":56},"rootRelativePath":"assets/c1525b15-2b6d-4731-84a5-1e94d71769f0.png"},"393219fc-96ec-44b4-899d-cc99410b90da":{"name":"player down shotgun","sourceUrl":null,"frameSize":{"x":30,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"hL6Ej5vTsIOwgHWXXg95_lgRprONNRrn","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":56},"rootRelativePath":"assets/393219fc-96ec-44b4-899d-cc99410b90da.png"},"8e578787-17c2-498d-a60d-d7ca42429074":{"name":"player down","sourceUrl":null,"frameSize":{"x":23,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"S9UBTQ7J3ZdfmccN9jpJHCNObb5teHr3","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":56},"rootRelativePath":"assets/8e578787-17c2-498d-a60d-d7ca42429074.png"},"875ccfc3-fa0a-4350-b3d5-e69219d90dd3":{"name":"player left","sourceUrl":null,"frameSize":{"x":23,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"P9XpznMZOC8Fr_J07twXbOQuJptlatVJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":56},"rootRelativePath":"assets/875ccfc3-fa0a-4350-b3d5-e69219d90dd3.png"},"61c8d174-a59d-4b8a-9ac1-98afd57e7056":{"name":"player left shotgun","sourceUrl":null,"frameSize":{"x":35,"y":56},"frameCount":2,"looping":true,"frameDelay":12,"version":"4pgkyCu791Di_aEBP9JKtIdlRTswCBCo","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":56},"rootRelativePath":"assets/61c8d174-a59d-4b8a-9ac1-98afd57e7056.png"},"b16e8078-aac8-481d-b478-324c0e26c044":{"name":"heart4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"lm5maSQm1WLKD3NH72xiZuJiz8QS.lwm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b16e8078-aac8-481d-b478-324c0e26c044.png"},"59fa2baa-0ea0-44c3-a31b-2c89ba34b4fa":{"name":"heart3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"AHFHXEcO1SU.3l4OF41L71xU6gItF.sN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/59fa2baa-0ea0-44c3-a31b-2c89ba34b4fa.png"},"e670b3d8-17a8-4f35-abe2-e53824515554":{"name":"heart2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"3fXU88T9WYRo7yT5PkB5m5nzY.4dBSTB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e670b3d8-17a8-4f35-abe2-e53824515554.png"},"9ca2cb73-f353-48dd-863f-6220c3548844":{"name":"heart1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"j_TTC0rmqHpnU82jne9pqAI97X3saoIu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9ca2cb73-f353-48dd-863f-6220c3548844.png"},"abbc64f3-47d1-420c-a7fd-ecacabf0d964":{"name":"heart.5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"JLB39Ns1Nm82QMkHrGHIywhGsWgLtg.d","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/abbc64f3-47d1-420c-a7fd-ecacabf0d964.png"},"8e05c415-5a24-4d95-a348-2327d358f6f3":{"name":"dead","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"xKlJrmEICkFhOrjZsQewb.Ul60mC8199","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8e05c415-5a24-4d95-a348-2327d358f6f3.png"},"822a5083-8a23-439c-be97-6e5317eaab6c":{"name":"shotgun bullet left","sourceUrl":null,"frameSize":{"x":200,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"xZMdH7BtaSahfi1blWiXJ4nswLbirptm","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":23},"rootRelativePath":"assets/822a5083-8a23-439c-be97-6e5317eaab6c.png"},"0c20b90b-7aa4-43a9-a03c-d0722b905a1a":{"name":"shotgun bullet right","sourceUrl":null,"frameSize":{"x":200,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"1xzLPM2UUpts0hQN9moVCjd69pyAWPy8","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":23},"rootRelativePath":"assets/0c20b90b-7aa4-43a9-a03c-d0722b905a1a.png"},"2f419cc1-e894-4a97-a94c-b20f1ee92fd5":{"name":"shotgun bullet down","sourceUrl":null,"frameSize":{"x":23,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"7tWXW4kR4jSPflg6MVZRJ4Fvo5KByEMj","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":200},"rootRelativePath":"assets/2f419cc1-e894-4a97-a94c-b20f1ee92fd5.png"},"fb696442-c495-4f89-b910-fddd011e2548":{"name":"shotgun bullet up","sourceUrl":null,"frameSize":{"x":23,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"PHK_EO9EC4eON2GWrvBIRupVExVxc2Mj","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":200},"rootRelativePath":"assets/fb696442-c495-4f89-b910-fddd011e2548.png"},"c095e84a-ee07-4b98-824b-6a7e69bdfeeb":{"name":"shotgun with bullets","sourceUrl":null,"frameSize":{"x":37,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"UGxr_QPMRMmajfJTuz_Hp0UoSxmRpbg9","loadedFromSource":true,"saved":true,"sourceSize":{"x":37,"y":11},"rootRelativePath":"assets/c095e84a-ee07-4b98-824b-6a7e69bdfeeb.png"},"729f612a-1723-409e-bdd7-6da3b012ba23":{"name":"shotgun example ","sourceUrl":null,"frameSize":{"x":37,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"jCJfof6zepBf2I7NhcplKbSBYJE.4udt","loadedFromSource":true,"saved":true,"sourceSize":{"x":37,"y":11},"rootRelativePath":"assets/729f612a-1723-409e-bdd7-6da3b012ba23.png"},"889e76a7-fa7f-4f21-8b98-5d6a29540b90":{"name":"option button","sourceUrl":null,"frameSize":{"x":77,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"tt8lC92aXdY0oFXOeq00UiP9tB3l2evo","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":27},"rootRelativePath":"assets/889e76a7-fa7f-4f21-8b98-5d6a29540b90.png"},"defbabbe-5650-4e82-9211-f1191e7fc4d8":{"name":"start button","sourceUrl":null,"frameSize":{"x":77,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"yi.EJPCZjgKcnJksUX7rRU.WRTgCJ7Jn","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":27},"rootRelativePath":"assets/defbabbe-5650-4e82-9211-f1191e7fc4d8.png"},"ca5a7d89-cdec-4fa8-aed3-6d85b280bdad":{"name":"parasite menu thing","sourceUrl":null,"frameSize":{"x":320,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZLTFV.tmV3ZWTvxUMu4HQyUR.F1GYfQJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":48},"rootRelativePath":"assets/ca5a7d89-cdec-4fa8-aed3-6d85b280bdad.png"},"2170d631-f2ff-4c08-af54-b11df80e7b6b":{"name":"kills icon","sourceUrl":null,"frameSize":{"x":47,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"j3gvTa9a6C3hyS_ySK1uHDcuHpzkGorD","loadedFromSource":true,"saved":true,"sourceSize":{"x":47,"y":45},"rootRelativePath":"assets/2170d631-f2ff-4c08-af54-b11df80e7b6b.png"},"e6ab9922-b53d-4e3a-b365-3e3cc0cde453":{"name":"ammo icon","sourceUrl":null,"frameSize":{"x":29,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"yUwPlDqEJYBEgI5XlNnnABwG96Gst5A1","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":23},"rootRelativePath":"assets/e6ab9922-b53d-4e3a-b365-3e3cc0cde453.png"},"13865b62-4aa2-4241-9266-7cd8fc801587":{"name":"arrow keys button","sourceUrl":null,"frameSize":{"x":29,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"28wHiq0N9BiHz1QxcQQAxpXiM7Ddukt1","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":29},"rootRelativePath":"assets/13865b62-4aa2-4241-9266-7cd8fc801587.png"},"69833682-4478-43f8-8175-b78d16ecce90":{"name":"arrow keys button highlighted","sourceUrl":null,"frameSize":{"x":29,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"hl6vThumsbyXi2tHyuVgeydeJAATzPVd","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":29},"rootRelativePath":"assets/69833682-4478-43f8-8175-b78d16ecce90.png"},"51c6ffb3-020c-4ed5-9be9-8a4b38db7b73":{"name":"wasd key button","sourceUrl":null,"frameSize":{"x":29,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"iMPYcQeg1qxQ2mJ00pEHAtdlTJSjABXo","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":29},"rootRelativePath":"assets/51c6ffb3-020c-4ed5-9be9-8a4b38db7b73.png"},"8c9ebd71-0c61-47df-a1bd-7123b56605f2":{"name":"wasd key button highlighted","sourceUrl":null,"frameSize":{"x":29,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRi2Z7cObVlkOZTxTrgiUtWajmt4Oj.b","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":29},"rootRelativePath":"assets/8c9ebd71-0c61-47df-a1bd-7123b56605f2.png"},"75feb228-37ca-4639-9c3d-93a048d090f7":{"name":"arrow or wasd option","sourceUrl":null,"frameSize":{"x":61,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"ca2Qd1my6kZowL_WJ55a7DvwTLm6jYIc","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":56},"rootRelativePath":"assets/75feb228-37ca-4639-9c3d-93a048d090f7.png"},"e3b29c47-0a4a-4868-ae3f-2ff7b6532f1d":{"name":"escape","sourceUrl":null,"frameSize":{"x":27,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"dCmppSWPNZmAZBHVWGQNVn0VXghl5pWR","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":27},"rootRelativePath":"assets/e3b29c47-0a4a-4868-ae3f-2ff7b6532f1d.png"},"38289ba1-9d5b-4d97-88a0-865d9d5ca4ed":{"name":"battleGround","sourceUrl":"assets/v3/animations/soUL_QYf-GB6COfxI166hbMCrXgdkpScTMsAQ8FbnRw/38289ba1-9d5b-4d97-88a0-865d9d5ca4ed.png","frameSize":{"x":1000,"y":1000},"frameCount":1,"looping":true,"frameDelay":4,"version":"mDUx5s0RmXqbx8t76LidH8hJOJU0wyx3","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1000},"rootRelativePath":"assets/v3/animations/soUL_QYf-GB6COfxI166hbMCrXgdkpScTMsAQ8FbnRw/38289ba1-9d5b-4d97-88a0-865d9d5ca4ed.png"},"c11a61f7-f257-481f-bc87-472bb8b57d43":{"name":"ROUND","sourceUrl":null,"frameSize":{"x":182,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"3Oxb3A2lFZq_u0qIyaUE4BEU1do6k7la","loadedFromSource":true,"saved":true,"sourceSize":{"x":182,"y":73},"rootRelativePath":"assets/c11a61f7-f257-481f-bc87-472bb8b57d43.png"},"30adcfe9-2540-4222-b581-b99a032eb6ae":{"name":"helicopter escape","sourceUrl":null,"frameSize":{"x":69,"y":64},"frameCount":4,"looping":true,"frameDelay":1,"version":"w_fm.1kdk.DwwiE_kvOmQ_DJzTR6vEV.","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":128},"rootRelativePath":"assets/30adcfe9-2540-4222-b581-b99a032eb6ae.png"},"f338a901-06ea-487f-95d3-7c01cd5794c5":{"name":"Again button","sourceUrl":null,"frameSize":{"x":48,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"hAahTgKTmbSmmfYgyOoHcQj.PWTc8ZyC","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":18},"rootRelativePath":"assets/f338a901-06ea-487f-95d3-7c01cd5794c5.png"},"25399144-f4ba-44e6-a788-247d5989fada":{"name":"endless button","sourceUrl":null,"frameSize":{"x":70,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"mC4.MBkf8jA.agiLZagBQtD9mrKzBZgv","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":40},"rootRelativePath":"assets/25399144-f4ba-44e6-a788-247d5989fada.png"},"ad9291bd-e3e9-411c-9b47-0de7b471cc15":{"name":"shotgun has spawned thing","sourceUrl":null,"frameSize":{"x":53,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"CnyfLETCHcQZxlYhSBu2lJKstbIvtqBX","loadedFromSource":true,"saved":true,"sourceSize":{"x":53,"y":50},"rootRelativePath":"assets/ad9291bd-e3e9-411c-9b47-0de7b471cc15.png"},"722e604e-7545-4ee4-aaba-ab5faf3907e3":{"name":"playerhealthitem","sourceUrl":null,"frameSize":{"x":37,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"eFzMcr7_6CyA6w2zv0wCjDCbOecLWhwI","loadedFromSource":true,"saved":true,"sourceSize":{"x":37,"y":40},"rootRelativePath":"assets/722e604e-7545-4ee4-aaba-ab5faf3907e3.png"},"4b17986c-9536-459f-a5e6-2dfe25ceb108":{"name":"Bow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NibVdbNICa0CjGSlqs7wsy8SDRyetM2e","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4b17986c-9536-459f-a5e6-2dfe25ceb108.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Zombie apocolipse type game
function draw() {
  if(work==1){
    if(keyWentDown("p")){
      work=4;
    }
    background("blue");
    escape1();
    playerFist();
    playerMove();
    playerLife();
    playerWeapon();
    itemPickup();
    itemSpawn();
    //parasiteCollide();
    speedUp();
    swap();
    playerlifegain();
      for(var j=0;j<parasitegroup.length;j++){
        parasiteMove(parasitegroup[j]);
      }                                             //parasites movement
      if(parasitegroup.length<1){
        level+=1;                             //adds one to level
        spawn=level*level+1;                  //spawns level times level +1
        parasiteSpawn();              
        
      }
      drawSprites();
      playerAmmunition();
      deathCount();
  }                                           //draws sprites and caculats amunition and kills
  if(work==-1){
    menu2();
  }
  if(work===0){
    menu();
  }
  if(work==-2){
    endlessss();
  }
  if(work==3){
    menu3();
  }
  if(work==4){
    pause();
  }
}
                                              //decieds what scene to go to and when
function endlessss(){
  background("blue");
    escape1();
    playerFist();
    playerMove();
    playerLife();
    playerWeapon();
    itemPickup();
    itemSpawn();
    //parasiteCollide();
    speedUp();
    swap();
    playerlifegain();
      for(var jjj=0;jjj<parasitegroup.length;jjj++){
        parasiteMove(parasitegroup[jjj]);
      }
      if(parasitegroup.length<1){
        level+=1;
        spawn=level*level+1;
        parasiteSpawn();
      }
      drawSprites();
      playerAmmunition();
      deathCount();
}                                                       // a scene with no end

function menu(){
  background("black");
  spawned.visible=false;
  ground.visible=false;
  health.visible=false;
  parasitegroup.visible=false;
  player.visible=false;
  parasite.visible=false;
  killerIcon.visible=false;
  ammo.visible=false;
  roundWord.visible=false;
  parasiteMenu.visible=true;
  healthitem.visible=false;
  cool.visible=true;
  cool2.visible=true;
  helicopter.visible=false;                             //tells what to be visible and not
  start.visible=true;
  again.x=800;
  start.x=200;
  option.x=200;
  textFont(20);
  textAlign(CENTER);
  text("wasd is moving, f is switch weapons,p is to pause, and k is to unpause",200,290);
  for(var z=0;z<parasitegroup.length;z++){
    parasitegroup[z].velocityX=0;
    parasitegroup[z].velocityY=0;
    ground.velocityX=0;
    ground.velocityY=0;
    parasitegroup[z].visible=false;
    parasite.destroy(z,1);
    parasitegroup.splice(z,1);
  }
  drawSprites();
  if(mousePressedOver(start)){
    player.visible=true;
    parasitegroup.visible=true;                     
    parasite.visible=true;
    health.visible=true;
    ground.visible=true;
    killerIcon.visible=true;
    ammo.visible=true;
    healthitem.visible=true;
    roundWord.visible=true;
    helicopter.visible=true;
    option.x+=50000;
    start.x+=500000;
    work=1;
    time=World.seconds;
    cool.visible=false;
    cool2.visible=false;
    parasiteMenu.visible=false;
    endless.visible=false;
    ground.x=200;
    ground.y=200;
    Round=0;
    level=0;
    speed=2.3;
    kills=0;
    a=0;
    shotgun.destroy();
    fakekill=0;
    fakekill2=0;
    fakekill3=0;
    health.setAnimation("heart4");
    H=4;
    r=0;
    l=0;
    u=0;
    d=1;
}                                                               //setting things to original state
if(mousePressedOver(option)){
  work=3;
}
  if(mousePressedOver(endless)){
    work=-2;
    player.visible=true;
    parasitegroup.visible=true;
    parasite.visible=true;
    health.visible=true;
    ground.visible=true;
    killerIcon.visible=true;
    ammo.visible=true;
    roundWord.visible=true;
    helicopter.visible=true;
    healthitem.visible=true;
    option.x+=50000;
    start.x+=500000;
    time=World.seconds;
    cool.visible=false;
    cool2.visible=false;
    parasiteMenu.visible=false;
    endless.visible=false;
    ground.x=200;
    ground.y=200;
    Round=0;
    speed=2.3;
    kills=0;
    a=0;
    fakekill=0;
    fakekill2=0;
    fakekill3=0;
    health.setAnimation("heart4");
    H=4;
    r=0;
    l=0;
    u=0;
    d=1;
  }
}

function menu2(){
  background("black");
  ground.visible=false;
  health.visible=false;
  parasitegroup.visible=false;
  player.visible=false;
  parasite.visible=false;
  killerIcon.visible=false;
  ammo.visible=false;
  roundWord.visible=false;
  helicopter.visible=false;
  healthitem.visible=false;
  textSize(20);
  textAlign("center");
  text("NICE JOB..... SWEAT",200,100);
  again.x=200;
  drawSprites();
  if(mousePressedOver(again)){
    work=0;
  }
  for(var zz=0;zz<parasitegroup.length;zz++){
    parasitegroup[zz].velocityX=0;
    parasitegroup[zz].velocityY=0;
    ground.velocityX=0;
    ground.velocityY=0;
  }
  Round=0;
    speed=2.3;
    kills=0;
    a=0;
    fakekill=0;
    fakekill2=0;
    fakekill3=0;
    health.setAnimation("heart4");
    H=4;
    r=0;
    l=0;
    u=0;
    d=1;
}

function menu3(){
  background("black");
    cool.visible=false;
    cool2.visible=false;
    parasiteMenu.visible=false;
    endless.visible=false;
    start.x+=500;
    start.visible=false;
    cool.visible=false;
    cool2.visible=false;
    parasiteMenu.visible=false;
    endless.visible=false;
    healthitem.visible=true;
    option.x+=500;
    arrowKeys.x=150;
    arrowKeys.y=200;
    arrowKeys.scale=1.4;
    wasdKeys.x=250;
    wasdKeys.y=200;
    wasdKeys.scale=1.4;
    arrowOrWASD.x=200;
    arrowOrWASD.y=60;
    esc.y=20;
    esc.x=20;
    if(mousePressedOver(arrowKeys)){
      wasd=0;
      arrows=1;
      wasdKeys.setAnimation("wasd key button");
      arrowKeys.setAnimation("arrow keys button highlighted");
    }else if(mousePressedOver(wasdKeys)){
      wasd=1;
      arrows=0;
      wasdKeys.setAnimation("wasd key button highlighted");
      arrowKeys.setAnimation("arrow keys button");
  }
  if(mousePressedOver(esc)){
      arrowKeys.x+=500;
      esc.visible=false;
      arrowOrWASD.visible=false;
      wasdKeys.x+=500;
      work=0;
    }
  drawSprites();
}

function deathCount(){
  textSize(25);
  textAlign("center");
  fill("black");
  text(kills,390,30);
  textSize();
  textAlign("center");
  fill("red");
  text(Round,220,25);
}                                           //counts kills and shows them

function escape1(){
  if(Round==5&&work>-1){
    helicopterWork=1;
    speed=5.5;
    spawn+=20;
  }                                                     //sees when to spawn the helicopter
  if(helicopterWork==1&&helicopterWork2==1){                                              //spawns the helicopter
        helicopter=createSprite(randomNumber(ground.x+300,ground.x-300),randomNumber(ground.y+300,ground.y-300));
        helicopter.setAnimation("helicopter escape");
        helicopter.depth=2;
        helicopterWork2=0;
        playSound("assets/category_retro/retro_game_unlock_3.mp3", false);
  }
  if(ground.velocityY==5){
      helicopter.velocityY=5;
    }else if(ground.velocityY==-5){
      helicopter.velocityY=-5;
    }else{
      helicopter.velocityY=0;
    }
    if(ground.velocityX==5){
      helicopter.velocityX=5;
    }else if(ground.velocityX==-5){
      helicopter.velocityX=-5;
  }else{
    helicopter.velocityX=0;
  }                                               //moves with the ground
  if(player.isTouching(helicopter)){
    work=-1;
  } 
}

function pause(){
  fist.velocityX=0;
  fist.velocityY=0;
  textSize(100);
  fill("black");
  textAlign("center");
  text("Pause",200,200);
  for(var z=0;z<parasitegroup.length;z++){
    parasitegroup[z].velocityX=0;
    parasitegroup[z].velocityY=0;
    ground.velocityX=0;
    ground.velocityY=0;
  }
  if(keyWentDown("k")){
    work=1;
    fist.velocityX=fistx;
    fist.velocityY=fisty;
    shotgun.velocityX=shotguny;
    shotgun.velocityY=shotgunx;
  }
}                                                   //pause and unpause

function playerAmmunition(){
  textSize(25);
  textAlign("center");
  fill("black");
  text(a,390,390);
}                                                   //counts ammo and shows it

function playerFist(){
    if(keyWentDown("space")&&fistUse==1){
      fist.x=player.x;
      fist.y=player.y;
      playSound("assets/category_swish/deep_fist_punch_1.mp3", false);
      if(u===1){
        fist.setAnimation("Fist up");
        fist.velocityY=-8;
        fist.velocityX=0;
      }else if(l===1){
        fist.setAnimation("Fist left");
        fist.velocityX=-8;
        fist.velocityY=0;
      } 
      if(r===1){
        fist.setAnimation("Fist right");
        fist.velocityX=8;
        fist.velocityY=0;
      }else if(d===1){
        fist.setAnimation("Fist down");
        fist.velocityY=8;
        fist.velocityX=0;
      }
    }                                               //detects which way the player is facing and shoots a fist that direction
    fisty=fist.velocityY;
    fistx=fist.velocityX;
    if(ground.velocityY==5){
      fist.y+=5;
    }
    else if(ground.velocityY==-5){
      fist.y-=5;
    }
    if(ground.velocityX==5){
      fist.x+=5;
    }
    else if(ground.velocityX==-5){
      fist.x-=5;
  }                                                 //moves with ground
  for(var m=0;m<parasitegroup.length;m++){
    if(parasitegroup[m].isTouching(fist)){
      random1=randomNumber(1,10);
      if(random1>=5){
        parasitegroup[m].destroy();
        parasitegroup.splice(m,1);
        kills+=1;
        fakekill+=1;
        fakekill2+=1;
        fakekill3+=1;
      }
        fist.x=1200;
        fist.y=1200;
  }                                               //detects if the fist is touching parasite and if it hits parasite telaport it away
}
}

function playerMove() {
if(wasd==1){
  if(fistUse==1){
    fisttt.visible=true;
    shotgunnn.visible=false;
    shotgunUse=0;
  if(keyDown("w")&&ground.y<685){
      player.setAnimation("player up");
      ground.velocityY=5;
      u=1;
      d=0;
      l=0;
      r=0;
  }else if(keyDown("s")&&ground.y>-285){
      player.setAnimation("player down");
      ground.velocityY=-5;
      d=1;
      u=0;
      l=0;
      r=0;
  }else{
    ground.velocityY=0;
  }
  if(keyDown("a")&&ground.x<685){
      player.setAnimation("player left");
      ground.velocityX=5;
      l=1;
      d=0;
      u=0;
      r=0;
  }else if(keyDown("d")&&ground.x>-285){
      player.setAnimation("player right");
      ground.velocityX=-5;
      r=1;
      l=0;
      u=0;
      d=0;
  }else{
    ground.velocityX=0;
  }                                                 //moves the ground and detects which way the player is facing
  }
  if(a>0){
    if(shotgunUse==1){
      shotgunUse=1;
      fistUse=0;
      fisttt.visible=false;
      shotgunnn.visible=true;
    if(keyDown("w")&&ground.y<685){
    player.setAnimation("player up shotgun");
    ground.velocityY=5;
    u=1;
    d=0;
    l=0;
    r=0;
  }else if(keyDown("s")&&ground.y>-285){
    player.setAnimation("player down shotgun");
    ground.velocityY=-5;
    d=1;
    u=0;
    l=0;
    r=0;
  }else{
    ground.velocityY=0;
  }
  if(keyDown("a")&&ground.x<685){
    player.setAnimation("player left shotgun");
    ground.velocityX=5;
    l=1;
    d=0;
    u=0;
    r=0;
  }else if(keyDown("d")&&ground.x>-285){
    player.setAnimation("player right shotgun");
    ground.velocityX=-5;
    r=1;
    l=0;
    u=0;
    d=0;
  }else{
    ground.velocityX=0;
  }                                                   // the same thing as above but with shotgun animation
  }
  }
}
if(arrows==1){
if(fistUse==1){
    fisttt.visible=true;
    shotgunnn.visible=false;
    shotgunUse=0;
  if(keyDown("UP_ARROW")&&ground.y<685){
      player.setAnimation("player up");
      ground.velocityY=5;
      u=1;
      d=0;
      l=0;
      r=0;
  }else if(keyDown("DOWN_ARROW")&&ground.y>-285){
      player.setAnimation("player down");
      ground.velocityY=-5;
      d=1;
      u=0;
      l=0;
      r=0;
  }else{
    ground.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")&&ground.x<685){
      player.setAnimation("player left");
      ground.velocityX=5;
      l=1;
      d=0;
      u=0;
      r=0;
  }else if(keyDown("RIGHT_ARROW")&&ground.x>-285){
      player.setAnimation("player right");
      ground.velocityX=-5;
      r=1;
      l=0;
      u=0;
      d=0;
  }else{
    ground.velocityX=0;
  }                                                 //moves the ground and detects which way the player is facing
  }
  if(a>0){
    if(shotgunUse==1){
      shotgunUse=1;
      fistUse=0;
      fisttt.visible=false;
      shotgunnn.visible=true;
    if(keyDown("UP_ARROW")&&ground.y<685){
    player.setAnimation("player up shotgun");
    ground.velocityY=5;
    u=1;
    d=0;
    l=0;
    r=0;
  }else if(keyDown("DOWN_ARROW")&&ground.y>-285){
    player.setAnimation("player down shotgun");
    ground.velocityY=-5;
    d=1;
    u=0;
    l=0;
    r=0;
  }else{
    ground.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")&&ground.x<685){
    player.setAnimation("player left shotgun");
    ground.velocityX=5;
    l=1;
    d=0;
    u=0;
    r=0;
  }else if(keyDown("RIGHT_ARROW")&&ground.x>-285){
    player.setAnimation("player right shotgun");
    ground.velocityX=-5;
    r=1;
    l=0;
    u=0;
    d=0;
  }else{
    ground.velocityX=0;
  }                                                   // the same thing as above but with shotgun animation
  }
  }
}
}

function playerLife(){
  for(var k=0;k<parasitegroup.length;k++){
  if(parasitegroup[k].isTouching(player)){
          H-=1;
          kills+=1;
          fakekill+=1;
          fakekill2+=1;
          fakekill3+=1;
        parasitegroup[k].destroy();
        parasitegroup.splice(k,1);
          playSound("assets/category_retro/retro_game_enemy_spawn_10.mp3", false);
  }
    if(H==3){
      health.setAnimation("heart3");
    }else if(H==2){
      health.setAnimation("heart2");
    }else if(H==1){
      health.setAnimation("heart1");
    }else if(H==0){
      health.setAnimation("heart.5");
  }                                               //detects what your health is at and sets the animation accordingly
}
  if(H<0){
    health.setAnimation("dead");
    work=0;
    player.visible=false;
  }                                                     //kills you if you run out of hearts
}

function playerlifegain(){
  if(fakekill3>=60&&H<=3){
    fakekill3=0;
    healthitem=createSprite(randomNumber(ground.x+300,ground.x-300),randomNumber(ground.y+300,ground.y-300));
    healthitem.setAnimation("playerhealthitem");
    healthitem.visible=true;
  }
  if(ground.velocityY==5){
      healthitem.velocityY=5;
    }else if(ground.velocityY==-5){
      healthitem.velocityY=-5;
    }else{
      healthitem.velocityY=0;
    }
    if(ground.velocityX==5){
      healthitem.velocityX=5;
    }else if(ground.velocityX==-5){
      healthitem.velocityX=-5;
  }else{
    healthitem.velocityX=0;
  }
  if(player.isTouching(healthitem)){
    healthitem.x+=20000;
    healthitem.destroy();
    H+=1;
  }
}                                                         //makes a health item and detects if you are touching it to regain health

function playerWeapon(){
  if(a>0){
    if(keyWentDown("space")&&shotgunUse==1){
      a-=1;
      playSound("assets/category_explosion/8bit_explosion.mp3", false);
      if(u===1){
        bullet.setAnimation("shotgun bullet up");
        bullet.x=player.x;
        bullet.y=player.y;
        bullet.velocityY=-75  ;
        bullet.y+=35;
        bullet.velocityX=0;
      }else if(l===1){
        bullet.setAnimation("shotgun bullet left");
        bullet.x=player.x;
        bullet.y=player.y;
        bullet.velocityX=-75;
        bullet.x+=35;
        bullet.velocityY=0;
      } 
      if(r===1){
        bullet.setAnimation("shotgun bullet right");
        bullet.x=player.x;
        bullet.y=player.y;
        bullet.velocityX=75;
        bullet.x-=35;
        bullet.velocityY=0;
      }else if(d===1){
        bullet.setAnimation("shotgun bullet down");
        bullet.x=player.x;
        bullet.y=player.y;
        bullet.velocityY=75;
        bullet.y-=35;
        bullet.velocityX=0;
      }
    }                                             //if you have more than 0 ammo and detects which way you are facing to shoot that direction
  }
  for(var y=0;y<parasitegroup.length;y++){
    if(parasitegroup[y].isTouching(bullet)){
          parasitegroup[y].destroy();
          parasitegroup.splice(y,1);
          bullet.x=1200;
          bullet.y=1200;
          kills+=1;
          fakekill+=1;
          fakekill2+=1;
          fakekill3+=1;
      }
  }
  shotguny=shotgun.velocityY;
    if(ground.velocityY==5){
      shotgun.velocityY=5;
    }else if(ground.velocityY==-5){
      shotgun.velocityY=-5;
    }else{
      shotgun.velocityY=0;
    }
    if(ground.velocityX==5){
      shotgun.velocityX=5;
    }else if(ground.velocityX==-5){
      shotgun.velocityX=-5;
  }else{
    shotgun.velocityX=0;
  }
}

function itemPickup(){
  if(guns.length>0&&player.isTouching(guns[0])){
    for(var g=0;g<guns.length;g++){
      shotgun.visible=false;
      shotgun.destroy();
      guns.splice(g,1);
      a+=30;
      shotgunUse=1;
      fistUse=0;
      shotgunnn.visible=true;
      fisttt.visible=false;
      playSound("assets/category_collect/retro_game_health_pickup_2.mp3", false);
    }                                             //if you are touching the shotgun on the ground destroy the shotgun and give you 30 ammo
  }
}

function itemSpawn(){
  if(level===3&&guns.length<1&&a==0){
  shotgun=createSprite(randomNumber(ground.x+300,ground.x-300),randomNumber(ground.y+300,ground.y-300));
  shotgun.setAnimation("shotgun with bullets");
  shotgun.visible=true;
  spawned.x=265;
  spawned.y=25;
  spawned.visible=true;
  shotgun.depth=2;
  guns.push(shotgun);
  playSound("assets/category_retro/retro_game_enemy_spawn_6.mp3", false);
  }                                                 //spawns the first shotgun
   if(fakekill2>=50&&guns.length<1){
     shotgun=createSprite(randomNumber(ground.x+300,ground.x-300),randomNumber(ground.y+300,ground.y-300));
  shotgun.setAnimation("shotgun with bullets");
  shotgun.visible=true;
  spawned.x=265;
  spawned.y=25;
  spawned.visible=true;
  shotgun.depth=2;
   guns.push(shotgun);
   fakekill2=0;
   playSound("assets/category_retro/retro_game_enemy_spawn_6.mp3", false);
   }                                    //spawns the next shotguns if you have a c
if(shotgun.visible==false){
  spawned.visible=false;
  }
}

/*function parasiteCollide(){
  for(var io=0;io<parasitegroup.length;io++){
    //var par1=parasitegroup[io];
  for(var ee=0;ee<parasitegroup.length;ee++){
    //var par2=parasitegroup[ee];
    parasitegroup[io].collide(parasitegroup[ee]);
  }
  }
}
*/

function parasiteMove(par){
  if(par.y<player.y){
    if(par.x<player.x){
      par.velocityY=speed*Math.sin(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityY;
      par.velocityX=speed*Math.cos(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityX;
    }else{
       par.velocityY=-1*speed*Math.sin(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityY;
      par.velocityX=-1*speed*Math.cos(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityX;
    }
  }else if(par.y>player.y){
 if(par.x<player.x){
      par.velocityY=speed*Math.sin(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityY;
      par.velocityX=speed*Math.cos(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityX;
    }else{
       par.velocityY=-1*speed*Math.sin(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityY;
      par.velocityX=-1*speed*Math.cos(Math.atan((-par.y+player.y)/(-par.x+player.x)))+ground.velocityX;
    }
}                                                                                                       // movement code detects distance between the parasite and player and takes the fastest way
}

function parasiteSpawn(){
  for(var i=0;i<spawn;i++){
    var rand = randomNumber(1,4);
    if(rand==1){
      parasite=createSprite(randomNumber(0,400),randomNumber(-40,-400));
    parasite.setAnimation("ParasiteWalk");
    parasite.scale=0.65;
    parasite.depth=5;    
    parasitegroup.push(parasite);
    
    }
    if(rand==2){
      parasite=createSprite(randomNumber(0,400),randomNumber(440,800));
    parasite.setAnimation("ParasiteWalk");
    parasite.scale=0.65;
    parasite.depth=5;    
    parasitegroup.push(parasite);
    
    }
    if(rand==3){
      parasite=createSprite(randomNumber(-40,-400),randomNumber(0,400));
    parasite.setAnimation("ParasiteWalk");
    parasite.scale=0.65;
    parasite.depth=5;    
    parasitegroup.push(parasite);
    
    }
    if(rand==4){
      parasite=createSprite(randomNumber(440,800),randomNumber(0,400));
    parasite.setAnimation("ParasiteWalk");
    parasite.scale=0.65;
    parasite.depth=5;    
    parasitegroup.push(parasite);
    
    }
    }
}                                                           //spawns parasites on 1 of 4 sides of the screen

function speedUp(){
  if(spawn==17){
    level=0;
    spawn=0;
    }
  if(fakekill==34){
      speed+=0.5;
      fakekill=0;
      Round+=1;
  }
}                                         //speeds the parasites up every round

function swap(){
  if(a>0){
    if(keyWentDown("f")){
      playSound("assets/default.mp3", false);
      if(shotgunUse==1){
        fistUse=1;
        shotgunUse=0;
        shotgunnn.visible=true;
        fisttt.visible=false;
        
      }else if(fistUse==1){
        shotgunUse=1;
        fistUse=0;
        shotgunnn.visible=false;
        fisttt.visible=true;
      }
    }
  }
  if(a==0){
    fistUse=1;
    shotgunUse=0;
  }                                                 //if you press f when gun is active you switch to fist and so fourth
}

var ground=createSprite(200,200);
  ground.depth=1;
  ground.setAnimation("battleGround");
  
var player=createSprite(200,200);
  player.setAnimation("player down");
  player.depth=10;
  player.scale=0.65;
  
var parasite=createSprite(randomNumber(20,380),20);
  parasite.setAnimation("ParasiteWalk");
  parasite.depth=5;
  parasite.scale=0.65;
  
var fist=createSprite(1200,1200);

var health=createSprite(43,33);
  health.setAnimation("heart4");
  health.scale=1.2;
  
var bullet=createSprite(1200,1200);
  bullet.setAnimation("shotgun bullet up");
  bullet.scale=0.2;

var option=createSprite(200,250);
  option.setAnimation("option button");
  
var start=createSprite(200,200);
start.setAnimation("start button");

var shotgun=createSprite(500,500);
  shotgun.setAnimation("shotgun with bullets");
  shotgun.depth=2;
  shotgun.destroy();

var cool=createSprite(300,200);
 cool.setAnimation("ParasiteStand");
var cool2=createSprite(100,200);
 cool2.setAnimation("ParasiteStand");
 
var parasiteMenu=createSprite(200,120);
  parasiteMenu.setAnimation("parasite menu thing");
  parasiteMenu.scale=1.3;

var killerIcon=createSprite(340,20);
  killerIcon.setAnimation("kills icon");
  
var ammo=createSprite(360,380);
  ammo.setAnimation("ammo icon");

var arrowKeys=createSprite(500,500);
arrowKeys.setAnimation("arrow keys button");

var wasdKeys=createSprite(500,500);
wasdKeys.setAnimation("wasd key button highlighted");

var arrowOrWASD=createSprite(500,500);
arrowOrWASD.setAnimation("arrow or wasd option");

var esc=createSprite(500,500);
esc.setAnimation("escape");

var roundWord=createSprite(150,20);
roundWord.setAnimation("ROUND");
roundWord.scale=0.55;

var helicopter=createSprite(10000,10000);
helicopter.setAnimation("helicopter escape");
helicopter.destroy();
 
var again=createSprite(200,200);
again.setAnimation("Again button");

var endless=createSprite(200,370);
endless.setAnimation("endless button");

var spawned=createSprite(10000,1000);
spawned.setAnimation("shotgun has spawned thing");

var fisttt=createSprite(10,390);
fisttt.setAnimation("Fist example");

var shotgunnn=createSprite(10,390);
shotgunnn.setAnimation("shotgun example ");
shotgunnn.visible=false;

var healthitem=createSprite(2000,2000);
healthitem.setAnimation("playerhealthitem");
healthitem.destroy();

var parasitegroup = [];
  parasitegroup.push(parasite);
  
var guns=[];

var speed =2.3;
var a=0;
var r=0;
var u=1;
var d=0;
var l=0;
var H=4;
var work=0;
var level =0;
var spawn = 0;
var time=0;
var random1=0;
var kills=0;
var arrows=0;
var wasd=1;
var fakekill=0;
var fakekill2=0;
var fakekill3=0;
var Round=0;
var helicopterWork=0;
var helicopterWork2=1;
var shotgunUse=0;
var fistUse=1;
var fistx=0;
var fisty=0;
var shotguny=0;
var shotgunx=0;
/*option between wasd and arrow keys
var key=0;
var keykey=0;
*/

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

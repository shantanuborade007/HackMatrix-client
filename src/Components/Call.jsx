import React from 'react'
import { ZIM } from "zego-zim-web";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Call = () => {

    // Generate a Token by calling a method.
// @param 1: appID
// @param 2: serverSecret
// @param 3: Room ID
// @param 4: User ID
// @param 5: Username
const userID = "1"; 
const userName = "userName" + userID;
const appID = 1878109634;
const serverSecret = "00c0b67f9e0e06945cc5775b4bd134a0";
const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,null, userID, userName);

const zp = ZegoUIKitPrebuilt.create(TOKEN);
zp.addPlugins({ ZIM });

function invite() {
    const targetUser = {
         userID:'1234',
         userName:'shantanu'
     };
    zp.sendCallInvitation({
     callees: [targetUser],
     callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
     timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
    }).then((res) => {
     console.warn(res);
    })
    .catch((err) => {
    console.warn(err);
    });
 }

  return (
    <div>
         <button onClick={invite}>Call</button>
    </div>
  )
}

export default Call
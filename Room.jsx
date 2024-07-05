import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {

    const { id } = useParams();
    let myMeeting = async (element) => {

        const appID = 1683381033;
        const serverSecret = "fd6c70b4028a154deb1a24d0c2b4953b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            Date.now().toString(),
            id);



        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: `http://localhost:5173/room/${id}`
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,  // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },

        
            showRoomTimer: true,
            showRoomDetailsButton: true,
            enableUserSearch: true,
            showCreateAndCloseButton: true,
            showUserJoinAndLeave:true,
            showUserList:true,
            showAudioVideoSettingsButton:true,
            showMyCameraToggleButton:true,
            showMyMicrophoneToggleButton:true,
            showMySpeakerToggleButton:true,
            showMyScreenToggleButton:true,
            showMyCameraSettingsButton:true,
            showMyMicrophoneSettingsButton:true,
            videoResolutionDefault:true,
            
        });


    };
    return (
        <div
            className="myCallContainer" ref={myMeeting}

        ></div>
    )
}

export default Room
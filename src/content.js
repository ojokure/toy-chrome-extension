/*global chrome*/


import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import "./content.css";

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//        if( request.message === "clicked_browser_action") {
//          toggle();
//        }
//     }
//  );
 
 function toggle(){
     console.log('lol')
    if(app.style.display === "none"){
      app.style.display = "block";
    }else{
      app.style.display = "none";
    }
 }

 class Main extends React.Component {
     render() {
         return (
             <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
               <FrameContextConsumer>
                {
                // Callback is invoked with iframe's window and document instances
                    ({document, window}) => {
                       // Render Children
                       return (
                          <div className={'my-extension'}>
                             <h1>I made a chrome Extension</h1>
                          </div>
                       )
                    }
                 }
                </FrameContextConsumer>
             </Frame>
         )
     }
 }

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
// app.style.display = "none";

ReactDOM.render(<Main />, app);


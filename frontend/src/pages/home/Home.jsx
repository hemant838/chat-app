import React from "react";
import Sidebar from "../../compenents/sidebar/Sidebar";
import MessageContainer from "../../compenents/messages/MessageContainer";

function Home() {
    return (
        <div className="flex sm-h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding bckdrop-filter backdrop-blur-lg bg-opacity-0 border border-blue-500">
            <Sidebar />
            <MessageContainer />
        </div>
    );
}

export default Home;

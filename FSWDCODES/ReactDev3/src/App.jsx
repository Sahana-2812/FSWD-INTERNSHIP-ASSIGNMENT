import React from "react";
import Welcome from "./Welcome";

function App(){
    return(
        <div>
            <h2>Hello,{PaymentResponse.name}</h2>
            <p>your Role is:{PaymentResponse.role}</p>
            
        </div>
    );
}
export default App;
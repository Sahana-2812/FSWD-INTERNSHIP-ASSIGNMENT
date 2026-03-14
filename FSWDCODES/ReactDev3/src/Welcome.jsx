import React from "react";
/*
function Welcome(){
    return(
        <div>
            <h2>Hello,{PaymentResponse.name}</h2>
            <p>your Role is:{PaymentResponse.role}</p>
            
        </div>
    );
}
*/

function Welcome(name,role){
    return(
        <div>
            <h2>Hello{name}</h2>
            <p>Role is:{role}</p>
        </div>
    )
}
export default Welcome;
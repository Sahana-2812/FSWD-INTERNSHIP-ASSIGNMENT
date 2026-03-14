let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    // Access heading
    let heading = document.getElementById("title");

    // Change heading text
    heading.innerText = "Submitted Successfully";

    let btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        alert("Button Clicked!");
    });


    // Change heading style
    heading.style.color = "white";
    heading.style.backgroundColor = "black";

    // Change page background
    document.body.style.backgroundColor = "lightgreen";

    // Create new div
    let newDiv = document.createElement("div");
    newDiv.innerText = "Form Submitted!";
    newDiv.style.marginTop = "10px";
    newDiv.style.padding = "10px";
    newDiv.style.backgroundColor = "yellow";

    document.body.appendChild(newDiv);

});

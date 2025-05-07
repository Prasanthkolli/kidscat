function off_switch(){
    document.getElementById("bulbon").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("status").textContent="Switched Off"
    document.getElementById("off_switch").style.backgroundColor="#cbd2d9"
    document.getElementById("on_switch").style.backgroundColor="green"
}
function on_switch(){
    document.getElementById("bulbon").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("status").textContent="Switched On"
    document.getElementById("off_switch").style.backgroundColor="#cbd2d9"
    document.getElementById("off_switch").style.backgroundColor="red"
    document.getElementById("on_switch").style.backgroundColor="#cbd2d9"
}
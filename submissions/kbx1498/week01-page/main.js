document.getElementById("bt").addEventListener("click", handleOnClick);

function handleOnClick() {
    alert("클릭!");
    console.log("현재시간: ", new Date().toLocaleString());
}
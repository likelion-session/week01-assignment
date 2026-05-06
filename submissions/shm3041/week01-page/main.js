document.getElementById("button1").addEventListener("click", function() {
    alert("버튼이 클릭되었습니다!");

    const now = new Date();
    console.log("현재 시간: ", now.toLocaleString());
});
// Create login Function here.
function Login(){
    var playerName = document.getElementById("playername").value
    localStorage.setItem("playerName", playerName)

    window.location ="gamepage.html"
}
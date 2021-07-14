function add_user(){
    player1_var= document.getElementById("player1_name").value;
    player2_var= document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", player1_var);
    localStorage.setItem("player2_name", player2_var);

    window.location= "game_page.html";
}
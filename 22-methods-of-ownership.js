// Fabián Guzmán Villegas
// Métodos de propiedad

const player = { 
    play : function(id){
        console.log("playing song...", id);
    },
    pause : function(id){
        console.log(`pausing song..., ${id}`);
    },
    eliminated : function(id){
        console.log(`eliminated song..., ${id}`);
    }, // Crear una playlist
    playlist : function(id){
        console.log(`creating playlist..., ${id}`);
    }
 
}

console.log(player);
player.play(217);
player.pause(217);
player.eliminated(217);
player.playlist(217);


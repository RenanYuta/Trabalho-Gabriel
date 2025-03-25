let videos = ['video1', 'video2', 'video3', 'video4', 'video5'];
let videosRemovidos = 0;
let recomendados = videos;

remove()
remove()
remove()
remove()

function remove() {
    if (videosRemovidos == 3) {
        recomendados.shift();
        recomendados.push('video6');
        console.log(recomendados);
    }
    else {
        recomendados.shift();
        videosRemovidos += 1;
        console.log(recomendados);
    }
}

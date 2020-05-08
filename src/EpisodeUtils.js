//return an episode code to represent the given episode, e.g. "S01E03"
function makeEpisodeCode(episode) {
    return `S${pad(episode.season)}E${pad(episode.number)}`;
}

//pad a number out to be an (at least) 2-digit string
//e.g. pad(3) -> "03"
function pad(num) {
    return num.toString().padStart(2, "0");
}

export { makeEpisodeCode };

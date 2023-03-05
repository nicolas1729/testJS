
/**
 * @param minutes
 * @return {HH:mm} heure
 */
function minutesToHeure(minutes){
    heures = Math.floor(minutes/60);
    mins = minutes%60;
    return heures.toString().padStart(2,0)+":"+mins.toString().padStart(2,0);
}

/**
 * @param {HH:mm} heure 
 * @return minutes
 */
function convertHHmmToMinutes(heure){
    let debHM = heure.split(":");
    let minutes = parseInt(debHM[0])*60 + parseInt(debHM[1]);
    return minutes;
}
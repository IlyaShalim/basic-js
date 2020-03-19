module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn_count = 2 ** disksNumber -1;
    let turn_speed_sec = turnsSpeed / 3600;
    let sec = turn_count / turn_speed_sec;
    return {turns: turn_count, seconds: sec};    
}

/**
 * Creates a tower made of asterisk arrays
 */

function buildTower (n) {
    let tower = []
    let floor = "  *  "
    for (i = 0; i < n; i++) {
        tower.push(floor)
        floor = floor.trimEnd() + "**  "
    }
    tower = tower.join('\n')
    console.log(tower)
}

buildTower(6)
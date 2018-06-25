/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
    const result = [[]];
    let coor = [0,0];
    let count = 1;
    let cycle = 0;

    for (let i = 0; i < n; i++) {
        if(result.length < n) {
            result.push([]);
        }
    };

    for (let i = 1; i <= n*n; i++) {

        if (result[coor[0]][coor[1]] === undefined) {
            result[coor[0]][coor[1]] = count;
            count += 1;
        }

        if (coor[0] === cycle && coor[1] < n - (1 + cycle)) {
            coor[1] += 1;
        } else if (coor[0] < n - (1 + cycle) && coor[1] === n - (1 + cycle)) {
            coor[0] += 1;
        } else if (coor[0] === n - (1 + cycle) && coor[1] !== cycle) {
            coor[1] -= 1;
        } else if (coor[0] !== cycle && coor[1] === cycle ) {
            coor[0] -= 1;
            if (coor[0] === cycle && coor[1] === cycle) {
                cycle += 1;
                coor[0] = coor[1] = cycle;
            }
        }

    };
    return result;
}

export default fillSpiralMatrix;

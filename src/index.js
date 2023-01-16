// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix !== undefined) {
        return matrix
            .map((item, index) => (index % 2 ? item.reverse() : item))
            .reduce((arr, item) => {
                arr.push(...item);
                return arr;
            }, []);
    } else return [];
};

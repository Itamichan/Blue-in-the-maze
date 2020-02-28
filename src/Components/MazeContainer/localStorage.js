let completedLevels;

export const readFromLocalStorage = () => {
    completedLevels = localStorage.getItem('completedLevels');
    if (completedLevels === null) {
        return completedLevels = [];
    } else {
        return completedLevels = completedLevels.split(",");
    }
};

export const writeToLocalStorage = (mazeLevel) => {
    if (!completedLevels.includes(mazeLevel)) {
        completedLevels.push(mazeLevel);
    }
    localStorage.setItem('completedLevels', completedLevels.join());
};




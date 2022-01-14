function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.round(((diffInMs % 86400000) % 3600000) / 60000);
    // return diffInMs / (1000 * 60 * 60 * 24);
}

export default getDifferenceInDays;

const sorting = (category, ascOrDesc) => {
    category.forEach(cat => {

        if (ascOrDesc == 'A') {
            cat.items.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            });
        }
        // here sort desending
        if (ascOrDesc == 'D') {
            cat.items.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            });
        }

    })
}

export default sorting;

function checkDate(id) {
    const date = new Date();
    document.getElementById(id).innerHTML = date.toLocaleDateString();
}

function checkTimer(id) {
    const date = new Date();

    const hours =
        date.getHours() < 10 ?
            "0".concat(date.getHours().toString())
            : date.getHours().toString();

    const minutes =
        date.getMinutes() < 10 ?
            "0".concat(date.getMinutes().toString())
            : date.getMinutes().toString();

    const seconds =
        date.getSeconds() < 10 ?
            "0".concat(date.getSeconds().toString())
            : date.getSeconds().toString();

    const mil =
        date.getMilliseconds() < 10 ?
            "00".concat(date.getMilliseconds().toString())
            : date.getMilliseconds() < 100 ?
                "0".concat(date.getMilliseconds().toString())
                : date.getMilliseconds().toString();

    const am_pm = hours > 11 ? " PM" : " AM";

    document.getElementById(id).innerHTML = hours + ":" + minutes + ":" + seconds + ":" + mil + am_pm;
}

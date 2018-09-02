window.onload = function () {
    var eleP = document.getElementsByTagName('div')[0].getElementsByTagName('p')[0],
        eleB = document.getElementsByTagName('body')[0],
        eleStart = document.getElementsByTagName('input')[0],
        eleStop = document.getElementsByTagName('input')[1],
        arr = ["爱你", "小米", "惠普笔记本", "自行车", "10元话费", "洗衣粉一袋", "谢谢参与！", "小可爱", "草泥马"],
        cou,
        t;

    function blurAll() {
        eleStart.blur();
        eleStop.blur();
    }

    function addEvent(elem, type, fun) {
        if (elem.addEventListener) {
            elem.addEventListener(type, fun);
        } else if (elem.attachEvent) {
            elem.attachEvent("on" + type, fun);
        } else {
            elem["on" + type] = fun;
        }
    }

    function startC() {
        eleB.style.backgroundColor = "white";
        t = setInterval(produceRandom, 50);
        eleStart.disabled = "disabled";
        eleStart.style.backgroundColor = "#aaa";
        blurAll();
    }

    function produceRandom() {
        do {
            cou = Math.floor(Math.random() * arr.length);
        } while (eleP.innerHTML == arr[cou]);
        eleP.innerHTML = arr[cou]
    }

    function stopC() {
        eleB.style.backgroundColor = "rgba(100, 153, 17, 0.49)";
        eleStart.disabled = false;
        eleStart.style.backgroundColor = "rgba(100, 153, 17, 0.49)";
        clearInterval(t);
        blurAll();
    }

    function press(e) {
        e = e || e.event;
        if (e.keyCode == 13) {
            if (eleStart.disabled) {
                stopC();
            } else {
                startC();
            }
        }
    }

    addEvent(document, "keyup", press);
    addEvent(eleStart, "click", startC);
    addEvent(eleStop, "click", stopC);
}
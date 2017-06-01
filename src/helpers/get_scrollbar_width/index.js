export default function getScrollbarWidth() {
    const outer = document.createElement('div'),
        inner = document.createElement('div');
    outer.setAttribute('style', 'width: 50px;height:50px;overflow-y:scroll;');
    inner.setAttribute('style', 'height:100px;width:100%');

    outer.appendChild(inner);
    document.body.appendChild(outer);

    const w1 = outer.clientWidth,
        w2 = outer.clientWidth;

    document.body.removeChild(outer);

    const size = w1 - w2;

    return size;
}
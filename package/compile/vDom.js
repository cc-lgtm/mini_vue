function h(tag, props, children) {
    return {
        tag: tag,
        props: props,
        children: children
    };
}
function mount(vnode, container) {
    var el = document.createElement(vnode.tag);
    if (vnode.props) {
        for (var key in vnode.props) {
            var value = vnode.props[key];
            el.setAttribute(key, value);
        }
    }
    if (vnode.children) {
        if (typeof vnode.children === 'string') {
            el.innerText = vnode.children;
        }
        else {
            vnode.children.forEach(function (children) {
                mount(children, el);
            });
        }
    }
    container.appendChild(el);
}
var vdom = h('div', { "class": 'red' }, [
    h('span', null, 'hello')
]);
mount(vdom, document.getElementById('app'));

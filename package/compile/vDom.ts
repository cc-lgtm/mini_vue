type Props = {[key: string]: any} | null
type VNode = {
  el?: Element
  tag: string,
  props: Props,
  children: any[] | string
}
function h(tag: string, props: Props, children: any[] | string): VNode {
  return {
    tag,
    props,
    children
  }
}

function patch(h1: VNode, h2: VNode) {
  if (h1.tag === h2.tag) {
    const el = h2.el = h1.el
    const oldProps = h1.props || {}
    const newProps = h2.props || {}
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if (newValue !== oldValue) {
        el.setAttribute(key, newValue)
      }
    }
    for (const key in oldProps) {
      if (!(key in newProps)) {
        el.removeAttribute(key)
      }
    }

    const oldChildren = h1.children
    const newChildren = h2.children
    if (typeof newChildren === 'string') {

    } else {
      
    }
  } else {

  }
}

function mount(vnode: VNode, container: Element) {
  const el = vnode.el = document.createElement(vnode.tag)
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      el.setAttribute(key, value)
    }
  }
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.innerText = vnode.children
    } else {
      vnode.children.forEach(children => {
        mount(children, el)
      })
    }
  }
  container.appendChild(el)
}

const vdom1 = h('div', { class: 'red' }, [
  h('span', null, 'hello')
])

const vdom2 = h('div', { class: 'green' }, [
  h('span', null, 'changed')
])

patch(vdom1, vdom2)

mount(vdom1, document.getElementById('app'))

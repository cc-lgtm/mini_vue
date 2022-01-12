import { watchEffect, Dep } from './deps'

const depsMap = new WeakMap()
const reactiveHandler =  {
  get(traget, key) {
    let depsT = depsMap.get(traget)
  },
  set(traget, key, value) {

  }
}

function reactive(rows: {[key: string]: any}) {
  return new Proxy(rows, reactiveHandler)
}

const state = reactive({
  count: 0
})

watchEffect(() => {
  console.log(state.count)
})

state.count++

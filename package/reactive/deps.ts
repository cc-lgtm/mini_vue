let activeEffect: EffectType | null;

type ValueType = number | string

class Dep {
  subs: Set<EffectType>
  private value: ValueType
  constructor(value: ValueType) {
    this.subs = new Set()
    this.value = value
  }
  get _value() {
    this.depend()
    return this.value
  }
  set _value(newVal) {
    this.value = newVal
    this.notify()
  }
  depend() {
    if (activeEffect) {
      this.subs.add(activeEffect)
    }
  }
  notify() {
    this.subs.forEach(effect => {
      effect()
    })
  }
}

type EffectType = () => void
function watchEffect(effect: EffectType) {
  activeEffect = effect
  effect()
  activeEffect = null
}

export {
  Dep,
  watchEffect
}

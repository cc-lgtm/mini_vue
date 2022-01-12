import { Dep, watchEffect } from '../package/reactive/deps'

const dep = new Dep('hello')

watchEffect(() => {
  console.log(dep._value)
})

dep._value = 'changed'

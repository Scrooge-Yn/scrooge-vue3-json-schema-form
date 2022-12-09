import { defineComponent, reactive, ref } from 'vue'

import HelloWorld from './components/HelloWorld'

const img = require('./assets/logo.png') // eslint-disable-line

function renderHelloWorld(num: number) {
  return <HelloWorld age={num} />
}

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'Scrooge',
    })

    const numberRef = ref(1)

    return () => {
      const number = numberRef.value
      console.log(state.name)

      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name + number}</p>
          <input type="text" v-model={state.name} />
          {renderHelloWorld(12)}
        </div>
      )
    }
  },
})

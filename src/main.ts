import './style.css'
import './bases/01-variables'
import './bases/02-template-string'
import './bases/03-object-literal'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
  </div>
`;
import { h, app } from 'hyperapp';

const state = {
  title: 'Hello World',
};

const actions = {};
const view = (state, actions) => (
  <main class="app-container">
    <h1>{state.title}</h1>
    <div class="sub-container">
      <p>Welcome to code the world !!</p>
    </div>
  </main>
);

app(state, actions, view, document.body);

import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/nav'
import '../components/card'
import { palettes } from '../palettes'

@customElement('gh-home')
export class Home extends LitElement {

  static styles = css`
  `;

  // So that we can specify parent div element for the p5 sketch
  protected createRenderRoot() {
    return this;
  }

  render() {
    // Global array of nice palettes
    window.P5 = {
      palettes
    }

    document.title = "Gary Homewood"

    const sketch = document.createElement('script');
    sketch.id = 'script-sketch'
    sketch.src = `/assets/sketches/home-sketch.js`;
    document.body.appendChild(sketch);

    return html`
      <gh-nav></gh-nav>
      <div id='sketch-canvas'></div>
      <div class="sketch-container">
        <gh-card class="sketch-card"></gh-card>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-home': Home
  }
}

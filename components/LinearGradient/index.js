import React, { PureComponent } from 'react';
import autoHeight from '../../public/autoHeight';
import { createRandom } from '../../public/utils';
import styles from "./index.css";

@autoHeight()
export default class LinearGradient extends PureComponent {
  state = {
    starColor: '#f1897e',
    endColor: '#facc68',
    colorArr: ['#f1897e','#facc68','#ea8a80','#d48981','#d8b66c','#777777']
  };

  componentDidMount() {
    this.renderChart();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.timer);
    if (this.node) {
      this.node.innerHTML = '';
    }
    window.removeEventListener('resize', this.resize);
  }

  changeColor() {
    const { colorArr } = this.state;
    const list = createRandom(2, 0, colorArr.length - 1);

    this.setState({
      starColor: colorArr[list[0]],
      endColor: colorArr[list[1]]
    })
  }

  renderChart() {
    const self = this;

    if (!this.node) return;

    const canvas = this.node;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    let counts = 0;
    let speed = Math.floor(Math.random() * (10 - 2 + 1) + 2);

    function draw() {
      const { starColor, endColor } = self.state;
      
      counts += speed;
      if(counts >= w) {
        counts = 0;
        self.changeColor();
      }
      const gradient = ctx.createLinearGradient(counts, counts, w, h/2);
      gradient.addColorStop(0, starColor);
      gradient.addColorStop(1, endColor);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h/2);
    }

    function render() {
      ctx.clearRect(0, 0, w, h);
      draw()
      self.timer = requestAnimationFrame(render);
    }

    render();
  }

  render() {
    const { height } = this.props;
    return (
      <div
        className={styles.backgroundMask}
        ref={n => (this.root = n)}
      >
        <div style={{ height, overflow: 'hidden' }}>
          <canvas
            className={styles.waterWaveCanvasWrapper}
            ref={n => (this.node = n)}
            width={height * 8}
            height={height * 2}
          />
        </div>
      </div>
    );
  }
}

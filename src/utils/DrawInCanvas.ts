import type { Ref } from 'vue'
import { CanvasRoundRect } from './CanvasUtil'
import type { Configs } from '@/types/Configs'

interface Ball {
  x: number
  y: number
  speed: number
  size: number
  start_time: number
}

export default class DrawInCanvas {
  private canvas: Ref<HTMLCanvasElement>
  private ctx: CanvasRenderingContext2D
  private balls: Array<Ball>
  private configs: Configs
  private gradient: CanvasGradient
  private color: string
  private border: boolean
  constructor(canvas: Ref<HTMLCanvasElement>, configs: Configs) {
    this.canvas = canvas
    this.configs = configs
    this.color = this.configs.lightPieceColor
    this.border = false
    this.ctx = canvas.value?.getContext('2d')!
    this.canvas.value!.height = window.innerHeight + 300
    this.balls = []
    this.draw = this.draw.bind(this)
    this.createBalls = this.createBalls.bind(this)
    this.render = this.render.bind(this)
    this.createBalls(100)
    this.gradient = this.ctx.createLinearGradient(
      0,
      0,
      this.canvas.value!.width * Math.cos((90 / 180) * Math.PI),
      this.canvas.value!.height * Math.sin((90 / 180) * Math.PI)
    )
    const step = 1 / this.configs.playSpeed
    let current_step = 0
    this.configs.colorList.forEach((color: string) => {
      this.gradient.addColorStop(current_step, color)
      current_step += step
    })
  }

  public createBalls(quantity: number): void {
    this.ctx.shadowBlur = 4
    for (let i = 1; i <= quantity; i++) {
      this.balls.push({
        x: (window.innerWidth / quantity) * i,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 2 + 2,
        size:
          Math.random() > 0.5
            ? window.innerWidth < 1200
              ? 1200 / 52 / 1.5
              : window.innerWidth / 52 / 1.5
            : window.innerWidth < 1200
            ? 1200 / 52 / 1.6 / 1.5
            : window.innerWidth / 52 / 1.6 / 1.5,
        start_time: Date.now() - Math.floor(Math.random() * 4000)
      })
    }
  }

  public render(color: string, border: boolean): void {
    if (this.canvas && this.ctx) {
      if (this.canvas && this.canvas.value) {
        if (this.canvas.value!.width !== window.innerWidth || this.canvas.value!.height !== window.innerHeight + 300) {
          this.canvas.value!.width = window.innerWidth > 920 ? window.innerWidth / 2 : window.innerWidth
          this.canvas.value!.height = window.innerHeight + 300
        }
      }
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight + 300)
      this.balls = this.balls.map((ball) => {
        ball.y = (Date.now() - ball.start_time) / ball.speed
        if (ball.y > this.canvas.value!.height) {
          ball.x = Math.random() * window.innerWidth
          ball.start_time = Date.now() + 500
        }
        this.ctx.beginPath()
        this.ctx.shadowColor = this.configs.shadowColor
        CanvasRoundRect(
          this.ctx,
          color,
          Math.floor(ball.x),
          Math.floor(ball.y),
          Math.floor(ball.size),
          Math.floor(ball.size * 4),
          this.configs.blockRadius,
          border
        )
        return ball
      })
    }
  }

  public draw(): void {
    this.render(this.color, this.border)
    requestAnimationFrame(this.draw)
  }

  public switch(colorMode: string): void {
    switch (colorMode) {
      case 'dark': {
        this.color = this.configs.darkPieceColor
        this.border = true
        break
      }
      case 'light': {
        this.color = this.configs.lightPieceColor
        this.border = false
        break
      }
      case 'auto': {
        this.color = this.configs.lightPieceColor
        this.border = false
        break
      }
    }
  }
}

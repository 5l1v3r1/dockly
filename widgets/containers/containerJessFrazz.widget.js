'use strict'

const baseWidget = require('../../src/baseWidget')

class myWidget extends baseWidget() {
  constructor ({blessed = {}, contrib = {}, screen = {}, grid = {}}) {
    super()
    this.blessed = blessed
    this.contrib = contrib
    this.screen = screen
    this.grid = grid

    this.label = 'JessFrazz Magic'

    this.widget = this.getWidget()
  }

  init () {
    // if (!this.widgetsRepo.has('containers')) {
    //   return null
    // }

    // const dockerHook = this.widgetsRepo.get('containers')
    // dockerHook.on('containerStatus', (data) => {
    //   return this.update(data)
    // })
  }

  getWidget () {
    const fs = require('fs')
    const fileContents = fs.readFileSync('./assets/img.txt', 'utf-8')
    
    return this.grid.gridObj.set(...this.grid.gridLayout, this.blessed.box, {
      label: this.label,
      // file: './assets/jf3-1.png',
      // type: 'ansi',
      // cols: 30,
      content: fileContents
      // top: 2,
      // left: 0,
      // width: 20,
      // height: 20

      // file: './assets/jf3.png',
      // cols: 25

      // onReady: render
      // style: {
      //   fg: 'blue',
      //   bg: 'default',
      //   border: {
      //     fg: 'default',
      //     bg: 'default'
      //   },
      //   selected: {
      //     bg: 'green'
      //   }
      // },
      // border: {
      //   type: 'line',
      //   fg: '#00ff00'
      // },
      // hover: {
      //   bg: 'blue'
      // },
      // width: '20%',
      // height: '18%',
      // top: '0',
      // left: '80%'
    })
  }

  // update (data) {
  //   if (!data || (typeof data !== 'object')) {
  //     return
  //   }

  //   if (data.Containers !== 0) {
  //     let stack = []
  //     if (data.ContainersRunning !== 0) {
  //       stack.push({
  //         percent: Math.round((data.ContainersRunning / data.Containers) * 100),
  //         stroke: this.color['ContainersRunning']
  //       })
  //     }

  //     if (data.ContainersPaused !== 0) {
  //       stack.push({
  //         percent: Math.round((data.ContainersPaused / data.Containers) * 100),
  //         stroke: this.color['ContainersPaused']
  //       })
  //     }

  //     if (data.ContainersStopped !== 0) {
  //       stack.push({
  //         percent: Math.round((data.ContainersStopped / data.Containers) * 100),
  //         stroke: this.color['ContainersStopped']
  //       })
  //     }

  //     this.widget.setStack(stack)
  //     this.screen.render()
  //   }
  // }
}

module.exports = myWidget

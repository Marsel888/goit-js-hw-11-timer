class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector
    this.targetDate = targetDate
  }
  start() {
    const secsTime = document.querySelector(
      `${this.selector} [data-value="secs"]`,
    )
    const daysTime = document.querySelector(
      `${this.selector} [data-value="days"]`,
    )
    const hoursTime = document.querySelector(
      `${this.selector} [data-value="hours"]`,
    )
    const minsTime = document.querySelector(
      `${this.selector} [data-value="mins"]`,
    )

    setInterval(() => {
      const currentData = Date.now()
      const deltaTime = this.targetDate - currentData
      const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const secs = Math.floor((deltaTime % (1000 * 60)) / 1000)
      const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60))

      secsTime.textContent = secs
      minsTime.textContent = mins
      daysTime.textContent = days
      hoursTime.textContent = hours
    }, 1000)
  }
}

const data = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
})
data.start()

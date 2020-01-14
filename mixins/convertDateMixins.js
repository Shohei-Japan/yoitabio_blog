export default {
  methods: {
    getDate(postDate) {
      const date = new Date(postDate)
      const year = date.getFullYear()
      const month = this.addTextZero(date.getMonth() + 1)
      const day = this.addTextZero(date.getDate())
      const hour = this.addTextZero(date.getHours())
      const minute = this.addTextZero(date.getMinutes())
      return `${year}/${month}/${day} ${hour}:${minute}`
    },
    addTextZero(text) {
      return text.toString().padStart(2, '0')
    },
  }
}

import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    disable: 'phone',
    offset: -10,
    duration: 300,
    easing: 'ease-in',
    once: true
  })
}

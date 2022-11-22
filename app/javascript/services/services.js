import http from './http'

const getGreetings = () => {
  return http.get('/greetings')
}

console.log(getGreetings())

export default getGreetings
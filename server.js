import {  createServer } from 'node:http'

const server =  createServer((request, resposnse) => {
    //onsole.log('Olá mundo!')

    resposnse.write('Olá Mundo')

    return resposnse.end()
})
server.listen(3333)


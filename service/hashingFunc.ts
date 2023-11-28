import {createHash} from 'crypto'


export default function hashingFunc(pass:string) {
    const hashPass = createHash('sha256').update(pass).digest('hex')
    return hashPass
}
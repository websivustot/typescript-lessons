interface Person {
    name: string
    age: Number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

// key = 'job'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>  // 'name' | 'email'

type UserKeysNoMeta = Pick<User, 'name' | 'email'> //'name' | 'email'

let u1: UserKeysNoMeta = 'name'
//u1 = '_id'

#! /usr/bin/env node

interface item {
    Name: string
    Price: number
}
// Create two Objects

const book: item={
    Name: 'ESSENTIAL TYPESCRIPT',
    Price: 450
}

const Success: item={
    Name: 'Success',
    Price: 200
}
console.log(`book name ${book.Name} , price $${book.Price}`)
console.log(`Success name ${Success.Name} , price $${Success.Price}`)

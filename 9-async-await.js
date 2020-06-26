const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    /* throw new Error('Something went wrong!!!')
    return 'Nerius' */
    console.log('Starting add')
    const sum = await add(1, -99)
    console.log('First added. Sum = ' + sum)
    const sum2 = await add(sum, 50)
    console.log('Second added. Sum2 = ' + sum2)
    const sum3 = await add(sum2, -3)
    console.log('Third added. Sum3 = ' + sum3)
    return sum3
}

//console.log(doWork())

doWork().then((result) => {
    console.log(`Result: ${result}`)
}).catch((reject) => {
    console.log(`Error: ${reject}`)
})
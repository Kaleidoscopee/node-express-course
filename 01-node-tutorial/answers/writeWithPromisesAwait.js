const { writeFile, readFile } = require("fs").promises;  


async function writer () {
    try {
        await writeFile("./temp.txt", "Hello, this should print 1st.\n", "utf-8")
        await writeFile("./temp.txt", "Then 2nd.\n", {flag: 'a'}, "utf-8")
        await writeFile("./temp.txt", "Then 3rd.\n", {flag: 'a'}, "utf-8")
    } catch (err) {
        console.log(err)
    }
}

async function reader (){
    try {
        const readResults = await readFile("./temp.txt", "utf-8")
        console.log(readResults)
    } catch (err) {
        console.log(err)
    }
}

async function readWrite(){
    await reader()
    await writer()


}

readWrite()
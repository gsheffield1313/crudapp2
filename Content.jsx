
const Content = ()=>{
    const handleNameChange =() =>{
        const names = ['mike', "steve", "Roger"];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }

        const handleClick=() => {
            console.log('Not a test')

        }

        const handleClick2=(name) => {
            console.log(`${name} was clicked`)
        }

        const handleClick3=(e) => {
            console.log(e)
        }
    return(
        <main>
            <p>
                Test{handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={()=> handleClick2(e)}>Click it</button>
            <button onClick={(e)=> handleClick3(e)}>Click it</button>
        </main>
    )
}

export default Content
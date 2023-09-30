const Header = ()=>{
    const handleNameChange =() =>{
        const names = ['mike', "steve", "Roger"];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }

        const handleClick=() => {
            console.log('Not a test')

        }

        const handleClick2=() => {
            console.log(`${name} was clicked`)
        }
    return(
        <main>
            <p>
                Test{handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={()=> handleClick2('Grant')}>Click it</button>
        </main>
    )
}

export default Header
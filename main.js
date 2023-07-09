let form = document.getElementById("form")
onsubmit = (event) => {
    //really dont like this 
    let nomer = document.getElementById("nomer")
    let date = document.getElementById("date")
    let name = document.getElementById("name")
    let cost = document.getElementById("cost")
    let cent = document.getElementById("cent")
    let coef = document.getElementById("coef")
    console.log(nomer)
    event.preventDefault()
    const post = async () => {
        const response = await fetch( ``, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input_title: nomer.value,
                input_data: date.value,
                input_pred: name.value,
                input_cost: cost.value,
                input_cent: cent.value,
                input_cost_coef: coef.value
            })
        })
        const data = await response.json()
        if(data.succes){
        }
    }
    post()
}

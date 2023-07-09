let form = document.getElementById("form")
addEventListener('submit', (event) => {});
onsubmit = (event) => {
    let nomer = document.getElementById("nomer")
    let date = document.getElementById("date")
    let name = document.getElementById("name")
    let cost = document.getElementById("cost")
    let cent = document.getElementById("cent")
    let coef = document.getElementById("coef")
    event.preventDefault()
    console.log(JSON.stringify({
                input_title: nomer,
                input_data: date,
                input_pred: name,
                input_cost: cost,
                input_cent: cent,
                input_cost_coef: coef
            }))
    const post = async () => {
        const response = await fetch( ``, {
            method: `POST`,
            headers ,
            body: JSON.stringify({
                input_title: nomer,
                input_data: date,
                input_pred: name,
                input_cost: cost,
                input_cent: cent,
                input_cost_coef: coef
            })
        })
        const data = await response.json()
        if(data.succes){
        }
    }
}
let form = document.getElementById("form")
addEventListener('submit', (event) => {});
onsubmit = (event) => {
    //really dont like this 
    let nomer = document.getElementById("nomer")
    let date = document.getElementById("date")
    let name = document.getElementById("name")
    let cost = document.getElementById("cost")
    let cent = document.getElementById("cent")
    let coef = document.getElementById("coef")
    
    event.preventDefault()
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
/*Мох! Стать похожим меньше на цветок, больше на
Мох! Японский сад промок, воду пьёт зелёный мох
Неприметным ковром стелется в тени цветов, репней и пестиков, шипов
Мы все исчезнем, но не мох*/ 
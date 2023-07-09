let form = document.getElementById("form")

onsubmit = async (event) => {
    event.preventDefault()

    let nomer = document.getElementById("nomer")
    let date  = document.getElementById("date")
    let name  = document.getElementById("name")
    let cost  = document.getElementById("cost")
    let cent  = document.getElementById("cent")
    let coef  = document.getElementById("coef")

    const res = await fetch(`/api`, {
        method: 'POST',
        responsetype: 'arraybuffer',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            input_title: nomer.value,
            input_data: date.value,
            input_pred: name.value,
            input_cost: cost.value,
            input_cent: cent.value,
            input_cost_coef: coef.value,
        })
    })
    const data = await res.arrayBuffer();

    const blob = new Blob([data], { type: res.headers.get('content-type') });
    const fileUrl = URL.createObjectURL(blob);
    const fileName = res.headers.get('content-disposition').split('filename=')[1].replace(/"/g, '');

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

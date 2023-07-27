// // ch 10 ps Q1

let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
        <div class="card" style = "width: 20rem;">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/016/746/979/small/freelancer-software-developer-programmer-coder-illustrator-vector.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${contests[item].name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="${contests[item].url}" class="btn btn-primary">Visit URL</a>
                        <h6>START TIME : ${contests[item].start_time}<br>
                        END TIME : ${contests[item].end_time}
                        </h6>
                    </div>
        </div>
                `
    }
    cardContainer.innerHTML = ihtml
})
// -------------------------------------------------------------------------------------------------------------------------------------
// ch 10 ps Q2,3
// let a = prompt("enter the NOTE you want to store in local storage")
// if (a){
//     localStorage.setItem("note",a)
// }
// // -------------------------------------------------------------------------------------------------------------------------------------
// // ch 10 ps Q4
// let c = confirm("do you want to delete your note")
// if (c){
//     localStorage.removeItem("note")
//     alert("note deleted")
// }
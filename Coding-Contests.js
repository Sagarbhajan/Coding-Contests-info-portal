let url = "https://kontests.net/api/v1/all"
let j = 1;
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
            <div class="card" style = "height: 35rem;width: 20rem;margin-left: 40px">
                <img src="/images/${j}.jpg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${contests[item].name}</h5>
                        <p class="card-text">site: ${contests[item].site}</p>
                        <h6>Start Time : ${contests[item].start_time}<br>
                        End Time : ${contests[item].end_time}
                        </h6>
                        <a href="${contests[item].url}" class="btn btn-primary">Visit URL</a>
                    </div>
            </div>`
        j = j + 1

    }
    cardContainer.innerHTML = ihtml
})



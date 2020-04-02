$(() => {
    $.ajax({
        type: 'GET',
        url: 'index.json',
        success: function(result) {
            $.each(result, function(i, item) {
                $.each(item.body, function(i, value) {
                    if (item.divId === 'cards') {
                        $(`#${item.divId}`).prepend(`
                            <div class="col-lg-3 col-md-6 col-12 active-card">
                                <div class="mx-auto icon-div">
                                    <img src=${value.icon} class="icons"/>
                                </div>
                                <h3 class="text-center fs-15">${value.title}</h3>
                                <p class="text-center fs-13">${value.description}</p>
                            </div>
                        `)
                    } else if (item.divId === 'gallery') {
                        $(`#${item.divId}`).prepend(`
                            <div class="col-lg-6 col-12 card mx-2 screen">
                                <div class="position-relative">
                                    <div class="d-none hover">
                                        <img class="card-img-top" src="images/screenshots/screenshot-blue.png" alt="Card image cap">
                                        <h1 class="p-0 screenShot-plus">+</h1>
                                    </div>
                                    <img class="card-img-top default-img" src="images/screenshots/screenshot-grey.png" alt="Card image cap">
                                    <div class="p-0 screenShot-div">
                                        <h5 class="blue screenshots card-text text-center py-2 fs-15">${value.title}</h5>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="card-text fs-13 lightgrey text-center">${value.description}</p>
                                </div>
                            </div>
                        `)
                    } else if (item.divId === 'package') {
                        $(`#${item.divId}`).prepend(`
                            <div class="col-lg-3 col-md-8 col-10 ${value.margins} package">
                                <div class="row flex-column">
                                    <h4 class="text-center my-4 uppercase fs-17 whitesmoke">${value.title}</h4>
                                    <h1 class="text-center p-4 ${value.color} white fs-85">${value.price}</h1>
                                    <ul class="list-group" id="list"></ul>
                                    <div class="d-flex justify-content-center my-4">
                                        <button class="btn ${value.color} px-5 py-3 white">purchase</button>
                                    </div>
                                </div>
                            </div>
                        `)
                        $.each(value.abilities, (i, item) => {
                            $("#list").prepend(`
                                <li class="list-group-item whitesmoke text-center price-list-item">${item}</li>
                            `)
                        })
                    }
                })
            })
        }
    })
})

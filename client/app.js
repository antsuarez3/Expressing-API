

// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// $('#button-id').click( function () {
//     let item = '<li class="red">Apples and Oranges</li>';
//     $('#chirp-list').append(item);
// })

// $('#style-me').click(function () {
//     $('.red').css('color', 'red');
// })

// $(document).ready(function () {
//     $('<div></div>').css({
//         'background-color': 'red',
//         'height': '100px',
//         'width': '100px'
//     }).insertAfter('#chirp-list');
// })

// const Timeline = (id) => {
//     return props.chirps.map(oneChirpFromArray => <OneChirp chirp={oneChirpFromArray} />)
// }

const deleteChirp = (id) => {
    $.ajax({
        url: `/api/chirps/${id}`,
        type: 'DELETE',
        success: function () {
            alert("Chirp has been deleted");

            // Do something with the result
        },
        error: function (error) {
            alert(error);
        }
    }).then(() => {
        $("#chirp-list").empty();
        fetchChirps();
    })
}

// $('#button-id').click( function () {
//     chirp.name = $('#name').val();
//     chirp.text = $('text').val();
// })

const fetchChirps = () => {
    $.get("/api/chirps", data => {
        delete data.nextid
        const chirpArr = Object.values(data)
        console.log(chirpArr)
        chirpArr.forEach(chirp => {
            let id = chirp.id
            $("#chirp-list").append(`
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${chirp.name}</h5>
                    <p class="card-text">${chirp.text}</p>
                    <button onclick="deleteChirp(${id})">Delete</button>
                </div>
            </div>
            `)
        })
    })
}

fetchChirps();
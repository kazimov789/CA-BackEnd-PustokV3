$(document).on("click", ".modal-btn", function (e) {
    e.preventDefault();

    let url = $(this).attr("href");

    fetch(url)
        .then(response => {

            console.log(response)
            if (response.ok) {
                return response.text()
            }
            else {
                alert("Bilinmedik bir xeta bas verdi!")
            }
        })
        .then(data => {
            //$("#quickModal .product-title").text(data.book.name)
            $("#quickModal .modal-dialog").html(data)
            $("#quickModal").modal('show');
        })
})

document.querySelector(".signle-btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("salam")
})

//$(document).on("click", ".hover-btns .single-btn", function (e) {
//    e.preventDefault();
//    let basketUrl = $(this).attr("home/showbasket")
//    fetch(basketUrl)
//        .then(response => {

//            console.log(response)
//            if (response.ok) {
//                return response.text()
//            }
//            else {
//                alert("Bilinmedik bir xeta bas verdi!")
//            }
//        })
//        .then(data2 => {
//            $(".cart-total .text-number").html(data2.length)
//            console.log('foo')
//        })

//    console.log('salam')
//}
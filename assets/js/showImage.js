const imgShow = document.getElementById('myImg');
const modalShow = document.getElementById('modalShowImage');
const showImage = document.getElementById("imageShow");

imgShow.addEventListener('click', function(){
    modalShow.style.display = 'block'
    showImage.src = imgShow.src
});

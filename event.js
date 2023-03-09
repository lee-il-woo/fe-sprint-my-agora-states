// 스크롤이 아래로 내려가면 글 더 불러오기
document.addEventListener('scroll',(e)=>{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        render(postContainer);
    }
})

//스크롤 리셋 버튼
let btnTop = document.querySelector('.btn-top')
btnTop.addEventListener('click',()=>{
scrollTo({behavior:'smooth',top:0})
})


const body = document.querySelector('body')
const postIt = document.querySelectorAll('.post-it')
const postItModal = document.querySelector('.post-it-modal')
const postItModalBody = document.querySelector('.post-it-modal-body')

// 포스트잇 클릭 시 모달창 보여짐
postIt.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        postItModal.classList.remove('post-it-modal-hide')
        postItModalBody.textContent = e.target.children[1].children[0].textContent
    })
})

// 화면 클릭 시 모달창 사라짐
postItModal.addEventListener('click',()=>{
    postItModal.classList.add('post-it-modal-hide')
})
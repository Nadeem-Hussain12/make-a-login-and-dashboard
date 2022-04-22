// const dropboot = document.querySelector('.drop-boot');

// dropboot.addEventListener('click',()=>{
//     const pageDown = document.querySelector('.boot-drop')
//     pageDown.classList.toggle('boot-drop-show')
//     const pageChevron = document.querySelector('.right-drop')
//     pageChevron.classList.toggle('rotate')
// })


const page = document.querySelector('.drop-wala');

page.addEventListener('click', () => {
    const pageDown = document.querySelector('.sub-dropdown')
    pageDown.classList.toggle('sub-dropdown-show')
    const pageChevron = document.querySelector('.icon-rotate')
    pageChevron.classList.toggle('rotate')
})


const component = document.querySelector('.drop-site')
component.addEventListener('click', () => {
    const pageDown = document.querySelector('.drop-comp')
    pageDown.classList.toggle('drop-comp-show')
    const pageChevron = document.querySelector('.icon-move')
    pageChevron.classList.toggle('rotate')
})


const bell = document.querySelector('.fa-bell');
const dropnoti = document.querySelector('.drop-noti')
const userinfo = document.querySelector('.user-info');
const logoutdetail = document.querySelector('.logout-detail')


bell.addEventListener('click', () => {
    if (dropnoti.classList.contains('show')) {
        dropnoti.classList.remove('show')
    }
    else {
        dropnoti.classList.add('show')
        // document.querySelector('.logout-detail').style.display = 'none';
        if (logoutdetail.classList.contains('show2')) {
            logoutdetail.classList.remove('show2')
        }
    }
});

userinfo.addEventListener('click',()=>{

    if(logoutdetail.classList.contains('show2')){
        logoutdetail.classList.remove('show2')
    }
    else{
        logoutdetail.classList.add('show2')
        if(dropnoti.classList.contains('show')){
            dropnoti.classList.remove('show')
        }
    }
})


const addtask = document.querySelector('.add-task');
const newtask = document.querySelector('.new-task')

addtask.addEventListener('click',()=>{
    newtask.classList.toggle('show3')
});



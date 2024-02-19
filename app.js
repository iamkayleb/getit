const signupBtn = document.querySelector('.signup-btn')
const loginBtn = document.querySelector('.login-btn')
const signupPanel = document.querySelector('.signup-panel')
const signinPanel = document.querySelector('.signin-panel')
const rightSignup = document.querySelector('.right-signup')
const rightSignIn = document.querySelector('.right-signin')

signupBtn.addEventListener('click', function(){
    signupPanel.style.display = 'block'
    signinPanel.style.display = 'none'
    rightSignup.style.display = 'none'
    rightSignIn.style.display = 'block'
})

loginBtn.addEventListener('click', function(){
    signupPanel.style.display = 'none'
    signinPanel.style.display = 'block'
    rightSignup.style.display = 'block'
    rightSignIn.style.display = 'none'
})
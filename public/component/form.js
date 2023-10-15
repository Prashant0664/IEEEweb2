$('.kt').click(()=>{

    username = $('#contactName').val()
    email = $('#contactEmail').val()
    subject = $('#contactSubject').val()
    messege = $('#contactMessage').val()

    $.post('/api/',{username, email, subject, messege}, (user)=>{
        if(user == 'need of user details Not enough'){
            alert('need of user details Not enough')
        }
        else{
            location.reload()
            alert('Form Submitted')
        }
    })

})
// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
//ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilahkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


// form wa
// $(document).on('click','.send_form', function(){
//     var input_gerai = document.getElementById('wa_email');
    
//     /* Whatsapp Settings */
//     var walink = 'https://web.whatsapp.com/send',
//         phone = '6281211078340',
//         walink2 = 'Halo saya ingin menanyakan produk  yang ada di gerai adam',
//         text_yes = 'Terkirim.',
//         text_no = 'Isi semua Formulir lalu klik Send.';
    
//     /* Smartphone Support */
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     var walink = 'whatsapp://send';
//     }
    
//     if("" != input_gerai.value){
    
//      /* Call Input Form */
//     var input_select1 = $("#wa_select :selected").text(),
//         input_name1 = $("#wa_name").val(),
//         input_email1 = $("#wa_email").val(),
//         input_number1 = $("#wa_number").val(),
//         // input_url1 = $("#wa_url").val(),
//         // input_textarea1 = $("#wa_textarea").val();
    
//     /* Final Whatsapp URL */
//     var gerai_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
//         '*Name* : ' + input_name1 + '%0A' +
//         '*Email Address* : ' + input_email1 + '%0A' +
//         '*Input Number* : ' + input_number1 + '%0A' +
//         // '*Select Option* : ' + input_select1 + '%0A' +
//         // '*URL/Link* : ' + input_url1 + '%0A' +
//         // '*Description* : ' + input_textarea1 + '%0A';
    
//     /* Whatsapp Window Open */
//     window.open(gerai_whatsapp,'_blank');
//     document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
//     } else {
//     document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
//     }
//     });
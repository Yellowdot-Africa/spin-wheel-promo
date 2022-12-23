let spinButton = document.getElementById('spin_button');

let resetButton = document.getElementById('reset-btn');

let logout = document.getElementById('logout');

let header = document.getElementById('user');

let headerMobile = document.getElementById('usermobile');

let dropdown = document.getElementById('dropbtn');

let wallet = document.getElementById('wallet');

let walletMobile = document.getElementById('walletmobile');

let alertMsg = document.getElementById('alert-msg');

let winningMsg;

let token = localStorage.getItem('x-auth-token');

let displaySpin = document.getElementById('display-spin');




// if (!localStorage.getItem('x-auth-token') || localStorage.getItem('x-auth-token') === undefined) {

//     window.location.href = '/assets/login.html';

// }



// async function welcomeUser() {

//     const user = await getUserDetails();

//     if (user.message === 'Invalid Token') {

//         window.location.href = '/index.html';

//     }

//     header.innerHTML = user.msg;

//     headerMobile.innerHTML = user.msg;

//     getUserSpin();

//     getFreeSpin();

// }



// async function getUserSpin(){

//     const userDetails = await getUserDetails();

//     let msisdn = userDetails.msisdn;

//     msisdn = msisdn.slice(3);

//     msisdn = `0` + msisdn;

//     const spinsLeft = await fetch(`http://localhost:3001/api/v1/users/${msisdn}/check-spins`, {

//         method: 'GET',

//         headers: {

//             'x-auth-token': token,

//             'Accept': 'application/json',

//             'Content-Type': 'application/json'

//         },

//     }).then((data) => data.json());

//     displaySpin.innerHTML = spinsLeft.msg;

//     return spinsLeft;

// }



// async function getFreeSpin(){

//     const userDetails = await getUserDetails();

//     let msisdn = userDetails.msisdn;

//     msisdn = msisdn.slice(3);

//     msisdn = `0` + msisdn;

//     const freeSpin = await fetch(`http://localhost:3001/api/v1/users/${msisdn}/free-spin`, {

//         method: 'GET',

//         headers: {

//             'x-auth-token': token,

//             'Accept': 'application/json',

//             'Content-Type': 'application/json'

//         },

//     }).then((data) => data.json());

//     $(document).ready(function() {

//         alertMsg.innerHTML = freeSpin.msg;

//         $("#winModal").modal('show');

//     });

//     return freeSpin;

// }





// function logoutUser() {

//     localStorage.removeItem('x-auth-token');

//     // localStorage.removeItem('price-value-token');

//     window.location.href = '/index.html';

// }





// async function getUserDetails() {

//     const userMsisdn = await fetch('http://localhost:3001/api/v1/auth-user', {

//         method: 'GET',

//         headers: {

//             'x-auth-token': token,

//             'Accept': 'application/json',

//             'Content-Type': 'application/json'

//         },

//     }).then((data) => data.json());

//     if (!userMsisdn.msisdn) {

//         window.location.href = '/assets/login.html';

//     }

//     return userMsisdn;

// }



// async function getWalletBalance() {

//     const userDetails = await getUserDetails();

//     let msisdn = userDetails.msisdn;

//     msisdn = msisdn.slice(3);

//     msisdn = `0` + msisdn;

//     const walletBalance = await fetch(`http://localhost:3001/api/v1/users/${msisdn}/check-balance`, {

//         method: 'GET',

//         headers: {

//             'x-auth-token': token,

//             'Accept': 'application/json',

//             'Content-Type': 'application/json'

//         },

//     }).then((data) => data.json());

//     wallet.innerHTML = `Balance: ${currencyFormat(walletBalance.walletBalance)}`;

//     walletMobile.innerHTML = `Balance: ${currencyFormat(walletBalance.walletBalance)}`;

//     return walletBalance;

// }



// getWalletBalance();



async function authAndPlay() {

    const userDetails = await getUserDetails();

    let msisdn = userDetails.msisdn;

    msisdn = msisdn.slice(3);

    msisdn = `0` + msisdn;

    const pricevalue = localStorage.getItem('price-value-token');

    // if (!pricevalue) {

    //     window.location.href = '/assets/price-points.html';

    // }

    const play = await fetch(`http://localhost:3001/api/v1/users/${msisdn}/play`, {

        method: 'GET',

        headers: {

            'x-auth-token': token,

            'Accept': 'application/json',

            'Content-Type': 'application/json'

        }

    }).then(data => {

        if (data.status === 400) {

            localStorage.removeItem('price-value-token');

            $(document).ready(function() {

                $("#myModal").modal('show');

            });

            return;

        }

        return data.json();

    });

    return play;

}



let item;

const wheelOneItems = [ 

    {'strokeStyle' : '#FF00CE', 'fillStyle' : '#FF00CE', 'text' : 'Bag of Rice', 'textFontSize' : 22, 'textFillStyle' : '#ffffff'},

    {'strokeStyle' : '#611754', 'fillStyle' : '#611754', 'text' : 'Nothing Here', 'textFontSize' : 20, 'textFillStyle' : '#ffffff'},

    {'strokeStyle' : '#006993', 'fillStyle' : '#006993', 'text' : 'Gift Hamper', 'textFontSize' : 20, 'textFillStyle' : '#ffffff'},

    {'strokeStyle' : '#48887A', 'fillStyle' : '#48887A', 'text' : 'Nothing Here', 'textFontSize' : 20, 'textFillStyle' : '#ffffff'},

    {'strokeStyle' : '#D02180', 'fillStyle' : '#D02180', 'text' : '₦5,000', 'textFontSize' : 22, 'textFillStyle' : '#ffffff'},

    {'strokeStyle' : '#2C2E54', 'fillStyle' : '#2C2E54', 'text' : '₦1000 Airtime', 'textFontSize' : 20, 'textFillStyle' : '#ffffff'},

    {'strokeStyle' : '#FFCC2A', 'fillStyle' : '#FFCC2A', 'text' : '₦50,000', 'textFontSize' : 22, 'textFillStyle' : '#ffffff'},

    {'strokeStyle' : '#5BC6D0', 'fillStyle' : '#5BC6D0', 'text' : 'Nothing Here', 'textFontSize' : 20, 'textFillStyle' : '#ffffff'}

];



// Create new wheel object specifying the parameters at creation time.

let theWheel = new Winwheel({

    'outerRadius': 217, // Set outer radius so wheel fits inside the background.

    'innerRadius': 58, // Make wheel hollow so segments don't go all way to center.

    'textFontSize': 30, // Set default font size for the segments.

    'responsive': true, // This wheel is responsive!

    'textOrientation': 'horizontal', // Make text vertial so goes down from the outside of wheel.

    'textAlignment': 'outer', // Align text to outside of wheel.

    'textDirection': 'reversed',

    'numSegments': 8, // Specify number of segments.

    // 'pointerAngle': 315, 

    // 'drawText': true,  

    // 'drawMode': 'segmentImage',

    'segments': // Define segments including colour and text.

        wheelOneItems,

    'animation': // Specify the animation to use.

    {

        'type': 'spinToStop',

        'duration': 30, // Duration in seconds.

        'spins': 3, // Default number of complete spins.

        'callbackFinished': alertPrize,

        'callbackSound': playSound, // Function to call when the tick sound is to be triggered.

        'soundTrigger': 'pin' // Specify pins are to trigger the sound, the other option is 'segment'.

    },

    'pins': // Turn pins on.

    {

        'number': 8,

        'fillStyle': '#FFECA7',

        'outerRadius': 10,

        'strokeStyle' : '#FFECA7',

        'margin'      : -1,

    },

    'pointerGuide': // Turn pointer guide on.

    {

        'display': false,

        'strokeStyle': 'red',

        'lineWidth': 3

    }

});



// Loads the tick audio sound in to an audio object.

let audio = new Audio('/assets/tick.mp3');

// This function is called when the sound is to be played.

function playSound() {

    // Stop and rewind the sound if it already happens to be playing.

    audio.pause();

    audio.currentTime = 0;



    // Play the sound.

    audio.play()

}



// function muteSound(){

//     // Stop and rewind the sound if it already happens to be playing.

//     audio.play();

//     audio.currentTime = 0;



//     // Play the sound.

//     audio.pause()

// }



// Vars used by the code in this page to do power controls.

let wheelPower = 0;

let wheelSpinning = false;



// -------------------------------------------------------

// Click handler for spin button.

// -------------------------------------------------------



async function startSpin() {

    // Ensure that spinning can't be clicked again while already running.

    if (wheelSpinning == false) {

        // Based on the power level selected adjust the number of spins for the wheel, the more times is has

        // to rotate with the duration of the animation the quicker the wheel spins.

        theWheel.animation.spins = 10;



        // Disable the spin button so can't click again while wheel is spinning.

        spinButton.src = "/assets/img/spin_off.png";

        spinButton.className = "";



        // Important thing is to set the stopAngle of the animation before starting the spin

        // let stopAt = await authAndPlay();

        // winningMsg = stopAt.msg;

        // theWheel.animation.stopAngle = stopAt.prize[0].angle;

        





        // Begin the spin animation by calling startAnimation on the wheel object.

        theWheel.startAnimation();



        // Set to true so that power can't be changed and spin button re-enabled during

        // the current animation. The user will have to reset before spinning again.

        wheelSpinning = true;

        // setTimeout(function(){

        //     resetWheel();

        // }, 40000);

        // modalBox();

    }

}



// -------------------------------------------------------

// Function for reset button.

// -------------------------------------------------------

function resetWheel() {

    theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.

    theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.

    theWheel.draw(); // Call draw to render changes to the wheel.



    wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.

    spinButton.src = "/assets/img/spin_on.png";

    // getUserSpin();

}



// -------------------------------------------------------

// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.

// -------------------------------------------------------



function alertPrize(indicatedSegment) {

    if (indicatedSegment.text == 'Nothing Here') {

        // alert('OOPS! Nothing to Win here.&#128557');
        alertMsg.innerHTML = 'Oops! Nothing to Win here.&#128557';

        $("#winModal").modal('show');

    } else {

        // alert(winningMsg);

        $(document).ready(function() {

            alertMsg.innerHTML = "Congratulations! You have won " + indicatedSegment.text + " &#128526";

            $("#winModal").modal('show');

        });
        // alert("You have won " + indicatedSegment.text);

    }

}



// window.addEventListener('load', welcomeUser);

spinButton.addEventListener('click', startSpin);

resetButton.addEventListener('click', resetWheel);

// logout.addEventListener('click', logoutUser);
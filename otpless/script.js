// console.log("1");
// function loadScript() {
//     const script = document.createElement("script");
//     script.src = "https://otpless.com/auth.js";
//     script.id = "otplessIdScript";
//     document.body.appendChild(script);
//   }
  
//   function otplessCallback(otplessUser) {
//     console.log(otplessUser);
//   }
  
//   window.onload = function () {
//     loadScript();
  
//     window.otpless = otplessCallback;
  
//     window.onbeforeunload = function () {
//       let script = document.getElementById("otplessIdScript");
//       if (script) {
//         document.body.removeChild(script);
//       }
//     };
//   };
  
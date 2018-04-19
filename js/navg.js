(function(){
  const config = {
      apiKey: "AIzaSyAEfNvchstmWdo4Aan8da4ALAEbt60tO9g",
      authDomain: "upscbook-1305.firebaseapp.com",
      databaseURL: "https://upscbook-1305.firebaseio.com",
      projectId: "upscbook-1305",
      storageBucket: "upscbook-1305.appspot.com",
      messagingSenderId: "223925406992"
    };
  firebase.initializeApp(config);

  	 const logout = document.getElementById("btnLogout");
	   logout.addEventListener('click',e=>{

	  	firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      alert("Logout not successfully");
      window.location = "../AfterLogin/navigator.html";
    }
    else{
      alert("logout successfully");
      window.location = "../index.html"
    }
  });
});
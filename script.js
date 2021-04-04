const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

//

// auth2 is initialized with gapi.auth2.init() and a user is signed in.

if (auth2.isSignedIn.get()) {
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
// S-JlvXuOSwrUMZrlt74vK1jP

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client
    .init({
      apiKey:
        '740238340384-dq3a2t4l4o4fbekvump1f4rbrp2k5odh.apps.googleusercontent.com',
      clientId: 'S-JlvXuOSwrUMZrlt74vK1jP',
      scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
      discoveryDocs: [
        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
      ],
    })
    .then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
    });
}
// signed out
GoogleAuth.disconnect();

document.body.insertAdjacentHTML("afterbegin", `
<nav>
  <a href="profile.html">Profile</a>
  <a href="ai.html">AI</a>
  <a href="linked.html">Linked</a>
  <a href="time.html">Time</a>
  <a href="email.html">Email</a>
  <button id="logout">Logout</button>
</nav>
`);

document.getElementById("logout").addEventListener("click", () => {
  import("https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js")
    .then(({ getAuth, signOut }) => {
      const auth = getAuth();
      signOut(auth).then(() => window.location.href = "login.html");
    });
});
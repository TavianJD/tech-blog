async function logoutFormHandler(event) {
    event.preventDefault();
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
          console.log('success')
        document.location.replace('/')
            } else {
        alert(response.statusText);
      }

  }


  document.querySelector('#logout').addEventListener('click',logoutFormHandler);
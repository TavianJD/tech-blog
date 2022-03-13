async function editPostHandler(event) {

    event.preventDefault();
    console.log('clicked')
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_text = document.querySelector('textarea[name="post-text"]').value.trim();
// const post_id = event.target.dataset.id

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(id)
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);
async function newFormHandler(event) {
  event.preventDefault();
  const comment = document.querySelector('#comment').value;
  const name = document.querySelector('#comment_author').value;

  const currentLocation = window.location.pathname;

  const blogId = currentLocation.split('/').slice(-1)[0];

  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      name,
      comment,
      blogId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add comment');
  }
}

document.querySelector('.comment_form').addEventListener('submit', newFormHandler);

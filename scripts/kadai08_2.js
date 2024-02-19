const loginDialog = document.querySelector('#loginDialog');

  document.querySelector('#loginBtn').addEventListener('click', () => {
    loginDialog.showModal();
  });
  
  document.querySelector('#closeBtn').addEventListener('click', () => {
    loginDialog.close();
  });
  
  loginDialog.addEventListener('click', (event) => {
    if(event.target === loginDialog){
      loginDialog.close();
    }
  });
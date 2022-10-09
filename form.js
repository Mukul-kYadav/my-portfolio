
   var form = document.getElementById("cmform");
   form.addEventListener("submit", formSubmit);

   function formSubmit(e) {
       e.preventDefault()

       const formData = new FormData();
       formData.append(
           'first-name',
           document.querySelector('input[name="first-name"]').value
       )
       formData.append(
        'last-name',
        document.querySelector('input[name="last-name"]').value
        )
       formData.append(
           'email',
           document.querySelector('input[name="email"]').value
       )
       formData.append(
        'message',
        document.querySelector('textarea[name="message"]').value
    )
       
       

       fetch("https://getform.io/f/2bb4cf3c-a451-472d-b396-6b27c7c8dd84",
       {
           method: "POST",
           body: formData,
       })
       .then(response => console.log(response))
       .catch(error => console.log(error))
    }


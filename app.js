
window.onload = function() {
    // 1) Render the instance of Formio
    // Formio.setBaseUrl('https://webform-designer-stg.iop.ohio.gov');  
   //Formio.setBaseUrl('https://gczorxncusomhpg.form.io'); 
    Formio.setProjectUrl('https://gczorxncusomhpg.form.io/comment');
    // Formio.setProjectUrl('https://webform-designer-stg.iop.ohio.gov/stageauthoring-odot');
  

    Formio.createForm(document.getElementById('formio'), 'https://gczorxncusomhpg.form.io/commentnested', {
        hooks: {
            // 2) Use hooks to insert the data for Project ID and geo-Location before submitting the data
          beforeSubmit: (submission, next) => {
            // Alter the submission
            submission.data.location = 'Franklin';
            submission.data.projectId = '00001';
            submission.data.status = 'new';
            submission.data.commentType = 'public';
            // Only call next when we are ready to submit
            this.console.log(submission.data);
            next();
            console.log('The form was just submitted!!!');
          }
        }
      }).then(function(form) {
          // 3) Submit the form data
form.on('submit', (submission) => {
    console.log('The form was just submitted!!!');
    console.log(submission);
    console.log(submission.data);
        });
        // 4) Catching errors
form.on('error', (errors) => {
    this.console.log('We have errors!');
        });
//         // 5) If a Thank You page is needed
// // form.on('submitDone', function(completed) {
// //     window.location = './thanks.html';
// // })
//     });
})};

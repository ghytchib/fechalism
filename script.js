
// Small helper: join form behavior
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('joinForm');
  var downloadBtn = document.getElementById('downloadBtn');
  if(form){
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var email = document.getElementById('email').value.trim();
      if(!email) return alert('Please enter an email.');
      // open mail client to send a join request to the community inbox
      var to = 'fechalism@community.org';
      var subject = encodeURIComponent('Join request — Fechalism course');
      var body = encodeURIComponent('Please add me to the Fechalism course list. Email: ' + email);
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
      // Also create a downloadable CSV automatically
      var csv = 'email\n' + email + '\n';
      var blob = new Blob([csv], {type: 'text/csv'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'fechalism_signup_' + Date.now() + '.csv';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); }, 2000);
    });
  }
  if(downloadBtn){
    downloadBtn.addEventListener('click', function(){
      var email = document.getElementById('email').value.trim();
      if(!email) return alert('Enter an email first to download the CSV.');
      var csv = 'email\n' + email + '\n';
      var blob = new Blob([csv], {type: 'text/csv'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'fechalism_signup_' + Date.now() + '.csv';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); }, 2000);
    });
  }
});

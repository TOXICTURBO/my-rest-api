
    const textnya = document.querySelector('.status');
    const warn = document.querySelector('.warn');
    var apikey = document.getElementById("responapikeymucoooookkk")
    const amlert = document.querySelector('.alert-danger');
    apikey.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        document.getElementById("diklikcok").click();
      }
    });

    function sendata() {
      if (apikey.value == '') {
        alert("Enter your apikey!", "", "error");
      } else {
        var xhr = new XMLHttpRequest();
        var url = `/api/cekapikey?apikey=${apikey.value}`;
        xhr.onloadend = function () {

          data = JSON.parse(this.responseText);
          if (data.status == true) {
            textnya.innerHTML = '[ INFO ] Your Apikey status is Active <br><br>' + 'Ip: ' + data.response.ip + '<br>------------------------<br>' + 'nama: ' + data.response.name + '<br>------------------------<br>' + 'email: ' + data.response.email + '<br>------------------------<br>' + 'apikey: ' + data.response.apikey + '<br>------------------------<br>' + 'totalhit: ' + data.response.totalhit + '<br>------------------------<br>' + 'premium: ' + data.response.premium + '<br>------------------------<br>' + 'expired: ' + data.response.expired 

            swal("Apikey valid!", 'Your Apikey status is Active', "success");
            warn.textContent = ''
          } else {
            textnya.textContent = '[ INFO ] Your apikey is invalid!'
            swal("Invalid Apikey!", "", "error");
            alert('Invalid Apikey. Please buy apikey from @toxic_turbo777 instagram');
            amlert.classList.remove('hideop')
          }
        };
        xhr.open("GET", url, true);
        xhr.send();
      }
    } 
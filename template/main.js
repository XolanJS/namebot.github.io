setInterval( async() => {
            if ($("#cbx").prop("checked") == false) return document.getElementById('pay').disabled = true;
            if ($("#cbx").prop("checked") == true) return document.getElementById('pay').disabled = false;
        }, 1)
        document.getElementById('pay').onclick = function() {
            let id = document.getElementById("username").value;
            if (id === "") {
                document.getElementById('username').style.backgroundColor = "#de4747";
                document.getElementById('username').style.transition = 'all ease 500ms';
                setTimeout( async() => {
                    document.getElementById('username').style.backgroundColor = "#3c3c4c";
                    document.getElementById('username').style.transition = 'all ease 500ms';
                }, 2000);
                return;
            }
            let value = document.getElementById("value").value;
            if (value === "") {
                document.getElementById('value').style.backgroundColor = "#de4747";
                document.getElementById('value').style.transition = 'all ease 500ms';
                setTimeout( async() => {
                    document.getElementById('value').style.backgroundColor = "#3c3c4c";
                    document.getElementById('value').style.transition = 'all ease 500ms';
                }, 2000);
                return;
            }
            window.location.href = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79642132266&amountInteger=${value}&amountFraction=0&extra%5B%27comment%27%5D=${id}&currency=643&blocked[0]=account&blocked[1]=sum&blocked[2]=comment`;
        };
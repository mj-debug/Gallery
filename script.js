let information = document.getElementById('home').innerText;
        let image_1 = document.getElementById('img_1');
        let image_2 = document.getElementById('img_2');
        let image_3 = document.getElementById('img_3');
        let image_4 = document.getElementById('img_4');
        let image_5 = document.getElementById('img_5');
        let image_6 = document.getElementById('img_6');
        let image_7 = document.getElementById('img_7');

        img_1.addEventListener('mousemove', () => {
            document.getElementById('home').innerHTML = image_1.alt;
            document.getElementById('home').style.color = 'red';
            document.getElementById('home').style.fontSize = '3em';
        })
        img_1.addEventListener('mouseleave', () => {
            document.getElementById('home').innerHTML = information;
            document.getElementById('home').style.color = 'white';
            document.getElementById('home').style.fontSize = '3em';
        })

        img_2.addEventListener('mousemove', () => {
            document.getElementById('home').innerHTML = image_2.alt;
            document.getElementById('home').style.color = 'lightgrey';
            document.getElementById('home').style.fontSize = '3em';
        })
        img_2.addEventListener('mouseleave', () => {
            document.getElementById('home').innerHTML = information;
            document.getElementById('home').style.color = 'white';
            document.getElementById('home').style.fontSize = '3em';
        })

        img_3.addEventListener('mousemove', () => {
            document.getElementById('home').innerHTML = image_3.alt;
            document.getElementById('home').style.color = 'blueviolet';
            document.getElementById('home').style.fontSize = '3em';
        })
        img_3.addEventListener('mouseleave', () => {
            document.getElementById('home').innerHTML = information;
            document.getElementById('home').style.color = 'white';
            document.getElementById('home').style.fontSize = '3em';
        })

        img_4.addEventListener('mousemove', () => {
            document.getElementById('home').innerHTML = image_4.alt;
            document.getElementById('home').style.color = 'purple';
            document.getElementById('home').style.fontSize = '3em';
        })
        img_4.addEventListener('mouseleave', () => {
            document.getElementById('home').innerHTML = information;
            document.getElementById('home').style.color = 'white';
            document.getElementById('home').style.fontSize = '3em';
        })

        img_5.addEventListener('mousemove', () => {
            document.getElementById('home').innerHTML = image_5.alt;
            document.getElementById('home').style.color = 'green';
            document.getElementById('home').style.fontSize = '3em';
        })
        img_5.addEventListener('mouseleave', () => {
            document.getElementById('home').innerHTML = information;
            document.getElementById('home').style.color = 'white';
            document.getElementById('home').style.fontSize = '3em';
        })

         img_6.addEventListener('mousemove', () => {
            document.getElementById('home').innerHTML = image_6.alt;
            document.getElementById('home').style.color = 'orange';
            document.getElementById('home').style.fontSize = '3em';
        })
        img_6.addEventListener('mouseleave', () => {
            document.getElementById('home').innerHTML = information;
            document.getElementById('home').style.color = 'ginsboro';
            document.getElementById('home').style.fontSize = '3em';
        })

        img_7.addEventListener('mousemove', () => {
            document.getElementById('home').innerHTML = image_7.alt;
            document.getElementById('home').style.color = 'blue';
            document.getElementById('home').style.fontSize = '3em';
        })
        img_7.addEventListener('mouseleave', () => {
            document.getElementById('home').innerHTML = information;
            document.getElementById('home').style.color = 'white';
            document.getElementById('home').style.fontSize = '3em';
        })
$('.myButton').on('click',
    function () {
        $.ajax({
            url: '/url',
            type: 'POST',
            dataType: 'JSON',
            data: {url: $('#newurl').val()},
            success: function(data){

               // console.log(data);
                // display the shortened URL
               var shortUrl = '<a class="result" href="' + data.message + '" target="_blank">http://'+ data.message +'</a>';
                //var shortUrl = data.message;

                $('#link').html(shortUrl);

            }
        });


    });

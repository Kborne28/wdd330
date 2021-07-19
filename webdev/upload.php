<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
    <?php
    /*Get the name of the uploaded file */
    $filename = $_FILES['file']['name'];

    /*Choose where to save the uploaded file */
    $location = "dashboard2.php".$filename;

    /*Save the uploaded file to the local filesystem */
    if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
        echo 'File Uploaded Successfully';
    }else{
        echo 'Error uploading file.';
    }

    



    ?>





    </body>
</html>
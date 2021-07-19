<!DOCTYPE html>
<div lang="en">

<head>
    <link href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/dashboard.css">
    <script src="js/login.js"></script>
    <title>WebDev & Friends</title>
</head>
<header>         

    

       

<WebDev style="color: gray; vertical-align: middle; margin: 5px; font-size: 70px;">WebDev & Friends<br></span>
    
       <span style="color: gray; vertical-align: middle; margin: 5px; font-size: 30px;">Where We Learn From Each Other</span> 



</header>


<div class="topnav">
    <a class="active" href="mainpage.php">Home</a>
    <div class="search-container">
        <form action="/gallery.php">
            <input type="text" placeholder="Search a tutorial" name="search">
        <button type ="submit">Search</button>
    </form>
    </div>
</div>



<body>
 <!-- Sign In portion -->
 <p>
     <div class="container" id="container">
         <div class="form-container sign-up-container">
             <form action="#">
                 <h1 style="color: gray">Create Account</h1>
                 <input type="text" placeholder="First Name" />
                 <input type="text" placeholder="Last Name" />
                 <input type="email" placeholder="Email" />
                 <input type="password" placeholder="Password" />
                 <button type="button" onclick="window.location.href='UserDashboard.php'">Sign Up</button>    
             </form>
         </div>
         <div class="form-container sign-in-container">
             <!--Form action-->
             <form action="dashboard2.php" method="POST" enctype="multipart/form-data">
                 <h1 style="color: gray;">Upload New Tutorial</h1>
                 <input type="text" placeholder="Tutorial Title" />
                 <input type="text" placeholder="Enter a short description" />
                 <lable for="file">Upload File:</lable><br>
                 <input type="file" id="file" name="file" multiple>
                 <input type="submit" value="upload" name="upload1" />
             </form>
           <?php
           if(isset($_POST['upload1']))
           {
               $filepath = "webdev/" . $_FILES["file"]["name"];

               if(move_uploaded_file($_FILES["file"]["tmp_name"], $filepath))
               {
                echo "<img src=".$filepath." height=200 width=300 />";
               }
               else
               {
                   echo "Error !!";
               }
           }
           ?>
            
         </div>
         <!-- Sign Up Portion-->
         <div class="overlay-container">
             <div class="overlay">
                 <div class="overlay-panel overlay-left">
                     <h1>Welcome Back!</h1>
                     <p>To keep connected with us, please login</p>
                     <button class="ghost" id="signIn">Sign In</button>
                 </div>
                 <div class="overlay-panel overlay-right">
                     <h1>User Uploads</h1>
                     <ul class ="outside">
                         <li><a href="#">My Link</a></li>
                         <li><a href="#">My Link</a></li>
                         <li><a href="#">My Link</a></li>
                     </ul><br>
                     <button class="ghost" id="edit">Edit</button> <br>
                     <button class="ghost" id="delete">Delete</button>
                 </div>
             </div>
         </div>
     </div>
 </p> 
      

        


 
   

</body>


<footer>
    &copy2021 WebDev & Friends<br>
</footer>
</html>
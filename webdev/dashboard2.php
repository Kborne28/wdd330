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
             <form action="gallery.php" method="post" enctype="multipart/form-data">
                 <h1 style="color: gray;">Upload New Tutorial</h1>
                 <input type="text" placeholder="Tutorial Title" />
                 <input type="text" placeholder="Enter a short description" />
                 <lable for="file">Upload File:</lable><br>
                 <input type="file" id="fileToUpload" name="fileToUpload" multiple>
                 <input type="submit" value="Upload Image" name="submit" />
             </form>
         
            
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
                     <ul class ="outside" id="list">
                         <li><a href="#">Intro to php</a></li>
                         <li><a href="#">JavaScript pt 2</a></li>
                         <li><a href="#">My guide to CSS</a></li>
                     </ul><br>
                     <button class="ghost" onclick="editLI()" id="edit">Edit</button> <br>
                     <button class="ghost" onclick="deleteLI()" id="delete">Delete</button>
                 </div>
             </div>
         </div>
     </div>
 </p> 
      
<script>
    var inputText=document.getElementById()
</script>
        


 
   

</body>


<footer>
    &copy2021 WebDev & Friends<br>
</footer>
</html>
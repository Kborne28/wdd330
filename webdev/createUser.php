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
     
         <div class="form-container sign-in-container">
             <!--Form action-->
             <form action="dashboard2.php" method="POST" enctype="multipart/form-data">
                 <h1 style="color: gray;">Welcome to WebDev!</h1>
                 <input type="text" placeholder="First Name" />
                 <input type="text" placeholder="Last Name" />
                 <input type="email" placeholder="Email" />
                 <input type="password" placeholder="Password"/>
                 <button type="button" onclick="window.location.href='dashboard2.php'">Sign Up</button>
             </form>
           
            
         </div>
        
         <div class="overlay-container">
             <div class="overlay">
                 
                 <div class="overlay-panel overlay-right">
                     <h1>We're excited you're here.</h1>
                   
             
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
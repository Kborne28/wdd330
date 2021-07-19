<!DOCTYPE html>
<div lang="en">

<head>
    <link href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <script src="js/login.js"></script>
    <title>WebDev & Friends</title>
</head>
<header>         

    

       

<WebDev style="color: gray; vertical-align: middle; margin: 5px; font-size: 70px;">WebDev & Friends<br></span>
    
       <span style="color: gray; vertical-align: middle; margin: 5px; font-size: 30px;">Where We Learn From Each Other</span> 



</header>
<body>
 <!-- Sign In portion -->
 <p>
     <div class="container" id="container">
         <div class="form-container sign-up-container">
             <form action="createUser.php" method="post">                   
                 <h1 style="color: gray">Create Account</h1>
                 <input type="text" placeholder="First Name" />
                 <input type="text" placeholder="Last Name" />
                 <input type="email" placeholder="Email" />
                 <input type="password" name="password" placeholder="Password" minlength="8"/>
                 
                 <button type="button" onclick="window.location.href='createUser.php'">Does this work/button>    
             </form>
         </div>
         <div class="form-container sign-in-container">
             <!--Form action-->
             <form>
                 <h1 style="color: gray;">Sign In</h1>
                 <input type="email" placeholder="Email" />
                 <input type="password" placeholder="Password" />
                 
                 <button type="button" onclick="window.location.href='dashboard2.php'" class="button">Sign In</button>
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
                     <h1>Welcome to WebDev!</h1>
                     <p>Enter your information to create an account</p>
                     <button type="button" onclick="window.location.href='createUser.php'" class="button">Sign Up</button>
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
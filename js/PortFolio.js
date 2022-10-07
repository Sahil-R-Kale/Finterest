$(document).ready(function(){
    
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
        
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
    
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            }, 
            duration: 500
        });
        setProgressBar(++current);
    });
    
    $(".previous").click(function(){
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show();
    
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
    
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            }, 
            duration: 500
        });
        setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
          .css("width",percent+"%")   
    }
    
    $(".submit").click(function(){
        return false;
    })
        
    });

    var firstName;
    var lastName;
    var aadharUIDNumber;
    var Age;
    var ContactNumber;
    var AlterContactNumber;
    function PersonalInfo()
    {
        firstName=document.getElementById("fname").value; 
        lastName=document.getElementById("lname").value; 
        aadharUIDNumber=document.getElementById("aadhar").value; 
        Age=document.getElementById("age").value; 
        ContactNumber=document.getElementById("phno").value; 
        AlterContactNumber=document.getElementById("phno_2").value;
        console.log(firstName); 
        console.log(lastName); 
        console.log(aadharUIDNumber)
        console.log(ContactNumber); 
        console.log(AlterContactNumber); 
        
    }

    var Country;
    var State;
    var City;
    var Pincode;
    var Address1;
    var Address2;
    function AddressInfo()
    {
        Country=document.getElementById("country").value;
        State=document.getElementById("state").value;
        City=document.getElementById("city").value;
        Pincode=document.getElementById("pincode").value;
        Address1=document.getElementById("address1").value;
        Address2=document.getElementById("address2").value;
        console.log(Country);
        console.log(State);
        console.log(City);
        console.log(Pincode);
        console.log(Address1);
        console.log(Address2);
    }

    var Email;
    var Username;
    var Password;
    var ConfirmPassword;
    function AccountInfo()
    {
        Email=document.getElementById("email").value;
        Username=document.getElementById("username").value;
        Password=document.getElementById("password").value;
        ConfirmPassword=document.getElementById("cpassword").value;
        console.log(Email);
        console.log(Username);
        console.log(Password);
        console.log(ConfirmPassword);
    }

    var Salary;
    var Bonuses;
    var Real_estate_returns;
    var Gold;

    var HouseholdExpenses;
    var Utilities;
    var Rent;
    var Insurance;
    var Medical;
    var Miscellaneous

    // Input Information
    // var aVal;
    // var bVal;
    // var cVal;
    // var dVal;
    // var eVal;
    // function InputInfo()
    // {
    //     Salary=document.getElementById("salary").value;
    //     Bonuses=document.getElementById("bonuses").value;
    //     Real_estate_returns=document.getElementById("real_estate_returns").value;
    //     Gold=document.getElementById("gold").value;
    //     console.log(Salary);
    //     console.log(Bonuses);
    //     console.log(Real_estate_returns);
    //     console.log(Gold);

    //     HouseholdExpenses=document.getElementById("household").value;
    //     Utilities=document.getElementById("utilities").value;
    //     Rent=document.getElementById("rent").value;
    //     Insurance=document.getElementById("insurance").value;
    //     Medical=document.getElementById("medical").value;
    //     Miscellaneous=document.getElementById("miscellaneous").value;
    //     console.log(HouseholdExpenses);
    //     console.log(Utilities);
    //     console.log(Rent);
    //     console.log(Insurance);
    //     console.log(Medical);
    //     console.log(Miscellaneous);

    //     aVal=document.getElementById("a").value;
    //     bVal=document.getElementById("b").value;
    //     cVal=document.getElementById("c").value;
    //     dVal=document.getElementById("d").value;
    //     eVal=document.getElementById("e").value;
    //     console.log(aVal);
    //     console.log(bVal);
    //     console.log(cVal);
    //     console.log(dVal);
    //     console.log(eVal);
    // }

    // Slider
    var slider1 = document.getElementById("myRange1");
    var output1 = document.getElementById("demo1");
    output1.innerHTML = slider1.value;
    slider1.oninput = function() {
    output1.innerHTML = this.value;
    }
    var slider2 = document.getElementById("myRange2");
    var output2 = document.getElementById("demo2");
    output2.innerHTML = slider2.value;
    slider2.oninput = function() {
        output2.innerHTML = this.value;
    }

    var slider3 = document.getElementById("myRange3");
    var output3 = document.getElementById("demo3");
    output3.innerHTML = slider3.value;
    slider3.oninput = function() {
        output3.innerHTML = this.value;
    }

    var slider4 = document.getElementById("myRange4");
    var output4 = document.getElementById("demo4");
    output4.innerHTML = slider4.value;
    slider4.oninput = function() {
        output4.innerHTML = this.value;
    }

    var slider5 = document.getElementById("myRange5");
    var output5 = document.getElementById("demo5");
    output5.innerHTML = slider5.value;
    slider5.oninput = function() {
        output5.innerHTML = this.value;
    }

    var slider6 = document.getElementById("myRange6");
    var output6 = document.getElementById("demo6");
    output6.innerHTML = slider6.value;
    slider6.oninput = function() {
        output6.innerHTML = this.value;
    }
    


console.log("hello from javascript");

// Put all onload AJAX calls here, and event listeners
jQuery(document).ready(function () {
    window.onload = (event) => {
        $('.allCards').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window >= (bottom_of_object)){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 

        $('.introFade1').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window >= (bottom_of_object)){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 

        $('.introFade2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window >= (bottom_of_object)){
                
                $(this).animate({'opacity':'1'},1400);
                    
            }
            
        }); 

        $('.introFade3').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window >= (bottom_of_object)){
                
                $(this).animate({'opacity':'1'},1700);
                    
            }
            
        }); 
      };


    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        

        /* Check the location of each desired element */
        $('.fade').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 3000)){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 

        $('.fade2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 3000)){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 

        $('.fade3').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 3000)){
                
                $(this).animate({'opacity':'1'},700);
                    
            }
            
        }); 

        $('.fade4').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 3000)){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 

        $('.fade5').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 3000)){
                
                $(this).animate({'opacity':'1'},1100);
                    
            }
            
        }); 

        $('.middleFade').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 3500)){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
        $('.middleFade2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 3500)){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
            
        }); 

        $('.sectionFade1').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 2500)){
                
                $(this).animate({'opacity':'1'},1700);
                    
            }
            
        }); 

        $('.sectionFade2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 2500)){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 

        $('.sectionFade3').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object + 2500)){
                
                $(this).animate({'opacity':'1'},2300);
                    
            }
            
        }); 
    
    });


    // On page-load AJAX Example
    jQuery.ajax({
      type: 'get',            //Request type
      dataType: 'json',       //Data type - we will use JSON for almost everything
      url: '/getFiles',   //The server endpoint we are connecting to
      data: {
        data1: "Value 1",
        data2: 1234.56
      },
      success: function (data) {
        /*  Do something with returned object
            Note that what we get is an object, not a string,
            so we do not need to parse it on the server.
            JavaScript really does handle JSONs seamlessly
        */
        console.log(data);

        var objectArr = {

        };


        // USE THIS DATA FOR ANALYTICS

        for(i = 0; i < data.ageGroupData.length; i++){
            objectArr[i] = {user: data.userList[i], ageRange: data.ageGroupData[i], genderInfo: data.genderData[i], numFollowers: data.followerCountList[i].toString(), engagementData: data.engagementRateData[i].toString(), averageNumLikes: data.avgLikesData[i].toString()};
            console.log(objectArr[i]);
        }


        var cardSection = document.querySelector(".allCards");

        for(i = 0; i < data.ageGroupData.length; i++){
            
          var newDiv = document.createElement("div");
          newDiv.style.backgroundColor = "#FFFFFF";
          newDiv.style.margin = "10px";
          newDiv.style.marginLeft = "240px";
          newDiv.style.width = "847px";
          newDiv.style.height = "119px";
          newDiv.style.color = "black";


          var fileTitle = document.createElement("h3");
          fileTitle.style.fontWeight = "bold";
          fileTitle.style.fontSize = "16px";
          fileTitle.style.position = "relative";
          fileTitle.style.top = "20px";
          fileTitle.style.left = "50px";


          var text = document.createTextNode("Username");
          fileTitle.appendChild(text);
          newDiv.appendChild(fileTitle);

          // adding the file name

          var theName = document.createElement("p");
          theName.style.fontSize = "12px";
          theName.style.position = "relative";
          theName.style.top = "20px";

          theName.style.left = "0px";

          var fileNameText = document.createTextNode(data.userList[i]);
          theName.appendChild(fileNameText);


          fileTitle.appendChild(theName);
          newDiv.appendChild(fileTitle);

          // version
          var fileVersion = document.createElement("h3");
          fileVersion.style.fontWeight = "bold";
          fileVersion.style.fontSize = "16px";
          fileVersion.style.position = "relative";
          fileVersion.style.top = "-28px";
          fileVersion.style.left = "170px";

          var secondText = document.createTextNode("Followers");
          fileVersion.appendChild(secondText);

          // adding the file version
          var versionText = document.createElement("p");
          versionText.style.fontSize = "12px";
          versionText.style.position = "relative";
          versionText.style.top = "18px";
          versionText.style.left = "20px";

          var theVersionText = document.createTextNode(data.followerCountList[i].toString());
          versionText.append(theVersionText);

          fileVersion.appendChild(versionText);
          newDiv.appendChild(fileVersion);

          // creator
          var fileCreator = document.createElement("h3");
          fileCreator.style.fontWeight = "bold";
          fileCreator.style.fontSize = "16px";
          fileCreator.style.position = "relative";
          fileCreator.style.top = "-78px";
          fileCreator.style.left = "270px";

          var thirdText = document.createTextNode("Gender");
          fileCreator.appendChild(thirdText);

          // adding the creator text
          var creatorText = document.createElement("p");
          creatorText.style.fontSize = "12px";
          creatorText.style.position = "relative";
          creatorText.style.top = "18px";
          creatorText.style.left = "0px";

          var theCreatorText = document.createTextNode(data.genderData[i]);
          creatorText.appendChild(theCreatorText);

          fileCreator.appendChild(creatorText);

          newDiv.appendChild(fileCreator);

          var element = document.querySelector(".allCards");
          element.appendChild(newDiv);

          // Number of Waypoints
          var numWaypoints = document.createElement("h3");
          numWaypoints.style.fontWeight = "bold";
          numWaypoints.style.fontSize = "16px";
          numWaypoints.style.position = "relative";
          numWaypoints.style.top = "-127px";
          numWaypoints.style.left = "370px";

          var fourthText = document.createTextNode("Engagement Rate");
          numWaypoints.appendChild(fourthText);

          // adding the waypoints text
          var waypointText = document.createElement("p");
          waypointText.style.fontSize = "12px";
          waypointText.style.position = "relative";
          waypointText.style.top = "18px";
          waypointText.style.left = "35px";

          var sampleWptText = document.createTextNode(data.engagementRateData[i].toString());
          waypointText.appendChild(sampleWptText);
          numWaypoints.appendChild(waypointText);

          newDiv.appendChild(numWaypoints);

          var element = document.querySelector(".allCards");
          element.appendChild(newDiv);

          // Number of Routes
          var numRoutes = document.createElement("h3");
          numRoutes.style.fontWeight = "bold";
          numRoutes.style.fontSize = "16px";
          numRoutes.style.position = "relative";
          numRoutes.style.top = "-175px";
          numRoutes.style.left = "560px";

          var fifthText = document.createTextNode("Avg Likes");

          // adding the routes text

          var routesText = document.createElement("p");
          routesText.style.fontSize = "12px";
          routesText.style.position = "relative";
          routesText.style.top = "18px";
          routesText.style.left = "25px";

          var sampleRteText = document.createTextNode(data.avgLikesData[i].toString());
          routesText.appendChild(sampleRteText);

          numRoutes.appendChild(fifthText);
          numRoutes.appendChild(routesText);
          newDiv.appendChild(numRoutes);



          var element = document.querySelector(".allCards");
          element.appendChild(newDiv);

          // Number of Tracks
          var numTracks = document.createElement("h3");
          numTracks.style.fontWeight = "bold";
          numTracks.style.fontSize = "16px";
          numTracks.style.position = "relative";
          numTracks.style.top = "-223px";
          numTracks.style.left = "670px";

          var sixthText = document.createTextNode("Media Type");

          // adding the tracks text
          var trackText = document.createElement("p");
          trackText.style.fontSize = "12px";
          trackText.style.position = "relative";
          trackText.style.top = "18px";
          trackText.style.left = "20px";

          var sampleTrkText = document.createTextNode(data.mediaType[i]);
          trackText.appendChild(sampleTrkText);

          numTracks.appendChild(sixthText);
          numTracks.appendChild(trackText);
          newDiv.appendChild(numTracks);

          // numTracks.appendChild(sixthText);

          newDiv.appendChild(numTracks);



          var element = document.querySelector(".allCards");
          element.appendChild(newDiv);
        }
        

        // PERFORM ANALYTIC CALCULATIONS HERE

        // get average number of followers per user
        // get average number of likes per user
        // get average engagement per user 
        // display who has the highest engagement 
        // display highest amount of followers 
        // display highest amount of likes 

        var maxFollowers = 0;
        var nameOfMaxFollowers = "";

        var followersList = data.followerCountList;
        var namesList = data.userList;
        let followerMap = new Map();
        let likeMap = new Map();
        let engagementMap = new Map();

        for(i = 0; i < followersList.length; i++){
            followersList[i] = followersList[i].toString();
            followersList[i] = parseInt(followersList[i]); 

            followerMap.set(data.followerCountList[i], data.userList[i]);
            likeMap.set(data.avgLikesData[i], data.userList[i]);
            engagementMap.set(data.engagementRateData[i], data.userList[i]);
        }

        // merge sort call
        jQuery.ajax({
            type: 'get',            //Request type
            dataType: 'json',       //Data type - we will use JSON for almost everything
            url: '/mergeSort',   //The server endpoint we are connecting to
            data: {
            data1: followersList,
            data2: data.avgLikesData,
            data3: data.engagementRateData
            },
            success: function (data) {

                
                var i = 0;

                for(i = 0; i < data.likesSorted.length; i++){
                    console.log("SORTED ENGAGEMENTS: " + data.sortedEngagements[i]);
                }

                if(followerMap.has(data.resultsList[data.resultsList.length - 1])){
                    console.log("USERNAME: " + followerMap.get(data.resultsList[data.resultsList.length - 1]) + "FOLLOWERS: " + data.resultsList[data.resultsList.length - 1]);
                    // GET TOP THREE HIGHEST FOLLOWERS AND ADD TO HTML
                    var spanElement = document.querySelector(".mostFollowers");
                    spanElement.innerHTML = data.resultsList[data.resultsList.length - 1].toString();
                    document.getElementById("mostUsername").innerHTML = "Username: " + followerMap.get(data.resultsList[data.resultsList.length - 1]); 
                    document.getElementById("followerSummary").innerHTML =  followerMap.get(data.resultsList[data.resultsList.length - 1]) + " has the most followers. Check out the runner ups as well!";
                   // GET TOP THREE LOWEST USERS AND ADD TO HTML
                   document.getElementById("numSeven").innerHTML = "1. Username: " +  followerMap.get(data.resultsList[data.resultsList.length - 1]) + " Followers: " +  data.resultsList[data.resultsList.length - 1].toString();
                   document.getElementById("numEight").innerHTML = "2. Username: " +  followerMap.get(data.resultsList[data.resultsList.length - 2]) + " Followers: " +  data.resultsList[data.resultsList.length - 2].toString();
                   document.getElementById("numNine").innerHTML = "3. Username: " +  followerMap.get(data.resultsList[data.resultsList.length - 3]) + " Followers: " +  data.resultsList[data.resultsList.length - 3].toString();

                   document.querySelector(".mostLikes").innerHTML = data.likesSorted[data.likesSorted.length - 1];
                   document.getElementById("mostLikesId").innerHTML = "Username: " + likeMap.get(data.likesSorted[data.likesSorted.length - 1]);
                    document.getElementById("likesSummary").innerHTML = likeMap.get(data.likesSorted[data.likesSorted.length - 1]) + " has the most average likes among users. Check out the runner ups as well!";

                    document.getElementById("numFour").innerHTML = "1. Username: " +  likeMap.get(data.likesSorted[data.likesSorted.length - 1]) + " Likes: " +  data.likesSorted[data.likesSorted.length - 1].toString();
                     document.getElementById("numFive").innerHTML = "2. Username: " +  likeMap.get(data.likesSorted[data.likesSorted.length - 2]) + " Likes: " +  data.likesSorted[data.likesSorted.length - 2].toString();
                     document.getElementById("numSix").innerHTML = "3. Username: " +  likeMap.get(data.likesSorted[data.likesSorted.length - 3]) + " Likes: " +  data.likesSorted[data.likesSorted.length - 3].toString();

                    document.querySelector(".mostEngagement").innerHTML = data.sortedEngagements[data.sortedEngagements.length - 1];
                    document.getElementById("mostEngaged").innerHTML = "Username: " + engagementMap.get(data.sortedEngagements[data.sortedEngagements.length - 1]);
                     document.getElementById("engagementSummary").innerHTML = engagementMap.get(data.sortedEngagements[data.sortedEngagements.length - 1]) + " has the highest engagement among users. Check out the runner ups as well!";

                     document.getElementById("numOne").innerHTML = "1. Username: " +  engagementMap.get(data.sortedEngagements[data.sortedEngagements.length - 1]) + " Engagements: " +  data.sortedEngagements[data.sortedEngagements.length - 1].toString();
                     document.getElementById("numTwo").innerHTML = "2. Username: " +  engagementMap.get(data.sortedEngagements[data.sortedEngagements.length - 2]) + " Engagements: " +  data.sortedEngagements[data.sortedEngagements.length - 2].toString();
                     document.getElementById("numThree").innerHTML = "3. Username: " +  engagementMap.get(data.sortedEngagements[data.sortedEngagements.length - 3]) + " Engagements: " +  data.sortedEngagements[data.sortedEngagements.length - 3].toString();
                }
            }
        });

        maxFollowers = objectArr[0].numFollowers;
        nameOfMaxFollowers = objectArr[0].user;

                  // statistics call
        jQuery.ajax({
            type: 'get',            //Request type
            dataType: 'json',       //Data type - we will use JSON for almost everything
            url: '/getStats',   //The server endpoint we are connecting to
            data: {
            data1: followersList,
            data2: data.engagementRateData
            },
            success: function (returnData) {
                console.log(returnData.tempArray);
                console.log(typeof returnData.tempArray);
                var result = Object.keys(returnData.tempArray).map((key) => [Number(key), returnData.tempArray[key]]);

                console.log(typeof result);

                google.charts.load('current', {'packages':['scatter']});
                google.charts.setOnLoadCallback(drawChart);
          
                function drawChart () {
          
                  var data = new google.visualization.DataTable();
                  data.addColumn('number', 'Hours Studied');
                  data.addColumn('number', 'Followers');
          
                  data.addRows(returnData.tempArray);
          
                  var options = {
                    width: 800,
                    height: 500,
                    chart: {
                      title: 'Engagement Rate Vs. Followers Comparison',
                      subtitle: 'based on data per user'
                    },
                    hAxis: {title: 'Engagement Rate'},
                    vAxis: {title: 'Number of Followers'}
                  };
          
                  var chart = new google.charts.Scatter(document.getElementById('scatterchart_material'));
          
                  chart.draw(data, google.charts.Scatter.convertOptions(options));

                }

                console.log( returnData.linearRegInfo + " avg" + returnData.followerAvg + " avg" + returnData.engagementAvg + " sd" + returnData.numFollowersSD + " sd" + returnData.engagementSD);
                document.querySelector(".followMean").innerHTML = "Follower Mean: " + returnData.followerAvg;
                document.querySelector(".engageMean").innerHTML = "Engagement Mean: " + returnData.engagementAvg;
                document.querySelector(".followSD").innerHTML = "Follower Standard Deviation: " + returnData.numFollowersSD;
                document.querySelector(".engageSD").innerHTML = "Engagement Standard Deviation: " + returnData.engagementSD;
                document.querySelector(".showSlope").innerHTML = "Y = " + returnData.linearRegInfo.m + "x + " + returnData.linearRegInfo.b;
            }  
        });
    
  
      },
      fail: function (error) {
        // Non-200 return, do something with error
        $('#blah').html("On page load, received error from server");
        console.log(error);
      },
    });
});  

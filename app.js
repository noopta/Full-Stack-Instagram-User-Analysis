// Imports

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ss = require('simple-statistics');
const fs = require('fs');

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('', (req,res) => {
    res.render('index', {text: 'This is EJS'});
});

app.get('/about', (req,res) => {
    res.render('about', {text: 'About Page'});
});



// code for parsing the CSV file

const csv = require('csv-parser');


const filePath = path.join(__dirname, 'Chartmetric_Take_Home_Assignment_Sample_Data_Set.csv');
var i = 0;
var profileObj;
var parsObj;

app.get('/mergeSort', function (req, res) {


      
    function mergeSort (arr) {    
        if (arr.length < 2) return arr;
    
        var mid = Math.floor(arr.length /2);
        var subLeft = mergeSort(arr.slice(0,mid));
        var subRight = mergeSort(arr.slice(mid));
    
        return merge(subLeft, subRight);
    }
    
    function merge (a,b) {
        var result = [];
        while (a.length >0 && b.length >0)
            result.push(a[0] < b[0]? a.shift() : b.shift());
        return result.concat(a.length? a : b);
    }
    
      
    var tempNumList = req.query.data1;
    var tempLikeList = req.query.data2;
    var engagementList = req.query.data3;
    var i = 0;

    for(i = 0; i < tempNumList.length; i++){
        tempNumList[i] = parseInt(tempNumList[i]);
        tempLikeList[i] = parseInt(tempLikeList[i]);
        console.log(typeof engagementList[i]);
        engagementList[i] = parseFloat(engagementList[i]);
        console.log(typeof engagementList[i]);
    }

    res.send({
        resultsList: mergeSort(tempNumList),
        likesSorted: mergeSort(tempLikeList),
        sortedEngagements: mergeSort(engagementList)
        });

  });

  app.get('/getStats', function (req, res) {

    var tempArr = [];
    var followerTemp = [];
    var engageTemp = [];
    console.log("ARRAY" + typeof tempArr);
    var i = 0;
    //tempArr.push(['Engagement Rate', 'Number of Likes' ]);
    for(i = 0; i < req.query.data1.length; i++){
        tempArr.push([parseFloat(req.query.data2[i]), parseInt(req.query.data1[i])]);
        
        followerTemp[i] = parseInt(req.query.data1[i]);
        engageTemp[i] = parseFloat(req.query.data2[i]);
    }
    console.log(tempArr);
    var linearReg = ss.linearRegression(tempArr);
    var followerMean = ss.mean(followerTemp);
    var engagementMean = ss.mean(engageTemp);
    var followerSD = ss.standardDeviation(followerTemp);
    var engageSD = ss.standardDeviation(engageTemp);

    res.send({
        tempArray: tempArr,
        linearRegInfo: linearReg,
        followerAvg: followerMean,
        engagementAvg: engagementMean,
        numFollowersSD: followerSD,
        engagementSD: engageSD
        });

  });
  
  


  app.get('/getFiles', function (req, res) {

    const type = [];
    const userNames = [];
    const ageGroup = [];
    const gender = [];
    const followerCount = [];
    const engagementRate = [];
    const avgLikes = [];

    // do this on function call (page load)
    fs.createReadStream('Chartmetric_Take_Home_Assignment_Sample_Data_Set.csv')
    .pipe(csv())
    .on('data', (data) => {
    /* data would be something like :
        { '2': 'Why we use bottels?', '1 ': 'How do I change my password? ' }
    */
    //console.log(data.content);
    parseObj = JSON.parse(data.content);

    profileObj = parseObj["user_profile"];
    //console.log(profileObj);
    //  console.log("type: " + profileObj["type"] + " username: " + profileObj["username"] + " age_group: " + profileObj["age_group"] + " gender: " + profileObj["gender"] + " followers: " +  profileObj["followers"] +  " engagement_rate: " + profileObj["engagement_rate"] + " avg_likes: " + profileObj["avg_likes"]);
    
    type[i] = profileObj["type"];
    userNames[i] = profileObj["username"];
    ageGroup[i] = profileObj["age_group"];
    gender[i] = profileObj["gender"];
    followerCount[i] = profileObj["followers"];
    engagementRate[i] = profileObj["engagement_rate"];
    avgLikes[i] = profileObj["avg_likes"];
    i++;
    })
    .on('end', () => {
        for(var i = 0; i < type.length; i++){
            console.log(type[i]);
            console.log(userNames[i]);
            console.log(ageGroup[i]);
            console.log(gender[i]);
            console.log(followerCount[i]);
            console.log(engagementRate[i]);
            console.log(avgLikes[i]);
        }

        res.send({
            mediaType: type,
            userList: userNames,
            ageGroupData: ageGroup,
            genderData: gender,
            followerCountList: followerCount,
            engagementRateData: engagementRate,
            avgLikesData: avgLikes
          });
    });


  });
  


// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));
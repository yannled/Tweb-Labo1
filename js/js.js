var likesA = 0;
var followersA = 0;
var commentsA = 0;

var likesB = 0;
var followersB = 0;
var commentsB = 0;

var fieldLikeA = document.getElementById('likeA');
var fieldCommentA = document.getElementById('commentA');
var fieldFollowerA = document.getElementById('followerA');


var fieldLikeB = document.getElementById('likeB');
var fieldCommentB = document.getElementById('commentB');
var fieldFollowerB = document.getElementById('followerB');

// Get the modal
var modal = document.getElementById('myModal');

//get comment bloc
var commentA = document.getElementById('blocCommentA');
var commentB = document.getElementById('blocCommentB');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function addLike(who) {
    if (who === "A") {
        likesA++;
        fieldLikeA.textContent = likesA;
    }
    else {
        likesB++;
        fieldLikeB.textContent = likesB;
    }
}

function addFollower(who) {
    if (who === "A") {
        followersA++;
        fieldFollowerA.textContent = followersA;
    }
    else {
        followersB++;
        fieldFollowerB.textContent = followersB;
    }
}

function addComment(who) {
    if (who === "A") {
        commentsA++;
        fieldCommentA.textContent = commentsA;
    }
    else {
        commentsB++;
        fieldCommentB.textContent = commentsB;
    }
    modal.style.display = "block";
}

// MODAL

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function submit() {
    var name = document.getElementById("formName").value;
    var content = document.getElementById("formContent").value;


    document.getElementById("nameA").textContent = name;
    document.getElementById("contentA").textContent = content;
    modal.style.display = "none";
    commentA.style.display = "flex";
}
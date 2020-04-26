import React, { useState,useEffect } from "react";
import PropTypes, { string } from "prop-types";



CourseFrame = (lessons) => {




return(
{
<div class= "container-fluid">
    


    <%= react_component("LessonInfo", { lesson: lesson, index: index, listed: true}) %>

    <br/>

    <div class="container-fluid">
    <button class="btn tmc-bg-dk-blu tmc-white btn-block btn-sm" type="button" data-toggle="collapse"  data-target="#collapse-lesson<%= index %>" aria-expanded="false" aria-controls="collapse-lesson<%= index %>">
        <div style="white-space: pre;"><sub><small> &#x25bc;</small></sub>           See Lesson            <sub><small>&#x25bc;</small></sub></div>
    </button> 
    </div>

    <hr/>

    <div class="collapse container-fluid" id= "collapse-lesson<%= index %>" data-parent="">
    <%= react_component("LessonFrame", { lesson: lesson, index: index, lessonChallenges: lesson.challenges}) %>
    </div>

    <br>


</div>
<% end %>}


);}


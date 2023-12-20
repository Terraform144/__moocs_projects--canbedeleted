<?php 

$style = <<<EOF
@charset "UTF-8";
    
    body{
        font-size:13px;
        font: sans-serif;
    }

    .forecast {
        margin: 0;
        padding: .3rem;
        background-color: #eee;
        width:300px;
        float:left;
    }
    
    .forecast > h1,
    .day-forecast {
        margin: .5rem;
        padding: .3rem;
    }
    
    .day-forecast img {
        width:280;
    }

    .day-forecast > h2,
    .day-forecast > p {
        margin: .2rem;
        text-align: left;
        font-size:15px;
    }
    
    #list {
        display: inline-block;
        float:left;
    }
    #detail {
        display: inline-block;
        float:left;padding:10px;
        font-size:15px;
    }
    #rssList {
        display: inline-block;
        float:left;padding:30px;
        font-size:15px;
    }
EOF;

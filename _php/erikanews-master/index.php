<?php

    require "config.php";
    
    require "vendor/autoload.php";
    
    require "core/article.lalibre.php";
    require "core/article.levif.php";
    require "core/article.septsur7.php";
    require "core/article.lavenir.php";
    
    require "core/ErikaNews.php";
    require "css/style.css.php";
    
    use lalibre\Lalibre as ll;
    use levif\LeVif as lv;
    use septsur7\Septsur7 as ss7;
    use lavenir\Lavenir as la;
    
    // core
    use erika\ErikaNews as erika;
    
    $url = "http" . (($_SERVER['SERVER_PORT'] == 443) ? "s" : "") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    
 #container
    $top_html = '<html><head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
            
            <script>
                jQuery.noConflict();
            </script><style>'.$style.'</style>
            </head><body>
            
            <form id="url_form" action="" method="post"><input id="url_data" type="hidden" name="url" value="" /><input id="page_position" type="hidden" name="page_position" value="" /></form>';
    
    $bottom_html = '</body></html>';
    
#main page start
    echo $top_html;
    
    // dispatch the news class
    switch( true )
    {
        case preg_match('/lalibre/', $url):
            $laLibre = new ll();
            $laLibre->get_list($_GET['url']);
            break;
        case preg_match('/levif/', $url):
            $levif = new lv();
            $levif->get_list($_GET['url']);
            break;
        case preg_match('/7sur7/', $url):
            $septsur7 = new ss7();
            $septsur7->get_list($_GET['url']);
            break;
        case preg_match('/lavenir/', $url):
            $lavenir = new la();
            $lavenir->get_list($_GET['url']);
            break;
    }
    
 #entries


    /*
<frameset cols="25%,*,25%">
  <frame src="frame_a.htm">
  <frame src="frame_b.htm">
  <frame src="frame_c.htm">
</frameset>
     */
    
    if( isset($_POST["url"]) ) {// service entry

        echo "<div id='detail' style='width:700'>";
        
        
        switch( true )
        {
            case preg_match('/lalibre/', $url):
                include "services/lalibre.php";
                break;
            case preg_match('/levif/', $url):
                include "services/levif.php";
                break;
            case preg_match('/7sur7/', $url):
                include "services/septsur7.php";
                break;
            case preg_match('/lavenir/', $url):
                include "services/lavenir.php";
                break;
        }
        
        echo "</div>";
        
        
        
	}
	
	{ // get rss list
	    
	    echo "<div id='rssList'>";
	    $erika = new erika($url);
	    $erika->getFormattedRssList($RSS);
	    echo '</div>';
	    
	}
	
#end page
	echo $bottom_html;
?>
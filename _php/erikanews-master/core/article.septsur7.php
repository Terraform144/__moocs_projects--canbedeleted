<?php

namespace septsur7;

use Zend\Dom\Query;

use ErrorException;

class Septsur7
{
    public function __construct(){}
    private $xml = null;
    
    public function get_article($url)
    {
        if($url) {
            $this->xml = file_get_contents($url);
            $dom = new Query($this->xml);
            //$result_site = $dom->queryXpath("//p");
            //$result_img = $dom->queryXpath("//img[@src]")
            
            /*
            $site_content = '';
            foreach($result_site as $result_site_content)
            {
                $site_content .= '<p>'.$result_site_content->textContent.'</p>';
            }
            
            echo '<script>document.getElementById("'.$_POST['page_position'].'").scrollIntoView();</script><br/>'.$this->remove_junks($site_content);
            */
            echo '(<a href="'.$url.'">'.$url.'</a>)';
            
        } else {
            echo 'error : no url passed';
        }
    }
    
    private function remove_junks($content_str)
    {
        return $content_str;
    }
    
    public function get_list($rss = null)
    {   
        // todo new template of rss
        $this->xml =  file_get_contents($rss);
        
        $dom = new Query($this->xml);
        $results = $dom->execute('item');
        $images = $dom->queryXpath("//media:content[@url]");
        try {
            $count = count($results);
            $i=0;
            echo '<div id="list" style="width:320px;overflow-y:scroll; overflow-x:hidden; height:100%;">';
            foreach ($results as $result) {
                
                $titre = $result->childNodes->item(1);
                $description = $result->childNodes->item(5);
                $j=0;
                foreach ($images as $res) {
                    if( $j == $i ) {
                        $img = '<img width="300" src="'.$res->getAttribute('url').'"/>';
                    }
                    $j++;
                }
                $inject_script = 'jQuery("#url_data").val("'.$result->childNodes->item(3)->textContent.'");document.getElementById("url_form").submit();';
                
                echo "<article class='forecast' onclick='".$inject_script."'>";
                echo "<h3>".$titre->nodeValue."</h3>";
                echo "<article class='day-forecast'><p>".$img.$description->textContent."</p></article>";
                echo "</article>";
                $i++;
            }
            echo '</div>';
        } catch(ErrorException $e) {
            echo $e;
        }
    }
}
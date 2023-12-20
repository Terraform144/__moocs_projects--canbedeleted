<?php

namespace lavenir;

use Zend\Dom\Query;

use ErrorException;
use erika\ErikaNews;

class Lavenir
{
    public function __construct(){}
    private $xml = null;
    
    public function get_article($url)
    {
        if($url) {
            $this->xml = file_get_contents($url);
            $dom = new Query($this->xml);
            $result_site = $dom->queryXpath("//div/p");
            $result_img = $dom->queryXpath("//img[@src]");
            $site_content = '';
            foreach($result_site as $result_site_content)
            {
                $site_content .= '<p>'.$result_site_content->textContent.'</p>';
            }
            $i=0;
            foreach ($result_img as $res) {
                if($i++==2) echo '<img width="700" src="'.$res->getAttribute('src').'"/>';
            }
            echo '<script>document.getElementById("'.$_POST['page_position'].'").scrollIntoView();</script><br/>'.$this->remove_junks($site_content);
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
        // todo new template of rs
        $this->xml =  file_get_contents(ErikaNews::restoreUrlChar($rss));
        
        $dom = new Query($this->xml);
        $results = $dom->execute('item');
        $images = $dom->queryXpath("//enclosure[@url]");
        try {
            $count = count($results);
            $i=0;
            echo '<div id="list" style="width:320px;overflow-y:scroll; overflow-x:hidden; height:100%;">';
            foreach ($results as $result) {
                
                $titre = $result->childNodes->item(0);
                $description = $result->childNodes->item(3);
                $j=0;
                
                foreach ($images as $res) {
                    if( $j == $i ) {
                        $img = '<img width="300" src="'.$res->getAttribute('url').'"/>';
                    }
                    $j++;
                }
                $inject_script = 'jQuery("#url_data").val("'.$result->childNodes->item(2)->textContent.'");jQuery("#page_position").val("'.$i.'");document.getElementById("url_form").submit();';
                
                echo "<article id='".($i)."'class='forecast' onclick='".$inject_script."'>";
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
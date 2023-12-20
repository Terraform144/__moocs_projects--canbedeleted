<?php
namespace erika;

class ErikaNews
{
    private $url;
    
    public function __construct($url) {
        
        $this->url = $url;
        
    }
    
    public function getRssList($list) {
        
        // todo
        
    }
    
    public static function restoreUrlChar($urlString)
    {
        $in = ['/mamamamamama/','/momomomomomo/','/egalegalegal/'];
        $out = ['?','&', '='];
        
        return preg_replace($in, $out, $urlString);
    }
    
    public function replaceForbiddenUrlChar($urlString)
    {
        $in = ['/\?/','/&/','/=/'];
        $out = ['mamamamamama','momomomomomo','egalegalegal'];
        
        return preg_replace($in, $out, $urlString);
    }
    
    public function getFormattedRssList($list) {
        
        foreach($list as $key=>$subList)
        {
            echo '<div class="panel-group" style="width:100%;">
                    <div class="panel panel-default">
                      <div class="panel-heading">'.$key.'</div>
                      <div class="panel-body">';
            
            echo '<ul>';
            foreach($subList as $k=>$v) echo '<li><a href="http://'.($_SERVER['HTTP_HOST']).'/erikanews?url='.(@$this->replaceForbiddenUrlChar($v)).'">'.$k.'</a></li>';
            echo '</ul>';     
            echo '</div></div></div>';
        }
        
    }
}


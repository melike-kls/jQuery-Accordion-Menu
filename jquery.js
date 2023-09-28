 
$(function(){
    //Değişkenler tanımlanır
    var $sidebar = $(".sidebarMenuList"),
        $siderbarChild = $sidebar.children("li"),
        $slidebarTarget = $sidebar.find("a");
        $sidebarSubMenuList = $siderbarChild.find("ul");

    //Alt menu listesi var mı diye kontrol yapar
    if($sidebarSubMenuList){
    //Alt menu listesi var ise listanin dış kapsayıcısına subMenuWrapper classı ekler
        $sidebarSubMenuList.parent("li").addClass("subMenuWrapper");
    };

    //var olan tüm alt menuler display none yapar
    $sidebarSubMenuList.hide();

    //Menü linkine tıklandıgında ıslem yapar
    $slidebarTarget.on("click", function(event) { 
        //Değişlenler tanımlanır
        var $this = $(this),
            $parent = $this.parent(),
            $dropdown = $this.siblings('ul'),
            $listItem = $parent.siblings(),
            $dropdowns = $listItem.find("ul");

            $dropdown.find("li").removeClass("selected");

            //Alt menü var ise buradaki if calısır
            if($dropdown[0]){
                //eğer menü kapalı ise buradaki if calısır
                if(!$dropdown.hasClass("selected")){
                    $dropdowns.removeClass("selected").slideUp();
                    $listItem.removeClass("selected");
                    $parent.addClass("selected");
                    $dropdown.addClass("selected").slideDown();
                }
                //eğer menu acık ise buradaki else calısır
                else{
                    $dropdown.find("li").removeClass("selected");
                    $dropdown.removeClass("selected").slideUp();
                    $dropdowns.removeClass("selected").slideUp();
                    $parent.removeClass("selected");
                }
            }
            //alt menu yok ise burası calısır
            else{
                $listItem.removeClass("selected");
                $dropdowns.removeClass("selected").slideUp();
                $parent.addClass("selected");
            }
        
    });
});
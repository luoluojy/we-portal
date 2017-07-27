
import '../../assets/libs/js/jquery.min.js';
declare let $:any;
class Item {
  constructor(public name: string,
              public state = 'inactive') {
  }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
    let i=0,j=0;
    for(let item of Items){
      if(item!=this){
        item.state='inactive';
        i++;
      }
      else{
        j=i;
      }
    }

    var newDiv = $("#content > div").eq(j);
    
    if($(".about-left").height()>newDiv.height())
      $(".about").height($(".about-left").height());
    else 
      $(".about").height(newDiv.height());
    $("#content").height(newDiv.height());
    
    newDiv.siblings().animate({"left": "100%", "opacity": 0}, 500);
    
    newDiv.animate({"left": "0px", "opacity": 1}, 500);
			
  }
}

export let Items:Item[]= [
  new Item('科研论文'),
  new Item('知识产权'),
  new Item('科研项目'),
  new Item('获奖情况'),
  new Item('成果展示')
];
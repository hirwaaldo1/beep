
(function(){
    new fullpage('.section',{
        autoScrolling:true,
        navigation:true,
        onLeave:(origin,destination,direction)=>{
            const section =destination.item
            const title = section.querySelector('p')
            const tl = new TimelineMax()
            tl.fromTo(title,1,{y:'50',opacity:0},{y:0,opacity:1})
        }
    })
    alert('lsjdakldj')
})
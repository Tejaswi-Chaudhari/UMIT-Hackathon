import React from 'react'

const Mentors = () => {
    return (
        <div class="container-fluid">
			<h2>MENTORS</h2>  
				<div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
    <!-- Indicators -->
    			<ol class="carousel-indicators">
      			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      			<li data-target="#myCarousel" data-slide-to="1"></li>
      			<li data-target="#myCarousel" data-slide-to="2"></li>
      			<li data-target="#myCarousel" data-slide-to="3"></li>
  			  	</ol>

      <!-- Wrapper for slides -->
        	<div class="carousel-inner" >
         		 <div class="item active">
            			<img src="https://tse2.mm.bing.net/th?id=OIP.Yekp8nIC6WOgogThmSl7ZwHaEo&pid=Api&P=0&w=272&h=171" alt="MENTOR 1" width="460" height="345";>
         		 </div>

         		 <div class="item">
            			<img src="https://tse1.mm.bing.net/th?id=OIP.ebNxdjAi8t7tiaJSjb5UUwHaE9&pid=Api&P=0&w=254&h=171" alt="MENTOR 2" width="460" height="345">
          		 </div>

          		<div class="item">
            			<img src="https://tse2.mm.bing.net/th?id=OIP.Yekp8nIC6WOgogThmSl7ZwHaEo&pid=Api&P=0&w=272&h=171" alt="MENTOR 3" width="460" height="345">
          		</div>
    
          		<div class="item">
            			<img src="https://tse3.mm.bing.net/th?id=OIP.HmymjtR4keFRJkUVR5CF9wHaFj&pid=Api&P=0&w=205&h=155" alt="MENTOR 4" width="460" height="345">
          		</div>

          		<div class="item">
            			<img src="https://tse1.mm.bing.net/th?id=OIP.ebNxdjAi8t7tiaJSjb5UUwHaE9&pid=Api&P=0&w=254&h=171" alt="Chicago" width="460" height="345">
         		</div>
        	</div>

      <!-- Left and right controls -->
    		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
      			<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
     		 	<span class="sr-only">Previous</span>
    		</a>
    		<a class="right carousel-control" href="#myCarousel" data-slide="next">
      		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      		<span class="sr-only">Next</span>
   			</a>
  </div>
</div>
    )
}

export default Mentors

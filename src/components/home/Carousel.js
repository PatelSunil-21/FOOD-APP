import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
    return (<Carousel
        autoPlay
        navButtonsAlwaysVisible
        infiniteLoop
        showStatus={false}
        emulateTouch
        showThumbs={false} >

        <div style={{ maxHeight: "36rem" }}
            className="object-center ">
            <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="pizzaImg" />

        </div>
        <div
            style={{ maxHeight: "36rem" }}
            className="object-center ">
            <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="pizzaImg" />
        </div>

        <div
            style={{ maxHeight: "36rem" }}
            className="object-center ">
             <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="pizzaImg" />
        </div>


    </Carousel>


    )
}

export default CarouselComponent
